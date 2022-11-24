const Tag = require('../../models/Tag');
const User = require('../../models/User');

module.exports = {
    Query: {
        versesbytag: async (_, {token, username}) => {
            const user = await User.findOne({username: username}).exec();
            let res;
            try{
                if(!user) throw "Not Found";
                res = await Tag.findOne({token: token, user: user});
                if(!res) throw "Not Found";
                res = res.verses;
            }
            catch(err){
                res = [{
                    chapter: 0,
                    verse: 0
                }];
            }
            return res;
        }
    },
    // Mutation: {
        
    // }
}