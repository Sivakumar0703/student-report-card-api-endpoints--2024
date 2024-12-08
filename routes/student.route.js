import express from "express"
import { deleteStudent, editStudentDetail, getStudentDetail, saveStudentDetail } from "../controllers/student.controller.js";


const studentRoute = express.Router();

studentRoute.post('/create' , saveStudentDetail);
studentRoute.patch('/edit/:studentId' , editStudentDetail);
studentRoute.get('/' , getStudentDetail);
studentRoute.delete('/remove/:studentId' , deleteStudent);


export default studentRoute