import express from "express"
import { deleteSubject, editSubjectDetail, getSubjectDetail, saveSubjectDetail } from "../controllers/subject.controller.js";


const subjectRoute = express.Router();

subjectRoute.post('/create' , saveSubjectDetail);
subjectRoute.patch('/edit/:subjectId' , editSubjectDetail);
subjectRoute.get('/' , getSubjectDetail);
subjectRoute.delete('/remove/:subjectId' , deleteSubject);


export default subjectRoute