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
   - **Request Body**:
     - `subject` (string): Subject name.
     - `code` (string): Subject code.
   - **Description**: Updates the details of an existing subject.

4. **Delete Subject Data**
   - **Endpoint**: `/api/subjects/remove/:subjectId`
   - **Method**: `DELETE`
   - **Params**: `subjectId`
   - **Description**: Deletes a subject's record by ID.

### Mark Endpoints

1. **Create and Save Mark Details**
   - **Endpoint**: `/api/marks/create`
   - **Method**: `POST`
   - **Request Body**:
     - `subject` (string): Subject ID.
     - `student` (string): Student ID.
     - `mark` (number): Marks obtained.
   - **Description**: Creates a new mark record for a student in a subject.

2. **Edit/Update Mark Details**
   - **Endpoint**: `/api/marks/edit/:markId`
   - **Method**: `PATCH`
   - **Params**: `markId`
   - **Request Body**:
     - `subject` (string): Subject ID.
     - `student` (string): Student ID.
     - `mark` (number): Marks obtained.
   - **Description**: Updates the mark details for a student in a subject.

3. **Delete Mark Data**
   - **Endpoint**: `/api/marks/remove/:markId`
   - **Method**: `DELETE`
   - **Params**: `markId`
   - **Description**: Deletes a mark record by ID.

4. **Get Students Data Along With Their Marks**
   - **Endpoint**: `/api/marks`
   - **Method**: `GET`
   - **Description**: Fetches details of all students along with their subjects and respective marks.


### If you have any doubts please verify the docs directory which contains endpoints documentation

