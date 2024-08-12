import { Course } from "./courses.js";
import { Person } from "./person.js";

// STUDENT CLASS:
export class Student extends Person {
  rollNumber: number;
  courses: Course[] = [];

  constructor(name: string, age: number, rollNumber: number) {
    super(name, age);
    this.rollNumber = rollNumber;
  }

  registerForCourse(course: Course) {
    this.courses.push(course);
  }
}
