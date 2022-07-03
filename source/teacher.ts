export interface Teacher {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    subjects: string[];
    classes: { studentList: string[]; studentCount: number } ;
}
 export let teachersArray: Teacher[] = [
    {
        id: 123,
        firstName: 'Jane',
        lastName: 'Doe',
        age: 30,
        email: 'jane@gmail.com',
        subjects: ['Russian', 'English'],
        classes: 
            {
                studentList: ['Elena Durova', 'Nikita Orlov'],
                studentCount: 2,
            }
        ,

    },
    // {
    //     id: 123,
    //     firstName: 'George',
    //     lastName: 'Svanidze',
    //     age: 35,
    //     email: 'george@gmail.com',
    //     subjects: ['Math', 'Georgian'],
    //     classes: [
    //         {
    //             studentList: ['nikita Orlov', 'Elena Durova'],
    //             studentCount: 2,
    //         }
    //     ],

    // },
];

