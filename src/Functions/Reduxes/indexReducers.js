import {createStore, combineReducers, applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk';

import CountHeaderNav from './CountNavReducer';
import ArizalarData from './Arizalar';
import newShopBasket from './ShopBasket';
import Logins from './Logins';

const root = combineReducers({
    count: CountHeaderNav,
    ariza: ArizalarData,
    newShop: newShopBasket,
    login: Logins
});

export const store = createStore(root, applyMiddleware(thunk));