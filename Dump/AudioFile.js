const { model, Schema } = require('mongoose');

const audioFileSchema = new Schema({
    url: String,
    duration: Number,
    format: String,
    segments: [[[Number]]],
});


module.exports = model('AudioFile', audioFileSchema);