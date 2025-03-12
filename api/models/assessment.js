import {Model} from "./model.js";
import {Challenge} from "./challenge.js";
import {AssessmentChallenge} from "./assessmentChallenge.js";

export class Assessment extends Model {
    static table = 'assessments';

    async addRandomChallenge() {
        const challenge = await Challenge.findRandomUnused(this.id)

        if (!challenge) {
            return new Error('No challenges found')
        }

        const assessmentChallenge = new AssessmentChallenge({
            assessment_id: this.id,
            challenge_id: challenge.id
        })

        await assessmentChallenge.save()
        return assessmentChallenge
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
    async getProgress() {
        const joinChallenges = await AssessmentChallenge.findBy('assessment_id', this.id)
        const totalChallenges = joinChallenges.length
        const answeredChallenges = joinChallenges.filter(joinChallenge => joinChallenge.attributes.is_answered).length
        const correctChallenges = joinChallenges.filter(joinChallenge => joinChallenge.attributes.is_correct).length
        let incorrectChallenges = joinChallenges.filter(joinChallenge => !joinChallenge.attributes.is_correct)
        incorrectChallenges = await Promise.all(
            incorrectChallenges.map(async joinChallenge => {
                const [challenge] = await Challenge.findBy('id', joinChallenge.attributes.challenge_id)
                return {
                    id: challenge.id,
                    question: challenge.attributes.question,
                    proposals: challenge.attributes.proposals,
                    solution: challenge.attributes.solution,
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
}