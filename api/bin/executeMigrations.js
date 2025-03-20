import {database} from "../db/database.js";
import fs from "fs";
import {beginTransaction, commitTransaction, executeTransaction, rollbackTransaction} from "../db/operations.js";

const [tables] = await database.query("SHOW TABLES");
if (!tables.find(table => table[Object.keys(table)[0]] === "migrations")) {
    const content = fs.readFileSync("db/initialSetup.sql", "utf-8");
    await database.query(content);
    console.log("Database setup completed");
}

const [alreadyExecutedMigrations] = await database.query("SELECT * FROM migrations");

const allMigrations = fs.readdirSync("db/migrations");

const migrationsToExecute = allMigrations.filter(migration => {
    return !alreadyExecutedMigrations.find(executedMigration => executedMigration.name === migration);
}).sort()

console.log(`Migrations to execute: ${migrationsToExecute}`);

for (const migration of migrationsToExecute) {
    const content = fs.readFileSync(`db/migrations/${migration}`, "utf-8");
    await beginTransaction();
    try {
        await database.query(content);
        const preparedStatement = "INSERT INTO migrations (name) VALUES (?)"
        await database.execute(preparedStatement, [migration]);
        await commitTransaction();
        console.log(`Migration ${migration} executed`);
    } catch (e) {
        console.error(e);
        await rollbackTransaction()
    }
}

console.log("All migrations executed");

// Close the database connection properly to allow the process to exit
try {
    await database.end();
    console.log("Database connection closed");
} catch (error) {
    console.error("Error closing database connection:", error);
    process.exit(1); // Exit with error code
}

// Explicitly exit the process to ensure it doesn't hang
process.exit(0);