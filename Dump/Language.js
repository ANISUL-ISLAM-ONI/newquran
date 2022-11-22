const { model, Schema } = require('mongoose');

const languageSchema = new Schema({
    id: String,
    name: String,
    native_name: String,
    iso_code: String,
    direction: String,
    translated_names: { type: Schema.Types.ObjectId, ref: 'TranslatedName' }
});


module.exports = model('Language', languageSchema);