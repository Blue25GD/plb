import mysql from 'mysql2/promise';
import {config} from "../config/environment.js";

export const database = await mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    port: config.db.port,
    multipleStatements: true
})