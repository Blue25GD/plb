import {
    createAssessment,
    getAssessment, getAssessments,
    getResults,
    submitAnswer,
    deleteAssessment
} from "../controllers/assessment.controller.js";
import {authMiddleware} from "../middleware/authentication.js";

export default async function assessmentRoutes(fastify) {
    fastify.post("/", {preHandler: authMiddleware}, createAssessment);
    fastify.get("/:assessmentId", {preHandler: authMiddleware}, getAssessment);
    fastify.post("/:assessmentId", {preHandler: authMiddleware}, submitAnswer);
    fastify.get("/:assessmentId/results", {preHandler: authMiddleware}, getResults);
    fastify.get('/', {preHandler: authMiddleware}, getAssessments);
    fastify.delete("/:assessmentId", {preHandler: authMiddleware}, deleteAssessment);
}