import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BStatusReducer from './BStatusReducer';
import DailyUsagePeopleReducer from './DailyUsagePeopleReducer';
import DailyUsageStockReducer from './DailyUsageStockReducer';
import DailyUsagePeopleFetchReducer from './DailyUsagePeopleFetchReducer';
import DailyUsageStockFetchReducer from './DailyUsageStockFetchReducer';
export default combineReducers({
    auth: AuthReducer,
    bstatus: BStatusReducer,   
    DailyUsagePeopleKey:DailyUsagePeopleReducer,
    DailyUsageStockKey:DailyUsageStockReducer,
    DailyUsagePeopleFetchKey:DailyUsagePeopleFetchReducer,
    DailyUsageStockFetchKey:DailyUsageStockFetchReducer
});
