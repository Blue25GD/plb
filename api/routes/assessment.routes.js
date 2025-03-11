import {createAssessment} from "../controllers/assessment.controller.js";
import {authMiddleware} from "../middleware/authentication.js";

export default async function assessmentRoutes(fastify) {
    fastify.post("/", {preHandler: authMiddleware}, createAssessment);
}