import {Model} from "./model.js";
import {Challenge} from "./challenge.js";
import {AssessmentChallenge} from "./assessmentChallenge.js";
import {config} from "../config/environment.js";
import {database} from "../db/database.js";

export class Assessment extends Model {
    static table = 'assessments';
    #competences;

    constructor(attributes = {}) {
        const {competences, ...dbAttributes} = attributes;
        super(dbAttributes);
        this.#competences = competences || [];
    }

    async addRandomChallenge() {
        const challenge = await Challenge.findRandomUnused(this.id, this.#competences);

        if (!challenge) {
            return new Error('No challenges found');
        }

        const assessmentChallenge = new AssessmentChallenge({
            assessment_id: this.id,
            challenge_id: challenge.id
        });

        await assessmentChallenge.save();
        return assessmentChallenge;
    }

    async getCurrentChallenge() {
        return await Challenge.findBy('id', this.attributes.current_challenge_id)
    }

    async submitAnswer(answer) {
        const [currentChallenge] = (await this.getCurrentChallenge()) ?? [];

        if (!currentChallenge) {
            return new Error('No current challenge found')
        }

        const joinChallenges = await AssessmentChallenge.findBy('assessment_id', this.id)
        const joinChallenge = await joinChallenges.find(joinChallenge => joinChallenge.attributes.challenge_id === currentChallenge.id)
        joinChallenge.attributes.is_answered = true
        if (currentChallenge.attributes.solution === answer) {
            joinChallenge.attributes.is_correct = true
        }
        await joinChallenge.save()

        return this._getNextChallenge()
    }

    async _getNextChallenge() {
        const joinChallenges = await AssessmentChallenge.findBy('assessment_id', this.id)
        const joinChallenge = joinChallenges.find(joinChallenge => !joinChallenge.attributes.is_answered)
        if (!joinChallenge) {
            this.attributes.current_challenge_id = null
            await this.save()
            return null
        }
        this.attributes.current_challenge_id = joinChallenge.attributes.challenge_id
        await this.save()

        return Challenge.findBy('id', joinChallenge.attributes.challenge_id)
    }

    /**
     * Get the progress of the assessment
     * @returns {Promise<{
     *     totalChallenges: number,
     *     answeredChallenges: number
     * }>} aka
     */
    async getProgress(withChallenges = true) {
        const joinChallenges = await AssessmentChallenge.findBy('assessment_id', this.id)
        if (!joinChallenges || !joinChallenges.length) {
            return {
                totalChallenges: 0,
                answeredChallenges: 0,
                correctChallenges: 0
            }
        }
        const totalChallenges = joinChallenges.length
        const answeredChallenges = joinChallenges.filter(joinChallenge => joinChallenge.attributes.is_answered).length
        const correctChallenges = joinChallenges.filter(joinChallenge => joinChallenge.attributes.is_correct).length
        if (!withChallenges) {
            return {
                totalChallenges,
                answeredChallenges,
                correctChallenges
            }
        }
        let incorrectChallenges = joinChallenges.filter(joinChallenge => !joinChallenge.attributes.is_correct)
        incorrectChallenges = await Promise.all(
            incorrectChallenges.map(async joinChallenge => {
                const [challenge] = await Challenge.findBy('id', joinChallenge.attributes.challenge_id)
                return {
                    id: challenge.id,
                    question: challenge.attributes.question,
                    proposals: challenge.attributes.proposals,
                    solution: challenge.attributes.solution,
                    image_url: challenge.attributes.image_url
                }
            })
        )

        return {
            totalChallenges,
            answeredChallenges,
            correctChallenges,
            incorrectChallenges
        }
    }

    static async deleteOldAssessments() {
        const [assessmentIds] = await database.query(
            `SELECT id
             FROM ? ?
             WHERE created_at < NOW() - INTERVAL ? SECOND`,
            [this.table, config.unsavedAssessmentTimeout]
        );

        if (!assessmentIds.length) {
            return;
        }

        const ids = assessmentIds.map(assessment => assessment.id);

        await database.query(
            `DELETE FROM ?? WHERE assessment_id IN (?)`,
            [AssessmentChallenge.table, ids]
        );

        await database.query(
            `DELETE FROM ?? WHERE id IN (?)`,
            [this.table, ids]
        );
    }

    async saveAndReturnCode() {
        if (this.attributes.save_code) {
            await database.query(
                `UPDATE ${this.constructor.table}
                 SET saved_at = CURRENT_TIMESTAMP
                 WHERE id = ?`,
                [this.id]
            );
            return this.attributes.save_code;
        }

        const code = Math.random()
            .toString(36)
            .toUpperCase()
            .replace(/[^A-Z0-9]/g, '')
            .slice(0, 8);
        await database.query(
            `UPDATE ${this.constructor.table}
             SET save_code = ?,
                 saved_at  = CURRENT_TIMESTAMP
             WHERE id = ?`,
            [code, this.id]
        );
        return code;
    }

    async delete() {
        // First delete all associated assessment_challenges
        await database.query(
            `DELETE FROM ${AssessmentChallenge.table} WHERE assessment_id = ?`,
            [this.id]
        );

        // Then delete the assessment itself
        await database.query(
            `DELETE FROM ${this.constructor.table} WHERE id = ?`,
            [this.id]
        );
    }
}