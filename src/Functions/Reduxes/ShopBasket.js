const NEW_SHOP = 'NEW_SHOP';
const REMOVE_SHOP = 'REMOVE_SHOP';
const COUNT_SHOP = 'COUNT_SHOP';

const shopDefaultState = [];

export default function newShopBasket(state = JSON.parse(localStorage.getItem('newShop')) || shopDefaultState, action){
    switch(action.type){
        case NEW_SHOP: return [...state, {...action.payload}]
        case REMOVE_SHOP: return state.filter(elem => elem.basket_id !== action.payload);
        case COUNT_SHOP:
            return state.map(elem => {
                if(elem.basket_id === action.payload.id){
                    if(action.payload.count === 'encrement'){
                        return {...elem, count: elem.count += 1}
                    }
                    if(action.payload.count === 'decrement'){
                        if(elem.count <= 1){
                            return {...elem, count: 1}
                        }else {
                            return {...elem, count: elem.count -= 1}                            
                        }
                    }
                }
                return elem;
            })

        default: return state
    }
};

export const newShops = (data) => ({type: NEW_SHOP, payload: data});
export const removeShop = (id) => ({type: REMOVE_SHOP, payload: id});
export const countShop = (elem) => ({type: COUNT_SHOP, payload: elem});