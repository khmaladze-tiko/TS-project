import{Student} from "./student";
import{teachersArray} from "./teacher";
import{Teacher} from "./teacher"
let assignStudentToTeacher = function (student: Student) {
    teachersArray.forEach((teacher) => {
        student.subInfo.forEach((sub) => {
            if (teacher.subjects.some((el) => el === sub.subjects)) {
                teacher.classes = {
                    studentList: [
                        ...teacher.classes.studentList,
                        `${student.firstName} ${student.lastName}`,
                    ],
                    studentCount: teacher.classes.studentCount++,
                };
            } else {
                console.log('Teacher does not exist')
            }
        })
    })
};
assignStudentToTeacher({
        id: 111,
        firstName: 'Elena',
        lastName: 'Durova',
        age: 10,
        subInfo: [
            {
                subjects: 'Russian',
                subScore: 10,
            },
            {
                subjects: 'English',
                subScore: 7,
            },
            {
                subjects: 'Math',
                subScore: 8,
            },
            {
                subjects: 'Georgian',
                subScore: 7,
            },
        ],
        classes: 5,
  
})