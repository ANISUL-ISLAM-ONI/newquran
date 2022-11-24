const data = require('../../quranfiles/translations');

module.exports = {
    Query: {
        translatedsuratext: async (_, {type}) => {
            // console.log(data[type].quran.sura);
            return data[type].quran.sura;
        }
    },
    // Mutation: {
        
    // }
}