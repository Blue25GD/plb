const fs = require('fs');

const convertAnswerToNumber = (answer) => ({'a': 1, 'b': 2, 'c': 3, 'd': 4}[answer.toLowerCase()] || 'NULL');

const transformSQL = (inputFile, outputFile) => {
    const content = fs.readFileSync(inputFile, 'utf-8');
    const pattern = /INSERT\s+INTO\s+questions\s*\(\s*question,\s*answer_a,\s*answer_b,\s*answer_c,\s*answer_d,\s*answer,\s*image_url,\s*category_id,\s*created_at,\s*updated_at\s*\)\s*VALUES\s*\(\s*'(.+?)',\s*'(.+?)',\s*'(.+?)',\s*'(.+?)',\s*'(.+?)',\s*'(.+?)',\s*'([^']*)',\s*(\d+),\s*CURRENT_TIMESTAMP,\s*CURRENT_TIMESTAMP\s*\)\s*;/gs;

    const transformedQueries = [...content.matchAll(pattern)].map(match => {
        const [_, question, a, b, c, d, correct, image_url, competence_id] = match;
        return `INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
                VALUES ('${question}', '${a}\n${b}\n${c}\n${d}', ${convertAnswerToNumber(correct)}, '${image_url}',
                        ${competence_id}, CURRENT_TIMESTAMP);  `;
    }).join('');

    fs.writeFileSync(outputFile, transformedQueries);
    console.log(`Conversion completed. Output saved to ${outputFile}`);
};

// Example usage
transformSQL('input.sql', 'output.sql');
