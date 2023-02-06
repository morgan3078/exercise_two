/*
 *   StudentModel.ts
 *   Project: exercise_two
 *
 *   Author: Morgan Moore
 *   Created on: Jan 20, 2023
 */
const students: StudentManager = {};

function calculateAverage(weights: CourseGrades): number {
  let average: number = 0;
  let weightedGrade: number;
  const size: number = weights.assignmentWeights.length;
  for (let i = 0; i < size; i += 1) {
    weightedGrade =
      weights.assignmentWeights[i].grade * (weights.assignmentWeights[i].weight / 100);
    average += weightedGrade;
  }
  return average;
}

function addStudent(newStudentData: NewStudentRequest): boolean {
  // Destructure the name and weights
  const { name, weights } = newStudentData;

  // the the name is already in `students`
  // then return false
  if (name in students) {
    return false;
  }
  // Calculate the student's current average (use the function previously defined)
  const average: number = calculateAverage(weights);
  const newStudent: Student = {
    name,
    weights,
    currentAverage: average,
  }; // Create a `Student` object using the `name`, `weights` and `currentAverage
  students[name] = newStudent;
  return true;
}

function getStudent(studentName: string): Student | undefined {
  // If the student's name is not in `students`
  if (!(studentName in students)) {
    return undefined;
  } // then return undefined
  return students[studentName];
  // Return the student's information (their name is the key for `students`)
}

export { students, addStudent, getStudent };
