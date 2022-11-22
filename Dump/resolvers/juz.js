const Juz = require('../../models/Juz');

module.exports = {
    Query: {
        juz: async (_, __, {dataSources}) => {
            try{
                const res = await Juz.find();
                res.map((res) => {
                    res.verse_mapping = res.verse_mapping.toJSON();
                });
                // console.log(res);
                if(!res.length) throw "No juz found";
                // console.log(res);
                return res;
            }
            catch(err){
                const resp = dataSources.juz.getJuz().then((res) => {return res;});
                const getdata = async () => {
                    const res = await resp;
                    return res;
                }
                let result = await getdata();
                result = result.juzs;
                // console.log(result);
                // const chap = result.chapter_info;
                // const newChapterInfo = new ChapterInfo(chap);
                // const temp = await newChapterInfo.save();
                result.map(async (data) => {
                    const newJuz = new Juz(data);
                    const runi = await newJuz.save();
                });
                return result;
            }
        }
    }
}
