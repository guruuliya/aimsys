import { ATTENDANCEUPDATE, ATTENDANCECREATE, ATTENDANCESAVE, ATTENDANCEDELETESUCCESS, ATTENDANCE_FETCH_LOAD_START, ATTENDANCE_FETCH_LOAD_END } from '../actions/types';
var _ = require('lodash');

const INITIAL_STATE = {
    ChildName: '',
    gender: '',
    Dob: '',
    Regdate: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ATTENDANCEUPDATE:
            return { ...state, [action.payload.name]: action.payload.value };
        case ATTENDANCECREATE:
            return INITIAL_STATE;
        case ATTENDANCESAVE:
            return INITIAL_STATE;
        case ATTENDANCEDELETESUCCESS:
            return { Loading: action.payload };
        case ATTENDANCE_FETCH_LOAD_START:
            return { Loading: action.payload };
        case ATTENDANCE_FETCH_LOAD_END:
            return { Loading: action.payload };
        default:
            return state;
    }
};