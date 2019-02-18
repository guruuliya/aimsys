import { CHILDFETCH } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHILDLISTFETCH:
         return action.payload;
        default:
            return state;
    }
};