import {createServer} from "./server.js";

const startServer = async () => {
    try {
        const fastify = await createServer();
        await fastify.listen({port: 6660, host: "0.0.0.0"});
        console.log("Server running on http://localhost:6660");
    } catch (err) {
        console.error("Error starting server:", err);
        process.exit(1);
    }
};

startServer();
