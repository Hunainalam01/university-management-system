import { Course } from "./courses.js";

// COURSE CLASS:
export class Department {
  name: string;
  courses: Course[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addCourse(Course: Course) {
    this.courses.push(Course);
  }
}
