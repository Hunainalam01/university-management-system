// COURSE CLASS:
export class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(Course) {
        this.courses.push(Course);
    }
}
