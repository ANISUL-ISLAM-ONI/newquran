const { model, Schema } = require('mongoose');

const recitationSchema = new Schema({
    id: String,
    reciter_name: String,
    style: String,
    translated_name: {type: Schema.Types.ObjectId, ref: 'TranslatedName' },
});


module.exports = model('Recitation', recitationSchema);