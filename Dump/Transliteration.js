const { model, Schema } = require('mongoose');

const transliterationSchema = new Schema({
    language_name: String,
    text: String,
});


module.exports = model('Transliteration', transliterationSchema);