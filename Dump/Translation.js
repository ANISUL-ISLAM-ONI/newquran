const { model, Schema } = require('mongoose');

const translationSchema = new Schema({
    resource_id: Number,
    resource_name: String,
    id: Number,
    text: String,
    verse_id: Number,
    language_id: Number,
    language_name: String,
    verse_key: String,
    chapter_id: Number,
    verse_number: Number,
    juz_number: Number,
    hizb_number: Number,
    rub_number: Number,
    page_number: Number,
});


module.exports = model('Translation', translationSchema);