export interface SubInfo {
    subjects: string;
    point: number
}
export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    subInfo: SubInfo[];
    classes: number;
}
export let studentsArray: Student[] = [
    {
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
    // {
    //     id: 222,
    //     firstName: 'Nikita',
    //     lastName: 'Orlov',
    //     age: 10,
    //     subInfo: [
    //         {
    //             subjects: 'Russian',
    //             subScore: 10,
    //         },
    //         {
    //             subjects: 'English',
    //             subScore: 8,
    //         },
    //         {
    //             subjects: 'Math',
    //             subScore: 6,
    //         },
    //         {
    //             subjects: 'Georgian',
    //             subScore: 7,
    //         },
    //     ],
    //     classes: 5,
    // },
    // {
    //     id: 333,
    //     firstName: 'Diana',
    //     lastName: 'Chelidze',
    //     age: 10,
    //     subInfo: [
    //         {
    //             subjects: 'Russian',
    //             subScore: 9,
    //         },
    //         {
    //             subjects: 'English',
    //             subScore: 7,
    //         },
    //         {
    //             subjects: 'Math',
    //             subScore: 9,
    //         },
    //         {
    //             subjects: 'Georgian',
    //             subScore: 8,
    //         },

    //     ],
    //     classes: 5,
    // },
    // {
    //     id: 333,
    //     firstName: 'Denis',
    //     lastName: 'Den',
    //     age: 10,
    //     subInfo: [
    //         {
    //             subjects: 'Russian',
    //             subScore: 10,
    //         },
    //         {
    //             subjects: 'English',
    //             subScore: 9,
    //         },
    //         {
    //             subjects: 'Math',
    //             subScore: 9,
    //         },
    //         {
    //             subjects: 'Georgian',
    //             subScore: 10,
    //         },

    //     ],
    //     classes: 5,
    // }

]
