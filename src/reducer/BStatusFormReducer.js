import { BSTATUS_UPDATE, BSTATUS_CREATE, BSTATUS_CHECK, BSTATUS_REMOVE } from '../actions/types';

const INITIAL_STATE = {
    option: '',
    status: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BSTATUS_CHECK:
            return { ...state, status: action.payload };
        case BSTATUS_UPDATE:
            return { ...state, [action.payload.name]: action.payload.value };
        case BSTATUS_CREATE:
            return { INITIAL_STATE, status: true };
        case BSTATUS_REMOVE:
            return { status: false };
        default:
            return state;
    }
};
