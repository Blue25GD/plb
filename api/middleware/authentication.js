import {Session} from "../models/session.js";
import {User} from "../models/user.js";
import {unauthorized} from "../services/responses.js";

async function _validateSessionToken(token) {
    return Session.findBy("token", token);
}

async function _getUserFromSession(session) {
    return User.findBy("id", session.attributes.user_id);
}

export async function authMiddleware(req, reply) {
    const token = req.headers.authorization;

    if (!token) return unauthorized(reply);

    const sessionArray = await _validateSessionToken(token);
    if (!sessionArray) return unauthorized(reply);
    const [session] = sessionArray;

    const [user] = await _getUserFromSession(session);
    req.user = user;
}