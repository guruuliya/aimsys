import {
    EMAIL_CHANGED, PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, FETCH_USER
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false,
    loggedIn: null
};

export default (state = INITIAL_STATE, action) => {
    //console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            console.log('email changed');
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            console.log('pasword changed');
            return { ...state, password: action.payload };
        case LOGIN_USER:
            console.log('login user');
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            console.log('login success');
            return { ...state, ...INITIAL_STATE, user: action.payload, loggedIn: true, error: '' };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Error', loading: false, password: '' };
        case FETCH_USER:
            console.log('fetch user');
            return { ...state, loggedIn: action.payload };
        default:
            return state;
    }
};
