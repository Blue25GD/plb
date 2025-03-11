import {createServer} from "./server.js";

const startServer = async () => {
    try {
        const fastify = await createServer();
        await fastify.listen({port: 3000});
        console.log("Server running on http://localhost:3000");
    } catch (err) {
        console.error("Error starting server:", err);
        process.exit(1);
    }
};

startServer();
