import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BStatusReducer from './BStatusReducer';
import ChildReducer from './ChildReducer';
import ChildFetchReducer from './ChildFetchReducer';
import NutritionReducer from './NutritionReducer';
import NutritionFetchReducer from './NutritionFetchReducer';
import InjectionReducer from './InjectionReducer';
import InjectionFetchReducer from './InjectionFetchReducer';

export default combineReducers({
    auth: AuthReducer,
    bstatus: BStatusReducer,
    child: ChildReducer,
    childF:ChildFetchReducer,
    nutrition:NutritionReducer,
    nutritionF:NutritionFetchReducer,
    injection:InjectionReducer,
    injectionF:InjectionFetchReducer

});
 