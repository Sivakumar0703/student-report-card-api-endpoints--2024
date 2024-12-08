import express from "express"
import { deleteMark, editMark, getStudentMark, saveMark } from "../controllers/mark.controller.js";


const markRoute = express.Router();

markRoute.post('/create' , saveMark);
markRoute.patch('/edit/:markId' , editMark);
markRoute.delete('/remove/:markId' , deleteMark);
markRoute.get('/' , getStudentMark);


export default markRoute

