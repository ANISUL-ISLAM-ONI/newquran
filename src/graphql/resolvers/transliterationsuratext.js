import fs from 'fs';
import datalist from '../../quranfiles/transliterations/index.js';

export default {
    Query: {
        transliterationsuratext: async (_, {type}) => {
            // console.log(data[type].quran.sura);
            const raw = fs.readFileSync(datalist[type]);
            return JSON.parse(raw).quran.sura;
        }
    },
    // Mutation: {
        
    // }
}