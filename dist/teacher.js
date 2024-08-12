import { Person } from "./person.js";
// TEACHER CLASS:
export class Teacher extends Person {
    salary;
    teacherCourses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourses(assignCourse) {
        this.teacherCourses.push(assignCourse);
    }
}
