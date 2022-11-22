const { model, Schema } = require('mongoose');

const verseSchema = new Schema({
    id: String,
    chapter_id: Number,
    verse_number: Number,
    verse_key: String,
    verse_index: Number,
    text_uthmani: String,
    text_uthmani_simple: String,
    text_imlaei: String,
    text_imlaei_simple: String,
    text_indopak: String,
    text_uthmani_tajweed: String,
    juz_number: Number,
    hizb_number: Number,
    rub_number: Number,
    sajdah_type: String,
    sajdah_number: Number,
    page_number: Number,
    image_url: String,
    image_width: Number,
    words: { type: Schema.Types.ObjectId, ref: 'Word' },
    audio: { type: Schema.Types.ObjectId, ref: 'AudioFile' },
    translations: { type: Schema.Types.ObjectId, ref: 'Translation' },
    code_v1: String,
    code_v2: String,
    v1_page: Number,
    v2_page: Number,
});


module.exports = model('Verse', verseSchema);