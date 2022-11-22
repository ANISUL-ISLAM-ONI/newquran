const { model, Schema } = require('mongoose');

const chapterReciterSchema = new Schema({
    id: String,
    name: String,
    arabic_name: String,
    relative_path: String,
    format: String,
    files_size: Number,
});


module.exports = model('ChapterReciter', chapterReciterSchema);