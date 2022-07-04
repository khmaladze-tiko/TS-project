import { Student, studentsArray, SubInfo } from "./student";
import { teachersArray } from "./teacher";
import { Teacher } from "./teacher"
import { Lesson, lessonsArray } from "./lesson";
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
            point: 10,
        },
        {
            subjects: 'English',
            point: 7,
        },
        {
            subjects: 'Math',
            point: 8,
        },
        {
            subjects: 'Georgian',
            point: 7,
        },
    ],
    classes: 5,

})

let setSubjectAndPoint = function (
    student: Student,
    subject: string,
    point: number
) {
    if (student.subInfo.every((el) => el.subjects !== subject)) {
        student.subInfo.push({ subjects: subject, point });
    } else {
        student.subInfo.forEach((sub) => {
            sub = { ...sub, point };
        });
    }
};



let teachersInList = (teacher: Teacher) => {
    // teacher.subjects.forEach((subject: string) => {
    //     if (!lessonsArray.some((lession: Lesson) => lession.name === subject)) {
    //         console.log('push teacher to the new arayy');
    //         return;
    //     }
    // });
    for (const subject of teacher.subjects) {
        if (!lessonsArray.some((lesson: Lesson) => lesson.name === subject)) {
            console.log('push teacher to the new arayy');
            break;
        }
    }
}

teachersInList(
    {
        id: 123,
        firstName: 'Giorgi',
        lastName: 'Mamardashvili',
        age: 30,
        email: 'giorgi@gmail.com',
        subjects: ['Russian', 'English', 'Georgian'],
        classes:
        {
            studentList: ['Elena Durova', 'Nikita Orlov'],
            studentCount: 2,
        }
    })

//დავწეროთ ფუნქცია, რომელსაც გადაეცემა მოსწავლე და დააბრუნებს აბარებს
// თუ არა მოსწავლე ყველა საგანს, თუ საგანში ქულა 6-ზე მეტი ყავს დაწეროს რომ აბარებს, 
//წინააღმდეგ შემტხვევაში რომ იჭრება

let studentPass = (student: Student) => {
    // student.subInfo.forEach((subInfo: { subjects: string; point: number }) => {
    //     let passed = true
    //     if (subInfo.point < 6) {
    //         passed = false
    //     }
    // return blabla
    // })
    const notPassed = student.subInfo.some((subInfo: SubInfo) => subInfo.point <= 6)
    console.log(notPassed ? 'ვერ აბარებს' : 'აბარებს')

}

studentPass({
    id: 111,
    firstName: 'Elena',
    lastName: 'Durova',
    age: 10,
    subInfo: [
        {
            subjects: 'Russian',
            point: 6,
        },
        {
            subjects: 'English',
            point: 7,
        },
        {
            subjects: 'Math',
            point: 8,
        },
        {
            subjects: 'Georgian',
            point: 7,
        },
    ],
    classes: 5,
})

//დავწეროთ ფუნქცია, რომელიც მიანიჭებს საგნებს  სირთულის კოეფიციენტს, კოეფიციენტი
// უნდა მიენიჭოს რენდომად 1-დან 10-ის ჩათვლით, ასევე ამავე ფუნქციამ უნდა მიანიჭოს
//საგანს სირთულის დონეები, დონე იქნება 3 : Easy, Average,Hard
// , მინიჭება მოხდება იმისდა მიხედვით თუ  რამდენი არის კოეფიციენტი, 1-დან 4-მდე იქნება Easy,
// 4-დან 8-მდე Average და 8-დან 10-ის ჩათვლით Hard.

const assignCoeficient = () => {
    lessonsArray.forEach((lesson: Lesson) => {
        const coeff = Math.floor(Math.random() * 11);
        lesson.coefficient = coeff;
        if (coeff <= 4) {
            lesson.level = 'Easy';
        } else if (coeff >= 8) {
            lesson.level = 'Hard';
        } else {
            lesson.level = 'Average';
        }

        console.log(lesson)
    })


}

assignCoeficient()



let studentOrTeacher = function <T>(arg: T) {
    if ('email' in arg) {
        console.log('Teacher')
    } else {
        console.log('Student')
    }
};
studentOrTeacher<Student>({
    id: 111,
    firstName: 'Elena',
    lastName: 'Durova',
    age: 10,
    subInfo: [
        {
            subjects: 'Russian',
            point: 10,
        },
        {
            subjects: 'English',
            point: 7,
        },
        {
            subjects: 'Math',
            point: 8,
        },
        {
            subjects: 'Georgian',
            point: 7,
        },
    ],
    classes: 5,
},
)

//2. generic ფუნქცია, რომელსაც გადაეცემა მოსწავლე ან საგანი, თუ გადაეცემა საგანი დალოგავს
// ყველა იმ მოსწავლეს, რომელიც ამ საგანს გადის, ხოლო თუ მოსწავლეა დალოგავს ყველა იმ საგნის
// სირთულის კოეფიციენტს, რომელსაც სწავლობს

// let studentOrlesson = function <T> (arg: T){
       
//     // if ('coefficient' in arg) {
//     //     console.log(subInfo.subjects)
//     // } else console.log(lesson.coefficient)
    
// }

// studentOrlesson<Student>(
//     {
//         id: 111,
//         firstName: 'Elena',
//         lastName: 'Durova',
//         age: 10,
//         subInfo: [
//             {
//                 subjects: 'Russian',
//                 point: 10,
//             },
//             {
//                 subjects: 'English',
//                 point: 7,
//             },
//             {
//                 subjects: 'Math',
//                 point: 8,
//             },
//             {
//                 subjects: 'Georgian',
//                 point: 7,
//             },
//         ],
//         classes: 5,
//     }
// )