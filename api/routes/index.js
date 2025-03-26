import sessionRoutes from "./session.routes.js";
import assessmentRoutes from "./assessment.routes.js";
import competencesRoutes from "./competences.routes.js";
import reportRoutes from "./report.routes.js";

export default async function routes(fastify) {
    fastify.register(sessionRoutes, {prefix: "/sessions"});
    fastify.register(assessmentRoutes, {prefix: "/assessments"});
    fastify.register(competencesRoutes, {prefix: "/competences"});
    fastify.register(reportRoutes, {prefix: "/reports"});
}
