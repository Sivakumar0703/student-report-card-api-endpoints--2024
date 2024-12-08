import Student from "../models/student.model.js";

const errorMessage = "internal server error";


// create and save student data
export const saveStudentDetail = async(req,res) => {
    const {name,rollNumber,gender,standard} = req.body;
    try {
        // confirm that every data is available
        if(!name || !rollNumber || !gender || !standard){
            return res.status(400).json({message:"some of the data is/are missing".toUpperCase()});
        }
        const studentData = {
            name:name.toUpperCase(),
            rollNumber,
            gender:gender.toUpperCase(),
            class:standard
        }
        const student = await Student.create(studentData);
        await student.save();
        res.status(200).json({message:"student data saved".toUpperCase()});
    } catch (error) {
        res.status(500).json({message:errorMessage.toUpperCase()});
    }
}


// update student data
export const editStudentDetail = async(req,res) => {
    const {studentId} = req.params;
    try {
        // check for student id
        if(!studentId){
            return  res.status(404).json({message:"student id is missing".toUpperCase()});
        }
        await Student.findByIdAndUpdate(studentId , req.body);
        res.status(200).json({message:"student data updated".toUpperCase()});
    } catch (error) {
        res.status(500).json({message:errorMessage.toUpperCase()});
    }
}


// get every student detail
export const getStudentDetail = async(req,res) => {
    try {
        const students = await Student.find({} , {__v:0}).sort({name:1});
        res.status(200).json({message:"fetched every student details".toUpperCase() , length:students.length , students:students});
    } catch (error) {
        res.status(500).json({message:errorMessage.toUpperCase()});
    }
}


// delete student data
export const deleteStudent = async(req,res) => {
    const {studentId} = req.params;
    try {
        // confirm that we have student id
        if(!studentId){
            return res.status(400).json({message:"student id is missing".toUpperCase()});
        }

        await Student.findByIdAndDelete(studentId);
        res.status(200).json({message:"student data is deleted".toUpperCase()});      
    } catch (error) {
        res.status(500).json({message:errorMessage.toUpperCase()});
    }
}

