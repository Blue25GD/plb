import { db } from '../db/index.js';

export async function getCompetences(request, reply) {
    try {
        const competences = await db.all('SELECT id, name FROM competences ORDER BY id');
        return reply.send({
            success: true,
            data: competences
        });
    } catch (error) {
        console.error('Error fetching competences:', error);
        return reply.status(500).send({
            success: false,
            error: 'Internal server error'
        });
    }
} 