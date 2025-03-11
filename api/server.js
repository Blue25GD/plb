import Fastify from "fastify";
import routes from "./routes/index.js";

export async function createServer() {
    const fastify = Fastify({logger: true});

    fastify.register(routes); // Register routes

    return fastify;
}
