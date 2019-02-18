import { CHILDUPDATE, CHILDCREATE } from '../actions/types';

const INITIAL_STATE = {
    HNumber: '',
    CName: '',
    CMotherName: '',
    childList:'',
    option: '',
    DPickdob: new Date(),
    DPickregdate: new Date(),
}; 

export default (state = INITIAL_STATE, action) => {
    console.log(action.payload);
    switch (action.type) {
        case CHILDUPDATE:
            return { ...state, [action.payload.name]: action.payload.value };
        case CHILDCREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};