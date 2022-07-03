interface Lesson {
    saxeli: string;
    coefficient: number;
    sirtuleDone: string;
    classNum: number[];
}
export const lessons: Lesson [] = [
    {
        saxeli: 'Russian',
        coefficient: 8,
        sirtuleDone: '',
        classNum: [5],
    },
    {
        saxeli: 'English',
        coefficient: 5,
        sirtuleDone: '',
        classNum: [5],
    },
    {
        saxeli: 'Math',
        coefficient: 10,
        sirtuleDone: '',
        classNum: [5],
    },
    {
        saxeli: 'Georgian',
        coefficient: 7,
        sirtuleDone: '',
        classNum: [5],
    },
]
console.log(lessons)
