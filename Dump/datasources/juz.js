const { RESTDataSource } = require('apollo-datasource-rest');

class Juz extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.quran.com/api/v4/";
    }
    getJuz(){
        return this.get(`juzs`);
    }
}

module.exports = Juz;