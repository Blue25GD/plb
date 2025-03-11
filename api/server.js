import Fastify from "fastify";
import routes from "./routes/index.js";
import cors from "@fastify/cors";

export async function createServer() {
    const fastify = Fastify({logger: true});

    fastify.register(routes);

    await fastify.register(cors, {})

    return fastify;
}
