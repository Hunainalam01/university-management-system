import { Person } from "./person.js";
import { Course } from "./courses.js";

// TEACHER CLASS:
export class Teacher extends Person {
  salary: number;
  teacherCourses: Course[] = [];

  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }

  assignCourses(assignCourse: Course) {
    this.teacherCourses.push(assignCourse);
  }
}
