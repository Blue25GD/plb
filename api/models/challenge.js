import {Model} from "./model.js";
import {database} from "../db/database.js";
import {AssessmentChallenge} from "./assessmentChallenge.js";

export class Challenge extends Model {
    static table = 'challenges';

    static async findRandomUnused(assessmentId) {
        const challenge = await database.query(`SELECT * FROM ${Challenge.table} WHERE id NOT IN (SELECT challenge_id FROM ${AssessmentChallenge.table} WHERE assessment_id = ?) ORDER BY rand() LIMIT 1`, [assessmentId]);

        if (!challenge[0].length) {
            return null;
        }

        return new this(challenge[0][0])
    }
}