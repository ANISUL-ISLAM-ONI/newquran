const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    isstaff: Boolean,
});


module.exports = model('User', userSchema);