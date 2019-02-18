import firebase from 'firebase';
import { CHILDUPDATE, CHILDCREATE, CHILDFETCH } from './types';

export const childUpdate = ({ name, value }) => {
    return {
        type: CHILDUPDATE,
        payload: { name, value }
    };
};

export const childCreate = ({ HNumber, CName, CMotherName, option, DPickdob, DPickregdate }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        console.log(firebase.auth());
        firebase.database().ref(`/users/${currentUser.uid}/child`)
            .push({ HNumber, CName, CMotherName, option, DPickdob, DPickregdate })
            .then(() => {
                dispatch({
                    action: CHILDCREATE
                });
                // ActionSheet.childList({ type: reset });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const childFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/child`)
            .on('value', snapshot => {
                dispatch({ type: CHILDFETCH, payload: snapshot.val() });

            });
    };
};
