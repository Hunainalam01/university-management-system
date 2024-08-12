// CREATING A UNIVERSITY MANAGEMENT SYSTEM:
import { Student } from "./students.js";
import { Department } from "./department.js";
import { Teacher } from "./teacher.js";
import { Course } from "./courses.js";

// STUDENTS!
const s1 = new Student("Ammar", 18, 9080);
const s2 = new Student("Aziz", 17, 4380);
const s3 = new Student("Alyan", 18, 7788);

// TEACHERS!
const t1 = new Teacher("Jasir", 26, 90000);
const t2 = new Teacher("Hunain", 19, 90000);
const t3 = new Teacher("Isfhan", 28, 90000);

// COURESE!
const c1 = new Course(1, "Blockchain");
const c2 = new Course(2, "architecture");
const c3 = new Course(3, "charted accountant");

// COURSE REGISTRATION!
s1.registerForCourse(c1);
s2.registerForCourse(c2);
s2.registerForCourse(c1);
s3.registerForCourse(c3);

// STUDENTS INVOLVE IN COURSES
c1.addStudent(s1);
c1.addStudent(s3);
c2.addStudent(s1);
c3.addStudent(s2);

// TEACHERS INVOLVE IN COURSES
c1.setTeacher(t1);
c2.setTeacher(t2);
c3.setTeacher(t3);

// console.log(s1.courses);

// DEPARTMENT!
const d1 = new Department("computer science");
const d2 = new Department("pre engineering");
const d3 = new Department("commerce");

// ASSIGN COURSES TO DEPARTMENT!
d1.addCourse(c1);
d2.addCourse(c2);
d3.addCourse(c3);

console.log(c1.studnts);
console.log(`\n#-----------$$$-------------#`);

console.log(s1.courses);

/* YOU CAN FIND
- how many students enroll in this system
- how many teacher teaching in
- how many options we have for the student
- we have different departments for specific fields
- how many courses we have mention in the system */