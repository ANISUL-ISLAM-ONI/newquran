import fs from 'fs';
import datalist from '../../quranfiles/translations/index.js';

export default {
    Query: {
        translatedsuratext: async (_, {type}) => {
            // console.log(data[type].quran.sura);
            const raw = fs.readFileSync(datalist[type]);
            return JSON.parse(raw).quran.sura;
        }
    },
    // Mutation: {
        
    // }
}