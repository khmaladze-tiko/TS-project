interface Teacher {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    subjects: string[];
    classNum: number[];
    classes: { studentList: string[]; studentCount: number } [];
}
export const teachers: Teacher[] = [
    {
        id: 123,
        firstName: 'Jane',
        lastName: 'Doe',
        age: 30,
        email: 'jane@gmail.com',
        subjects: ['Russian', 'English'],
        classNum: [5],
        classes: [
            {
                studentList: ['Elena Durova', 'Nikita Orlov'],
                studentCount: 2,
            }
        ],

    },
    {
        id: 123,
        firstName: 'George',
        lastName: 'Svanidze',
        age: 35,
        email: 'george@gmail.com',
        subjects: ['Math', 'Georgian'],
        classNum: [5],
        classes: [
            {
                studentList: ['nikita Orlov', 'Elena Durova'],
                studentCount: 2,
            }
        ],

    },
];

