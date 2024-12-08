import Subject from "../models/subject.model.js";

const errorMessage = "internal server error";


// create and save subject data
export const saveSubjectDetail = async(req,res) => {
    const {subject,code} = req.body;
    try {
        // confirm that every data is available
        if(!subject || !code){
            return res.status(400).json({message:"some of the data is/are missing".toUpperCase()});
        }
        const subjectData = {
            subject:subject.toUpperCase(),
            code:code.toUpperCase(),
        }
        const newSubject  = await Subject.create(subjectData);
        await newSubject.save();
        res.status(200).json({message:"subject data saved".toUpperCase()});
    } catch (error) {
        res.status(500).json({message:errorMessage.toUpperCase()});
    }
}


// update subject data
export const editSubjectDetail = async(req,res) => {
    const {subjectId} = req.params;
    try {
        // check for subject id
        if(!subjectId){
            return  res.status(404).json({message:"subject id is missing".toUpperCase()});
        }
        await Subject.findByIdAndUpdate(subjectId , req.body);
        res.status(200).json({message:"subject data updated".toUpperCase()});
    } catch (error) {
        res.status(500).json({message:errorMessage.toUpperCase()});
    }
}


// get every subject detail
export const getSubjectDetail = async(req,res) => {
    try {
        const subjects = await Subject.find({} , {__v:0}).sort({subject:1});
        res.status(200).json({message:"fetched every subject details".toUpperCase() , length:subjects.length , subjects:subjects});
    } catch (error) {
        res.status(500).json({message:errorMessage.toUpperCase()});
    }
}


// delete subject data
export const deleteSubject = async(req,res) => {
    const {subjectId} = req.params;
    try {
        // confirm that we have subject id
        if(!subjectId){
            return res.status(400).json({message:"subject id is missing".toUpperCase()});
        }

        await Subject.findByIdAndDelete(subjectId);
        res.status(200).json({message:"subject data is deleted".toUpperCase()});      
    } catch (error) {
        res.status(500).json({message:errorMessage.toUpperCase()});
    }
}