const { RESTDataSource } = require('apollo-datasource-rest');

class Chapter extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.quran.com/api/v4/";
    }
    getChapter(id, language){
        return this.get(`chapters/${id}?language=${language}`);
    }
    // getChapter(chapterId){
    //     return this.get(`chapters/${chapterId}?language=en`);
    // }
    // getChapterInfo(chapterId, language){
    //     return this.get(`chapters/${chapterId}/info?language=${language}`);
    // }
}

module.exports = Chapter;