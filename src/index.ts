/*
 *   index.ts
 *   Project: exercise_two
 *
 *   Author: Morgan Moore
 *   Created on: Jan 20, 2023
 */
import express, { Express } from 'express';
import { StudentController } from './controllers/StudentController';

const app: Express = express();
const PORT = 8091;

app.use(express.json());

app.post('/api/students', StudentController.createNewStudent);
app.get('/api/students/:studentName', StudentController.getStudentByName);
// function handleListen(): void {
//  console.log(`Server listening on http://localhost:${PORT}`);
// }

// app.listen(PORT, handleListen);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
