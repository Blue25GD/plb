import { database } from './database.js';

export const db = {
    async all(query, params = []) {
        const [rows] = await database.query(query, params);
        return rows;
    },
    
    async get(query, params = []) {
        const [rows] = await database.query(query, params);
        return rows[0];
    },
    
    async run(query, params = []) {
        const [result] = await database.query(query, params);
        return result;
    }
}; 