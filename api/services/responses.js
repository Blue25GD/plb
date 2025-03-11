export function unauthorized(reply) {
    return reply
        .status(401)
        .send({error: "Unauthorized"});
}

export function missingParams(reply, params) {
    const keys = Object.keys(params);
    const missing = keys.filter(key => !params[key]);
    return reply
        .status(400)
        .send({error: `Missing parameters: ${missing.join(", ")}`});
}