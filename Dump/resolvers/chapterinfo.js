const ChapterInfo = require('../../models/ChapterInfo');
const isomap = require('./isomap');

module.exports = {
    Query: {
        chapterInfo: async (_, {id, language}, {dataSources}) => {
            try{
                const res = await ChapterInfo.findOne({chapter_id: id});
                let result = {
                    id: res.id,
                    ...res._doc
                }
                return result;
            }
            catch(err){
                const resp = dataSources.chapterInfo.getChapterInfo(id, isomap[language]).then((res) => {return res;});
                const getdata = async () => {
                    const res = await resp;
                    return res;
                }
                const result = await getdata();
                const chap = result.chapter_info;
                const newChapterInfo = new ChapterInfo(chap);
                const temp = await newChapterInfo.save();
                return chap;
            }
        }
    }
}
