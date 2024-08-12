// COURSE CLASS:
export class Course {
    id;
    name;
    studnts = [];
    teachers = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(std) {
        this.studnts.push(std);
    }
    setTeacher(teach) {
        this.teachers.push(teach);
    }
}
