const fs = require('node:fs/promises');
const path = require('node:path');

const reader = async () => {
    const buffer = await fs.readFile(path.join(process.cwd(), 'database', 'users.json'));


};


module.exports = {
    reader,
};


