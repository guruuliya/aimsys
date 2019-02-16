import { FACILTY_FORM, FACILITY_CREATE, FACILITY_CHECK, FACILITY_REMOVE } from '../actions/types';

const INITIAL_STATE = {
    Water: '',
    Medicine: '',
    Mother: '',
    Infant: '',
    Play: '',
    Toilet: '',
    status: '',
    uid: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action.type);
    switch (action.type) {
        case FACILITY_CHECK:
            return { ...state, status: action.payload };
        case FACILTY_FORM:
            return { ...state, [action.payload.name]: action.payload.value };
        case FACILITY_CREATE:
            return { INITIAL_STATE, status: true };
        case FACILITY_REMOVE:
            return { status: false };
        default:
            return state;
    }
};
