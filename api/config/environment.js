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
    /**
     * unsavedAssessmentTimeout is the time in seconds after which an unsaved assessment is considered abandoned
     * and is automatically deleted from the database. This is to prevent the database from filling up with abandoned assessments.
     * Default is 1 week (7 days * 24 hours * 60 minutes * 60 seconds, aka 604800 seconds)
     */
    unsavedAssessmentTimeout: process.env.UNSAVED_ASSESSMENT_TIMEOUT || 7 * 24 * 60 * 60,
    // Use the next line to clear the database
    // unsavedAssessmentTimeout: process.env.UNSAVED_ASSESSMENT_TIMEOUT || 1,
}