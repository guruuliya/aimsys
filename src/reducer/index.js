import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BStatusFormReducer from './BStatusFormReducer';
import BStatusReducer from './BStatusReducer';

export default combineReducers({
    auth: AuthReducer,
    bfstatus: BStatusFormReducer,
    bstatus: BStatusReducer
});
