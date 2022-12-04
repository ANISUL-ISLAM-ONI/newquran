import fs from 'fs';
import datalist from '../../quranfiles/texts/index.js';

export default {
    Query: {
        suratext: async (_, {type}) => {
            // console.log(data[type].quran.sura);
            const raw = fs.readFileSync(datalist[type]);
            // console.log(raw);
            return JSON.parse(raw).quran.sura;
        }
    },
    // Mutation: {
        
    // }
}