const { model, Schema } = require('mongoose');

const juzSchema = new Schema({
    id: Number,
    juz_number: Number,
    first_verse_id: Number,
    last_verse_id: Number,
    verses_count: Number,
    verse_mapping: [{type: Map, of: String}],
});


module.exports = model('Juz', juzSchema);