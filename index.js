import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./database/dbConfig.js";
import studentRoute from "./routes/student.route.js";
import subjectRoute from "./routes/subject.route.js";
import markRoute from "./routes/mark.route.js";


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // body parser

// create database connection
connectDB();

// api endpoints
app.use('/api/students', studentRoute);
app.use('/api/subjects', subjectRoute);
app.use('/api/marks', markRoute);

app.listen(port , () => {
    console.log("Server is running");
});