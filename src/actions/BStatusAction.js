import firebase from 'firebase';
import { BSTATUS_UPDATE, BSTATUS_CREATE } from './types';

export const bStatusUpdate = ({ name, value }) => {
    return {
        type: BSTATUS_UPDATE,
        payload: { name, value }
    };
};

export const bStatusCreate = ({ option }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        console.log(firebase.auth());
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ option })
            .then(() => {
                dispatch({
                    action: BSTATUS_CREATE
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
