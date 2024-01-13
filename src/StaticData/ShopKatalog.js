import {ugalokKatalog} from './ProductDate/Ugalok';
import {stol} from './ProductDate/Stol';
import {stul} from './ProductDate/Stul';
import {kompyuterStoli} from './ProductDate/KompyuterStoli';
import {oshxona} from './ProductDate/Oshxona';
import {yumshoqMebel} from './ProductDate/YumshoqMebel';
// import a from '../assets/Stol/Stol-1/';

export const shopKatalog = [
    {
        id: 1,
        name: 'Ugalok',
        linkName: 'Ugalok/',
        products: ugalokKatalog,
        price: '120',
    },
    {
        id: 2,
        name: 'Stol',
        linkName: 'Stol/',
        products: stol,
        price: '120',
    },
    {
        id: 3,
        name: 'Stul',
        linkName: 'Stul/',
        products: stul,
        price: '120',
    },
    {
        id: 4,
        name: 'Kompyuter Stoli',
        linkName: 'kompyuter stol/',
        products: kompyuterStoli,
        price: '120',
    },
    {
        id: 5,
        name: 'Oshxona mebeli',
        linkName: 'Kuxni/',
        products: oshxona,
        price: '120',
    },
    {
        id: 6,
        name: 'Yumshoq Mebellar',
        linkName: 'yumshoq mebel/',
        products: yumshoqMebel,
        price: '120',
    },
]