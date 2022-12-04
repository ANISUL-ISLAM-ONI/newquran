import User from "../../models/User.js"


export default {
    Query: {
        user: async (_, {username}) => {
            let res;
            try{
                res = User.findOne({username: username}).exec();
            }
            catch(err){
                res = {
                    username: "Not found",
                    firstname: "Not found",
                    lastname: "Not found",
                    email: "Not found",
                    isstaff: false,
                }
            }
            return res;
        }
    },
    Mutation: {
        createUser: async (_, userinfo) => {
            let res;
            try{
                res = User.findOne({username: username}).exec();
            }
            catch(err){
                const newuser = new User(userinfo);
                res = await newuser.save();
            }
            return res;
        }
    }
}