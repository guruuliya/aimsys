import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BStatusFormReducer from './BStatusFormReducer';
import BStatusReducer from './BStatusReducer';
import FacilityFormReducer from './FacilityFormReducer';
import FacilityReducer from './FacilityReducer';
import BPictureFormReducer from './BPictureFormReducer';
import BPictureReducer from './BPictureReducer';

export default combineReducers({
    auth: AuthReducer,
    bfstatus: BStatusFormReducer,
    bstatus: BStatusReducer,
    facilityform: FacilityFormReducer,
    facility: FacilityReducer,
    BPictureForm: BPictureFormReducer,
    BPic: BPictureReducer
});
