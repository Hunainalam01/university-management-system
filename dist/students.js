import { Person } from "./person.js";
// STUDENT CLASS:
export class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerForCourse(course) {
        this.courses.push(course);
    }
}
