import {authMiddleware} from "../middleware/authentication.js";
import {createReport} from "../controllers/report.controller.js";

export default function reportRoutes(fastify) {
    fastify.post("/", {preHandler: authMiddleware}, createReport);
}