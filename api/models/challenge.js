import {Model} from "./model.js";
import {database} from "../db/database.js";
import {AssessmentChallenge} from "./assessmentChallenge.js";

export class Challenge extends Model {
    static table = 'challenges';

    static async findRandomUnused(assessmentId, competences = []) {
        const competenceFilter = competences.length > 0 ? 'AND competence_id IN (?)' : '';
        const params = [Challenge.table, AssessmentChallenge.table, assessmentId];

        if (competences.length > 0) {
            params.push(competences);
        }

        const [challenges] = await database.query(
            `SELECT *
             FROM ??
             WHERE id NOT IN (SELECT challenge_id FROM ?? WHERE assessment_id = ?) ${competenceFilter}
             ORDER BY RAND()
             LIMIT 1`,
            params
        );

        if (!challenges.length) {
            return null;
        }

        return new this(challenges[0]);
    }
}