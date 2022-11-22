const { model, Schema } = require('mongoose');

const wordSchema = new Schema({
    id: String,
    position: Number,
    text_uthmani: String,
    text_indopak: String,
    text_imlaei: String,
    verse_key: String,
    page_number: Number,
    line_number: Number,
    audio_url: String,
    location: String,
    char_type_name: String,
    code_v1: String,
    code_v2: String,
    translation: { type: Schema.Types.ObjectId, ref: 'Translation' },
    transliteration: { type: Schema.Types.ObjectId, ref: 'Transliteration' },
    v1_page: Number,
    v2_page: Number,
});


module.exports = model('Word', wordSchema);