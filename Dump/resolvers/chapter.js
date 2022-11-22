const Chapter = require('../../models/Chapter');
const TranslatedName = require('../../models/TranslatedName');
const isomap = require('./isomap');

module.exports = {
    Query: {
        chapter: async (_, {id, language}, {dataSources}) => {
            try{
                const res = await Chapter.findOne({id: id}).populate({
                    path: 'translated_name',
                    match: {language_name: language},
                    select: "-_id -__v",
                });
                if(!res || !res.translated_name.length) throw "Does not found";
                let result = {
                    id: res.id,
                    ...res._doc
                }
                result.translated_name = result.translated_name[0];
                return result;
            }
            catch(err){
                const resp = dataSources.chapter.getChapter(id, isomap[language]).then((res) => {return res;});
                const getdata = async () => {
                    const res = await resp;
                    return res;
                }
                const result = await getdata();
                const chap = result.chapter;
                const newTranslatedName = new TranslatedName({
                    language_name: language,
                    name: chap.translated_name.name,
                });
                const transname = await newTranslatedName.save();
                chap.translated_name.language_name = transname.language_name;
                let newChapter;
                try {
                    newChapter = await Chapter.findOne({id: id});
                    if(!newChapter) throw "Does not found";
                }
                catch(err){
                    newChapter = new Chapter({
                        id: chap.id,
                        revelation_place: chap.revelation_place,
                        revelation_order: chap.revelation_order,
                        bismillah_pre: chap.bismillah_pre,
                        name_complex: chap.name_complex,
                        name_arabic: chap.name_arabic,
                        verses_count: chap.verses_count,
                        pages: chap.pages,
                    });
                }
                newChapter.translated_name.push(transname);
                // console.log(newChapter);
                const temp = await newChapter.save();
                return chap;
            }
        }
    }
}
