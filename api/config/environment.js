import * as dotenv from 'dotenv';
import findConfig from 'find-config';

dotenv.config({path: findConfig('.env')});

export const config = {
    db: {
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        host: process.env.MYSQL_HOST || "127.0.0.1",
        port: process.env.MYSQL_PORT,
    },
}