import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const taskSchema = new mongoose.Schema({
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
        trim: true,
    },
    done: {
        type: Boolean,
        required: true,
        trim: true
    },


}, {
    timestamps: true,
})

taskSchema.plugin(mongoosePaginate);
export default mongoose.model('Task', taskSchema);