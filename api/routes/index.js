import sessionRoutes from "./session.routes.js";
import assessmentRoutes from "./assessment.routes.js";

export default async function routes(fastify) {
    fastify.register(sessionRoutes, {prefix: "/sessions"});
    fastify.register(assessmentRoutes, {prefix: "/assessments"});
}
