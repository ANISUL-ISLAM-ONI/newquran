const { model, Schema } = require('mongoose');

const chapterSchema = new Schema({
    id: String,
    revelation_place: String,
    revelation_order: Number,
    bismillah_pre: Boolean,
    name_complex: String,
    name_arabic: String,
    verses_count: Number,
    pages: [Number],
    translated_name: [{ type: Schema.Types.ObjectId, ref: 'TranslatedName' }],
});


module.exports = model('Chapter', chapterSchema);