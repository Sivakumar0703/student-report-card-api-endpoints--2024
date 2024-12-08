import Mark from "../models/mark.model.js";
import Student from "../models/student.model.js";

const errorMessage = "internal server error";


// create and save mark data
export const saveMark = async(req,res) => {
    const {student,subject,mark} = req.body;
    try {
        // check the student's subject mark is already stored or not
        const isMarked = await Mark.findOne({student:student , subject:subject});
        if(isMarked){
            return res.status(400).json({message:"this student's mark is already entered".toUpperCase()});
        }
        // confirm that every data is available
        if(!student || !subject || !mark){
            return res.status(400).json({message:"some of the data is/are missing".toUpperCase()});
        }
        const markData = {
           student,
           subject,
           mark
        }
        const newMark  = await Mark.create(markData);
        // await newMark.save();
        res.status(200).json({message:"mark saved".toUpperCase()});
    } catch (error) {
        res.status(500).json({message:errorMessage.toUpperCase()});
    }
}


// update mark 
export const editMark = async(req,res) => {
    const {markId} = req.params;
    try {
        // check for subject id
        if(!markId){
            return  res.status(404).json({message:"mark id is missing".toUpperCase()});
        }
        await Mark.findByIdAndUpdate(markId , req.body);
        res.status(200).json({message:"subject data updated".toUpperCase()});
    } catch (error) {
        res.status(500).json({message:errorMessage.toUpperCase()});
    }
}


// delete mark data
export const deleteMark = async(req,res) => {
    const {markId} = req.params;
    try {
        // confirm that we have mark id
        if(!markId){
            return res.status(400).json({message:"mark id is missing".toUpperCase()});
        }

        await Mark.findByIdAndDelete(markId);
        res.status(200).json({message:"mark data is deleted".toUpperCase()});      
    } catch (error) {
        res.status(500).json({message:errorMessage.toUpperCase()});
    }
}


// get student marks
export const getStudentMark = async(req,res) => {
    try {
        const maximumMark = 500; // 5 subjects => each have maximum mark of 100
        const subjectsCount = 5; // total number of subjects
        const passMark = 45;
        const students = await Student.find({},{__v:0}).lean();
        if(!students){
            return res.status(400).json({message:"students not found".toUpperCase()});
        }
        // populate subject along with its mark
        for(let student of students){
            const marks = await Mark.find({student:student._id}).populate('subject mark').lean();
            const totalMark = marks.map(mark => mark.mark).reduce((total,mark) => total+mark , 0 );
            const percentage = (totalMark / maximumMark) * 100;
            const isFail = false;
            student.marks = marks.map((mark) => ({
                subject:mark.subject.subject,
                mark: mark.mark
            }));
            student.total = totalMark;
            student.percentage = percentage;

            // finding pass/fail
            for(const mark of marks){
                if(mark < passMark){
                    isFail = true;
                    break;
                }
            }
            if(student.marks.length === subjectsCount && !isFail){
                student.result = "PASS";
            } else {
                student.result = "FAIL";
            }
        }
       
        res.status(200).json({message:"student marks fetched successfully".toUpperCase() , length:students.length , students:students});
    } catch (error) {
        res.status(500).json({message:errorMessage.toUpperCase()});
    }
}