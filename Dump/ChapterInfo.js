const { model, Schema } = require('mongoose');

const chapterInfoSchema = new Schema({
    chapter_id: Number,
    text: String,
    short_text: String,
    language_name: String,
    source: String,
});


module.exports = model('ChapterInfo', chapterInfoSchema);