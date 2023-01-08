import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        url: String,
        public_id: String
    },
})

postSchema.plugin(mongoosePaginate);
export default mongoose.model('Post', postSchema);