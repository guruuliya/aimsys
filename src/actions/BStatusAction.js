import firebase from 'firebase';
import { Alert } from 'react-native';
import {
    BSTATUS_UPDATE, BSTATUS_CREATE, BSTATUS_CHECK,
    BSTATUS_FETCH, BSTATUS_REMOVE, BSFETCH_LOADING_START, BSFETCH_LOADING_END
} from './types';

export const bStatusUpdate = ({ name, value }) => ({
    type: BSTATUS_UPDATE,
    payload: { name, value }
});

export const bStatusCreate = ({ option }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Infrastructure/buildingstatus`)
            .push({ option })
            .then(() => {
                Alert.alert(
                    'Successfull...!',
                    'Record Inserted Successfully...',
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: true }
                );
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
        firebase.database().ref(`/users/${currentUser.uid}/Infrastructure/`)
            .once('value', snapshot => {
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
            });
    };
}

export const bStatusFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        fetchLoad(dispatch);
        firebase.database().ref(`/users/${currentUser.uid}/Infrastructure/buildingstatus`)
            .on('value', snapshot => {
                dispatch({
                    type: BSTATUS_FETCH,
                    payload: snapshot.val() || ''
                });
                dispatch({
                    type: BSFETCH_LOADING_END,
                    payload: false
                });
            });
    };
};

export const bStatusDelete = (key) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        Alert.alert(
            'Need Attention...!',
            'Do you want delete this record?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () =>
                        firebase.database().ref(`/users/${currentUser.uid}/Infrastructure/buildingstatus/${key}`)
                            .remove()
                            .then(() => {
                                dispatch({
                                    type: BSTATUS_REMOVE,
                                    payload: ''
                                });
                            })
                },
            ],
            { cancelable: false },
        );
    };
};

export const bStatusSave = ({ option }, key, navigate) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Infrastructure/buildingstatus/${key}`)
            .set({ option })
            .then(() => {
                Alert.alert(
                    'Successfull...!',
                    'Record Updated Successfully...',
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: true }
                );
                dispatch({
                    type: BSTATUS_CREATE,
                    payload: ''
                });
                navigate.navigate('buildingStatus');
            });
    };
};

const fetchLoad = (dispatch) => {
    dispatch({ type: BSFETCH_LOADING_START, payload: true });
};
