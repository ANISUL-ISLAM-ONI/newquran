import { model, Schema } from 'mongoose';

const noteSchema = new Schema({
    chapter: Number,
    verse: Number,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    texts: [String],
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
});


export default model('Note', noteSchema);