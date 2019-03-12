import { PREGNANCYS_FETCH_SUCCESS,
    Pregnancy_FETCH_LOAD_START,
    Pregnancy_FETCH_LOAD_END
} from '../actions/types';
//import console = require('console');

const INITIAL_STATE ={};

 export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
         case PREGNANCYS_FETCH_SUCCESS:
         return action.payload;
         case Pregnancy_FETCH_LOAD_START:
         console.log('inside reducer',action.payload);
         return { Loading: action.payload };

        case  Pregnancy_FETCH_LOAD_END:
         return {Loading: action.payload };

            
         default:
         return state;
     }
 };