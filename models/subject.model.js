import mongoose from "mongoose";


const subjectSchema = new mongoose.Schema({
    subject:{
        type:String,
        unique:true,
        required:true
    },
    code:{
        type:String,
        unique:true,      
        required:true,
    }
});

const Subject = mongoose.model('subject',subjectSchema);
export default Subject