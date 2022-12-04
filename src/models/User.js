import { model, Schema } from 'mongoose';

const userSchema = new Schema({
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    isstaff: Boolean,
});


export default model('User', userSchema);