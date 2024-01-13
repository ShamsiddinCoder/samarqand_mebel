const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SIGN_IN = 'SIGN_IN';
const SIGN_UP = 'SIGN_UP';

const loginState = {
    auth: false,
    sign: false
}

export default function Logins(state = loginState, action) {
    switch(action.type){
        case LOGIN: return {...state, auth: true}
        case LOGOUT: return {...state, auth: false}
        case SIGN_IN: return {...state, sign: true}
        case SIGN_UP: return {...state, sign: false}

        default: return state;
    }
}

export const loginFunc = () => ({type: LOGIN});
export const logoutFunc = () => ({type: LOGOUT});
export const signinFunc = () => ({type: SIGN_IN});
export const signupFunc = () => ({type: SIGN_UP});