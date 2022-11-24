const data = require('../../quranfiles/transliterations');

module.exports = {
    Query: {
        transliterationsuratext: async (_, {type}) => {
            // console.log(data[type].quran.sura);
            return data[type].quran.sura;
        }
    },
    // Mutation: {
        
    // }
}