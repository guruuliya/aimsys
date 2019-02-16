import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BStatusReducer from './BStatusReducer';
import ChildReducer from './ChildReducer';
import ChildFetchReducer from './ChildFetchReducer';

export default combineReducers({
    auth: AuthReducer,
    bstatus: BStatusReducer,
    child: ChildReducer,
    childF:ChildFetchReducer
});
 