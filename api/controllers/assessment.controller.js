import {Assessment} from "../models/assessment.js";

export const createAssessment = async (req, reply) => {
    const assessment = new Assessment({
        user_id: req.user.attributes.id
    });
    await assessment.save();

    return reply.send({
        id: assessment.id
    });
}