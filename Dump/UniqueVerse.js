const { model, Schema } = require('mongoose');

const uniqueVerseSchema = new Schema({
    juz: Number,
    chapter: Number,
    verse: Number,
});


module.exports = model('UniqueVerse', uniqueVerseSchema);