import {createStore, combineReducers, applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk';

import CountHeaderNav from './CountNavReducer';
import ArizalarData from './Arizalar';

const root = combineReducers({
    count: CountHeaderNav,
    ariza: ArizalarData
});

export const store = createStore(root, applyMiddleware(thunk));