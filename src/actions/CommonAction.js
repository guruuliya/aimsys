import firebase from 'firebase';
import { FACILITY_CHECK, BSTATUS_CHECK, BPICTURE_CHECK } from './types';


export function statusCheck() {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Infrastructure/`)
            .once('value', snapshot => {
                if (snapshot.hasChild('facilities')) {
                    dispatch({
                        type: FACILITY_CHECK,
                        payload: true
                    });
                } else {
                    dispatch({
                        type: FACILITY_CHECK,
                        payload: false
                    });
                }
                if (snapshot.hasChild('buildingstatus')) {
                    dispatch({
                        type: BSTATUS_CHECK,
                        payload: true
                    });
                } else {
                    dispatch({
                        type: BSTATUS_CHECK,
                        payload: false
                    });
                }
                if (snapshot.hasChild('buildingImage')) {
                    dispatch({
                        type: BPICTURE_CHECK,
                        payload: true
                    });
                } else {
                    dispatch({
                        type: BPICTURE_CHECK,
                        payload: false
                    });
                }
            });
    };
}

