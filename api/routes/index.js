import sessionRoutes from "./session.routes.js";

export default async function routes(fastify) {
    fastify.register(sessionRoutes, {prefix: "/sessions"});
}
