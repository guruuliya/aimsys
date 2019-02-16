import firebase from 'firebase';
import { FACILTY_FORM, FACILITY_CHECK, FACILITY_FETCH, FACILITY_CREATE, FACILITY_REMOVE } from './types';

export const facilityForm = ({ name, value }) => {
    return {
        type: FACILTY_FORM,
        payload: { name, value }
    };
};

export const facilityCreate = ({ Water, Medicine, Mother, Infant, Play, Toilet }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/Infrastructure/facilities`)
            .push({ Water, Medicine, Mother, Infant, Play, Toilet })
            .then(() => {
                dispatch({
                    type: FACILITY_CREATE
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};


export function facilityStatus() {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/Infrastructure/`)
            .once('value', snapshot => {
                if (snapshot.hasChild('facilities')) {
                    console.log('exists');
                    dispatch({
                        type: FACILITY_CHECK,
                        payload: true
                    });
                } else {
                    console.log('not');
                    dispatch({
                        type: FACILITY_CHECK,
                        payload: false
                    });
                }
            });
    };
}

export const facilityFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/Infrastructure/facilities`)
            .on('value', snapshot => {
                dispatch({
                    type: FACILITY_FETCH,
                    payload: snapshot.val() || ''
                });
            });
    };
};

export const facilityDelete = (key) => {
    console.log(key);
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/Infrastructure/facilities/${key}`)
            .remove()
            .then(() => {
                dispatch({
                    type: FACILITY_REMOVE,
                    payload: ''
                });
            });
    };
};

export const facilityUpdate = ({ Water, Medicine, Mother, Infant, Play, Toilet }, key, navigate) => {
    console.log(key);
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/Infrastructure/facilities/${key}`)
            .set({ Water, Medicine, Mother, Infant, Play, Toilet })
            .then(() => {
                console.log('updated');
                dispatch({
                    type: FACILITY_CREATE,
                    payload: ''
                });
                navigate.navigate('Facility');
            });
    };
};

