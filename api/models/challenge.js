import {Model} from "./model.js";
import {database} from "../db/database.js";
import {AssessmentChallenge} from "./assessmentChallenge.js";

export class Challenge extends Model {
    static table = 'challenges';

    static async findRandomUnused(assessmentId, competences = [], useNewProgram = true) {
        const competenceFilter = competences.length > 0 ? 'AND competence_id IN (?)' : '';
        const params = [Challenge.table, AssessmentChallenge.table, assessmentId];

        if (competences.length > 0) {
            params.push(competences);
        }

        let [challenges] = await database.query(
            `SELECT *
             FROM ??
             WHERE id NOT IN (SELECT challenge_id FROM ?? WHERE assessment_id = ?) ${competenceFilter}
             ORDER BY RAND()`,
            params
        );

        if (!challenges.length) {
            return null;
        }

        if (useNewProgram) {
            challenges = challenges.filter(challenge => challenge.year >= 2015);
            challenges.sort(() => Math.random() - 0.5);
        }

        return new this(challenges[0]);
    }
}