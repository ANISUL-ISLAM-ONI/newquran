const Tag = require('../../models/Tag');
const UniqueVerse = require('../../models/UniqueVerse');
const User = require('../../models/User');

module.exports = {
    Query: {
        versebytag: async (_, {token, username}) => {
            let res;
            try{
                try{
                    user = await User.findOne({username: username});
                    res = await Tag.findOne({token: token, user: user}).populate([{path: 'verses', model: UniqueVerse}]);
                    res = res.verses;
                    // console.log(res);
                }
                catch(err){
                    throw "Not found error";
                }
            }
            catch(err){
                res = [{
                    juz: null,
                    chapter: null,
                    verse: null,
                },]
            }
            return res;
        },
    }
}
