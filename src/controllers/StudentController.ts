import { Request, Response } from 'express';
import { students, addStudent, getStudent } from '../models/StudentModel';

function getAllStudents(req: Request, res: Response): void {
  res.json(students);
}

function createNewStudent(req: Request, res: Response): void {
  const studentData = req.body as NewStudentRequest; // Assign `req.body` as a `NewStudentRequest`

  const didAddStudent = addStudent(studentData); // Call the `addStudent` function using the student's data

  if (!didAddStudent) {
    res.sendStatus(409);
    return;
  }
  // If the student's data was not added successfully
  // Responds with status 409 (This means 409 Conflict)
  // return from the function

  res.sendStatus(201);
  // Send status 201 (This means 201 Created)
}

function getStudentByName(req: Request, res: Response): void {
  const { studentName } = req.params as StudentNameParams; // Assign `req.params` as a `StudentNameParams`;
  const student = getStudent(studentName); // get the student's data using function imported from StudentModel

  if (student === undefined) {
    res.sendStatus(404);
    return;
  }

  res.json(student);
  // If `student` is undefined
  // respond with status 404 (Which means 404 Not Found)
  // return immediately

  // Respond with the student's information as json
}

export { getAllStudents, createNewStudent, getStudentByName };
