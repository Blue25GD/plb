import {createSession} from "../controllers/session.controller.js";

export default async function sessionRoutes(fastify) {
    fastify.post("/", createSession);
}