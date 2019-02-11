import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BStatusReducer from './BStatusReducer';

export default combineReducers({
    auth: AuthReducer,
    bstatus: BStatusReducer
});
