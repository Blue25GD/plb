import {database} from "./database.js";

async function beginTransaction() {
    return database.query("BEGIN");
}

async function commitTransaction() {
    return database.query("COMMIT");
}

async function rollbackTransaction() {
    return database.query("ROLLBACK");
}

async function executeTransaction(query, params) {
    try {
        await beginTransaction();
        await database.query(query, params);
        await commitTransaction();
    } catch (error) {
        await rollbackTransaction();
        throw error;
    }
}

export {
    beginTransaction,
    commitTransaction,
    rollbackTransaction,
    executeTransaction
}