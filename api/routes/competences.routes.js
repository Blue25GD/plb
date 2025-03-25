import { getCompetences } from '../controllers/competences.controller.js';
import { authMiddleware } from '../middleware/authentication.js';

export default async function competencesRoutes(fastify) {
    fastify.get('/', { preHandler: authMiddleware }, getCompetences);
} 