import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'

const LetterSchema = new mongoose.Schema({

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
    }
       
}, {
    timestamps: true
})

LetterSchema.plugin(mongoosePaginate);
export default mongoose.model('Letter', LetterSchema);