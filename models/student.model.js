import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollNumber:{
        type:String,
        unique:true,
        required:true
    },
    gender:{
        type:String,
        required:true  
    },
    class:{
        type:Number,
        required:true
    }
});

const Student = mongoose.model('student',studentSchema);
export default Student