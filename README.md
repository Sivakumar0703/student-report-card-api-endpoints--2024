# Student Management System

## Overview
This project is a simple Student Management System that provides APIs for managing students, subjects, and marks. It also includes functionality to generate detailed reports for students with their subjects and respective marks.

## API Documentation

### Student Endpoints

1. **Get Every Student Details**
   - **Endpoint**: `/api/students`
   - **Method**: `GET`
   - **Description**: Fetches details of all students.

2. **Create and Save Student Details**
   - **Endpoint**: `/api/students/create`
   - **Method**: `POST`
   - **Request Body**:
     - `name` (string): Student's name.
     - `rollNumber` (string): Student's roll number.
     - `gender` (string): Student's gender.
     - `standard` (number): Student's standard/class.
   - **Description**: Creates a new student record.

3. **Edit/Update Student Details**
   - **Endpoint**: `/api/students/edit/:studentId`
   - **Method**: `PATCH`
   - **Params**: `studentId`
   - **Request Body**:
     - `name` (string): Student's name.
     - `rollNumber` (string): Student's roll number.
     - `gender` (string): Student's gender.
     - `standard` (number): Student's standard/class.
   - **Description**: Updates the details of an existing student.

4. **Delete Student Data**
   - **Endpoint**: `/api/students/remove/:studentId`
   - **Method**: `DELETE`
   - **Params**: `studentId`
   - **Description**: Deletes a student's record by ID.

### Subject Endpoints

1. **Get Every Subject Details**
   - **Endpoint**: `/api/subjects`
   - **Method**: `GET`
   - **Description**: Fetches details of all subjects.

2. **Create and Save Subject Details**
   - **Endpoint**: `/api/subjects/create`
   - **Method**: `POST`
   - **Request Body**:
     - `subject` (string): Subject name.
     - `code` (string): Subject code.
   - **Description**: Creates a new subject record.

3. **Edit/Update Subject Details**
   - **Endpoint**: `/api/subjects/edit/:subjectId`
   - **Method**: `PATCH`
   - **Params**: `subjectId`
   - **Request