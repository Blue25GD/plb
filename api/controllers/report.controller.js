import {missingParams} from "../services/responses.js";
import {Report} from "../models/report.js";

const createReport = async (req, res) => {
    // check for required parameters
    const body = req.body;
    const {challengeId} = body;

    if (!challengeId) {
        return missingParams(res, {challengeId});
    }

    const {note} = body;

    const ip = req.ip || req.headers['x-forwarded-for'];

    // create report
    const report = new Report({
        user_id: req.user.attributes.id,
        challenge_id: challengeId,
        note: note,
        ip_address: ip
    })

    await report.save()

    return res.send({id: report.id});
}

export {
    createReport
}