import Tag from '../../models/Tag.js';
import User from '../../models/User.js';

export default {
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