const { model, Schema } = require('mongoose');

const tagSchema = new Schema({
    token: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    verses: [{ chapter: Number, verse: Number }],
});

module.exports = model('Tag', tagSchema);