const { RESTDataSource } = require('apollo-datasource-rest');

class ChapterInfo extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.quran.com/api/v4/";
    }
    getChapterInfo(id, language){
        return this.get(`chapters/${id}/info?language=${language}`);
    }
    // getChapter(chapterId){
    //     return this.get(`chapters/${chapterId}?language=en`);
    // }
    // getChapterInfo(chapterId, language){
    //     return this.get(`chapters/${chapterId}/info?language=${language}`);
    // }
}

module.exports = ChapterInfo;