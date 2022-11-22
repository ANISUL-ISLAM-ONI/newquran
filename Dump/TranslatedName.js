const { model, Schema } = require('mongoose');

const translatedNameSchema = new Schema({
    language_name: String,
    name: String,
});

module.exports = model('TranslatedName', translatedNameSchema);