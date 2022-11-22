const { model, Schema } = require('mongoose');

const tafsirSchema = new Schema({
    id: String,
    verse_id: Number,
    language_id: Number,
    text: String,
    language_name: String,
    resource_name: String,
    verse_key: String,
    chapter_id: Number,
    verse_number: Number,
    juz_number: Number,
    hizb_number: Number,
    rub_number: Number,
    page_number: Number,
});


module.exports = model('Tafsir', tafsirSchema);