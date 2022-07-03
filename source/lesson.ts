interface Lesson {
    name: string;
    coefficient: number;
    level: string;
    fromClass: number;
    teachers: string[];
}
let lessonsArray: Lesson [] = [
    {
        name: 'Russian',
        coefficient: 8,
        level: '',
        fromClass: 5,
        teachers: ['Jane Doe'],
    },
    // {
    //     name: 'English',
    //     coefficient: 5,
    //     level: '',
    //     fromClass: 5,
    // },
    // {
    //     name: 'Math',
    //     coefficient: 10,
    //     level: '',
    //     fromClass: 5,
    // },
    // {
    //     name: 'Georgian',
    //     coefficient: 7,
    //     level: '',
    //     fromClass: 5,
    // },
]
console.log(lessonsArray)
