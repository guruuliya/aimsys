import {
    PREGNANCY_UPDATE,PREGNANCY_CREATE,PREGNENT_SAVE
} from '../actions/types';

const INITIAL_STATE = {
    HHNumber:'',
    PregnantName: '',
    PhoneNumber: '',
    NPregnant: '',
    LPerioddate: '',
    EDeliveryplace: '',
    FirstDose: '',
    SecondDose: '',
    DeliveryDate: '',
    Dplace: '',
    FirstWeightDate: '',
    Nchild: '',

};

export default (state = INITIAL_STATE, action) => {
    console.log(action.payload);
    switch (action.type) {
        case PREGNANCY_UPDATE:
        return { ...state, [action.payload.prop] : action.payload.value };
        case PREGNANCY_CREATE:
        return INITIAL_STATE;
        case  PREGNENT_SAVE:
        return INITIAL_STATE;
        default:
        return state;

}
};