/*
 *   StudentTypes.d.ts
 *   Project: exercise_two
 *
 *   Author: Morgan Moore
 *   Created on: Jan 20, 2023
 */

type CourseGrade = {
  name: string;
  weight: number;
  grade: number;
};

type CourseGrades = {
  assignmentWeights: Array<CourseGrade>;
  finalExamWeight: number;
};

type Student = {
  name: string;
  weights: CourseGrades;
  currentAverage: number;
};

type NewStudentRequest = {
  name: string;
  weights: CourseGrades;
};

type AssignmentGrade = number;

type FinalGrade = {
  overallScore: number;
  letterGrade: string;
};

type FinalExamScores = {
  neededForA: number;
  neededForB: number;
  neededForC: number;
  neededForD: number;
};

type StudentManager = Record<string, Student>;

type StudentNameParams = {
  studentName: string;
};
