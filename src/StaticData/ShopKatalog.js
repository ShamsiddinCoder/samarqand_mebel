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
        name: 'Hammasi',
        
    },
    {
        id: 2,
        name: 'Ugalok',
        linkName: 'Ugalok/',
        products: ugalokKatalog,
    },
    {
        id: 3,
        name: 'Stol',
        linkName: 'Stol/',
        products: stol
    },
    {
        id: 4,
        name: 'Stul',
        linkName: 'Stul/',
        products: stul
    },
    {
        id: 5,
        name: 'Kompyuter Stoli',
        linkName: 'kompyuter stol/',
        products: kompyuterStoli
    },
    {
        id: 6,
        name: 'Oshxona mebeli',
        linkName: 'Kuxni/',
        products: oshxona
    },
    {
        id: 7,
        name: 'Yumshoq Mebellar',
        linkName: 'yumshoq mebel/',
        products: yumshoqMebel,
    },
]