import {input} from '@inquirer/prompts';
import fs from 'fs';

const answer = await input({message: 'Migration name', default: 'create_table'});

const fileName = `${createIdBasedOnDate()}_${answer}.sql`;

console.log(`Creating migration files: ${fileName}`);

createDirIfNotExists('db/migrations');

fs.writeFileSync(`db/migrations/${fileName}`, '');

console.log('Done!');

function createIdBasedOnDate() {
    const date = new Date();
    return date
        .toISOString()
        .replace(/[-:]/g, '')
        .replace('T', '_')
        .split('.')[0]
}

function createDirIfNotExists(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {recursive: true});
    }
}