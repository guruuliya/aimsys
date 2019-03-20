import {
    HOUSEHOLD_UPDATE, HOUSEHOLD_CREATE, HOUSEHOLD_SAVE, HOUSEHOLD_FETCH_LOAD_START,
    HOUSEHOLD_FETCH_LOAD_END,
} from '../actions/types';
const INITIAL_STATE = {

    HHNumber: '',
    HHName: '',
    DOB: '',
    sex: '',
    Caste: '',
    Relationship: '',
    Status: '',
    Designation: '',
    PhoneNumber: '',
    Address: ''
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case HOUSEHOLD_UPDATE:
            return { ...state, [action.payload.name]: action.payload.value };
        case HOUSEHOLD_CREATE:
            return INITIAL_STATE;
        case HOUSEHOLD_SAVE:
            return INITIAL_STATE;
        case HOUSEHOLD_FETCH_LOAD_START:
            console.log('inside reducer', action.payload);
            return { Loading: action.payload };
        case HOUSEHOLD_FETCH_LOAD_END:
            return { Loading: action.payload };


        default:
            return state;
    }
};
