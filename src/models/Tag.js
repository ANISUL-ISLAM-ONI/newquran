import { model, Schema } from 'mongoose';

const tagSchema = new Schema({
    token: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    verses: [{ chapter: Number, verse: Number }],
});

export default model('Tag', tagSchema);