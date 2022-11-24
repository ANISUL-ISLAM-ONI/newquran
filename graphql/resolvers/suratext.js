const data = require('../../quranfiles/texts');

module.exports = {
    Query: {
        suratext: async (_, {type}) => {
            // console.log(data[type].quran.sura);
            return data[type].quran.sura;
        }
    },
    // Mutation: {
        
    // }
}