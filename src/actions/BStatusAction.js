import firebase from 'firebase';
import {
    BSTATUS_UPDATE, BSTATUS_CREATE,
    BSTATUS_CHECK, BSTATUS_FETCH, BSTATUS_REMOVE
} from './types';

export const bStatusUpdate = ({ name, value }) => ({
    type: BSTATUS_UPDATE,
    payload: { name, value }
});

export const bStatusCreate = ({ option }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/Infrastructure/buildingstatus`)
            .push({ option })
            .then(() => {
                dispatch({
                    type: BSTATUS_CREATE
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};


export function checkBStatus() {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/Infrastructure/`)
            .once('value', snapshot => {
                if (snapshot.hasChild('buildingstatus')) {
                    console.log('exists');
                    dispatch({
                        type: BSTATUS_CHECK,
                        payload: true
                    });
                } else {
                    console.log('not');
                    dispatch({
                        type: BSTATUS_CHECK,
                        payload: false
                    });
                }
            });
    };
}

export const bStatusFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/Infrastructure/buildingstatus`)
            .on('value', snapshot => {
                dispatch({
                    type: BSTATUS_FETCH,
                    payload: snapshot.val() || ''
                });
            });
    };
};

export const bStatusDelete = (key) => {
    console.log(key);
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/Infrastructure/buildingstatus/${key}`)
            .remove()
            .then(() => {
                dispatch({
                    type: BSTATUS_REMOVE,
                    payload: ''
                });
            });
    };
};

export const bStatusSave = ({ option }, key, navigate) => {
    console.log(option);
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/Infrastructure/buildingstatus/${key}`)
            .set({ option })
            .then(() => {
                console.log('updated');
                dispatch({
                    type: BSTATUS_CREATE,
                    payload: ''
                });
                navigate.navigate('buildingStatus');
            });
    };
};
