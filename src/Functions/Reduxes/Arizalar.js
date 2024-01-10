const FREE_SERVECE = 'FREE_SERVECE';
const RESTORATION = 'RESTORATION';
const TAMIRLASH = 'TAMIRLASH';

const dataState = {
    fressServices: [],
    restorations: [],
    tamirlaymiz: []
};

// [...state, action.payload];

export default function ArizalarData(state = dataState, action){
    switch(action.type){
        case FREE_SERVECE: return {...state, fressServices: [...state.fressServices, action.payload]};

        default: return state
    }
};

export const freeServece = (data) => ({type: FREE_SERVECE, payload: data});
export const restoration = (data) => ({type: RESTORATION, payload: data});
export const tamirlash = (data) => ({type: TAMIRLASH, payload: data});