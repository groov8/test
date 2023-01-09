import { atom } from 'recoil';

export const todo = atom({
    key: 'todo',
    default: [
        {
            id: Number,
            title: '',
            state: '',
            term: '',
        },
    ],
});

export const filter = atom({
    key: 'filter',
    default: {
            state: 'all',
            term: '',
    },
});