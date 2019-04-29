import { BSTATUS_UPDATE, BSTATUS_CREATE } from '../actions/types';

const INITIAL_STATE = {
    option: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BSTATUS_UPDATE:
            return { ...state, [action.payload.name]: action.payload.value };
        case BSTATUS_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};
