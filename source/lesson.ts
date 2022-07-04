export interface Lesson {
    name: string;
    coefficient: number;
    level: Levels | null;
    fromClass: number;
    teachers: string[];
}

export type Levels = 'Hard' | 'Average' | 'Easy'
export let lessonsArray: Lesson[] = [
    {
        name: 'Russian',
        coefficient: 0,
        level: null,
        fromClass: 5,
        teachers: ['Jane Doe'],
    },
    {
        name: 'English',
        coefficient: 0,
        level: null,
        fromClass: 5,
        teachers: ['Jane Doe'],
    },
    {
        name: 'Georgian',
        coefficient: 0,
        level: null,
        fromClass: 5,
        teachers: ['Jane Doe'],
    },
    {
        name: 'Bulgarian',
        coefficient: 0,
        level: null,
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
