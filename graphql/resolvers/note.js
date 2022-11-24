const Note = require('../../models/Note');
const Tag = require('../../models/Tag');
const User = require('../../models/User');

module.exports = {
    Query: {
        notes: async (_, {chapter, verse, username}) => {
            let res;
            const user = await User.findOne({username: username}).exec();
            try{
                if(!user) throw "Not Found";
                res = await Note.find({chapter: chapter, verse: verse, user: user});
                if(res.length === 0) throw "Not Found";
                for(let i = 0; i < res.length; i++){
                    res[i] = await res[i].populate([{path: 'user', model: User}, {path: 'tags', model: Tag}]);
                };
            }
            catch(err){
                res = [{
                    chapter: 0,
                    verse: 0,
                    texts: ["Not Found",],
                    tags: [{token: "Not Found", verses: [{
                        chapter: 0,
                        verse: 0
                    },]}],
                }];
            }
            return res;
        }
    },
    Mutation: {
        createNote: async (_, {chapter, verse, text, username}) => {
            let note;
            try{
                const user = await User.findOne({username: username}).exec();
                if(!user) throw "User not found";
                note = await Note.findOne({chapter: chapter, verse: verse, user: user});
                if(!note){
                    note = new Note({chapter: chapter, verse: verse, user: user});
                }
                const dumi = note.texts.find(elem => elem == text);
                if(!dumi){
                    note.texts.push(text);
                    var wordarray = [];
                    let dumptext = text;
                    dumptext.trim().replace('.', ' ').split(' ').map((value) => {
                        if(value[0] === '#') wordarray.push(value.replace('#', ''));
                    });
                    for(let i = 0; i < wordarray.length; i++){
                        let newtag = await Tag.findOne({token: wordarray[i]});
                        if(!newtag){
                            newtag = new Tag({token: wordarray[i], user: user});
                        }
                        var ch = true;
                        newtag.verses.forEach((value) => {
                            if(value.chapter === chapter && value.verse === verse){
                                ch = false;
                            }
                        });
                        if(ch) newtag.verses.push({chapter, verse});
                        newtag.save();
                        note = await note.populate([{path: 'tags', model: Tag}]);
                        const temp = note.tags.find((tag) => {
                            return tag.token == newtag.token;
                        });
                        if(!temp) note.tags.push(newtag);
                    }
                }
                note = await note.save();
                note = await note.populate([{path: 'user', model: User}, {path: 'tags', model: Tag}]);
            }
            catch(newerr){
                note = {
                    chapter: 0,
                    verse: 0,
                    texts: ["User Not Found",],
                    tags: [{token: "User Not Found", verses: [{
                        chapter: 0,
                        verse: 0
                    },]}],
                }
            }
            return note;
        }
    }
}