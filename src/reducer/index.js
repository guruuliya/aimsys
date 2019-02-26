import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BStatusReducer from './BStatusReducer';
import HouseholdReducer from './HouseholdReducer';
import HouseholdFetchReducer from './HouseholdFetchReducer';
import PregnancyReducer from './PregnancyReducer';
import PregnancyFormReducer from './PregnancyFormReducer';
import HouseHoldNameFetchReducer from './HouseHoldNameFetchReducer';


export default combineReducers({
    auth: AuthReducer,
    bstatus: BStatusReducer,
    HouseHoldForm:HouseholdReducer,
    HouseHold:HouseholdFetchReducer,
    HouseHoldName:HouseHoldNameFetchReducer,
    PregnancyForm:PregnancyFormReducer,
    PregnancyFetch:PregnancyReducer
    
});
