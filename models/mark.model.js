import mongoose from "mongoose";


const markSchema = new mongoose.Schema({
    mark:{
        type:Number,
        required:true
    },
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'student',
        required:true
    },
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'subject',
        required:true
    }
});

const Mark = mongoose.model('mark',markSchema);
export default Mark