const { model, Schema } = require('mongoose');

const mediaContentSchema = new Schema({
    url: String,
    embed_text: String,
    provider: String,
    author_name: String,
});


module.exports = model('MediaContent', mediaContentSchema);