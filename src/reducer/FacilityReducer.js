import { FACILITY_FETCH } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    console.log(action.payload);
    switch (action.type) {
        case FACILITY_FETCH:
        console.log(action);
            return action.payload;            
        default:
            return state;
    }
};
