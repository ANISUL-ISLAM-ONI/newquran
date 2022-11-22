const { model, Schema } = require('mongoose');

const paginationSchema = new Schema({
    per_page: Number,
    current_page: Number,
    next_page: Number,
    total_pages: Number,
    total_records: Number
});

module.exports = model('Pagination', paginationSchema);