import fs from 'fs';

const raw = fs.readFileSync('./src/quranfiles/quran-data.json');

export default JSON.parse(raw);