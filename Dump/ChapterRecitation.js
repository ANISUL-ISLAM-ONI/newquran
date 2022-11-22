const { model, Schema } = require('mongoose');

const chapterRecitationSchema = new Schema({
    id: String,
    chapter_id: Number,
    file_size: Number,
    format: String,
    total_files: Number,
    audio_url: String,
});


module.exports = model('ChapterRecitation', chapterRecitationSchema);