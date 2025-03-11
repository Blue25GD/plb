import {missingParams, unauthorized} from "../services/responses.js";
import {User} from "../models/user.js";

export const createSession = async (request, reply) => {
    // NOTE: Sessions are anonymous
    const user = new User({});

    await user.save()

    const session = await user.createSession();

    return reply.send({
        token: session.attributes.token
    });
}