import { Student } from "./students.js";
import { Teacher } from "./teacher.js";

// COURSE CLASS:
export class Course {
  id: number;
  name: string;
  studnts: Student[] = [];
  teachers: Teacher[] = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  addStudent(std: Student) {
    this.studnts.push(std);
  }

  setTeacher(teach: Teacher) {
    this.teachers.push(teach);
  }
}
