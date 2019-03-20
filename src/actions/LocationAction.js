import firebase from 'firebase';
import { Alert } from 'react-native';
import {
    LOCATION_FORM, LOCATION_CREATE, LOCATION_FETCH, LOCATION_LOADING_START, LOCATION_LOADING_END, LOCATION_REMOVE
} from './types';

export const LocationForm = ({ name, value }) => {
    return {
        type: LOCATION_FORM,
        payload: { name, value }
    };
};

export const LocationCreate = ({ latitude, longitude }) => {
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        database.ref(`/users/${currentUser.uid}/Infrastructure/`)
            .once('value', snapshot => {
                if (snapshot.hasChild('Location')) {
                    Alert.alert(
                        'Oops...!',
                        'Data Already Exists...',
                        [
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ],
                        { cancelable: true }
                    );
                } else {
                    database.ref(`/users/${currentUser.uid}/Infrastructure/Location`)
                        .push({ latitude, longitude })
                        .then(() => {
                            Alert.alert(
                                'Successfull...!',
                                'Record Inserted Successfully...',
                                [
                                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                                ],
                                { cancelable: false },
                            );
                            dispatch({
                                type: LOCATION_CREATE
                            });
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            });
    };
};


export const LocationFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        fetchLoad(dispatch);
        firebase.database().ref(`/users/${currentUser.uid}/Infrastructure/Location`)
            .on('value', snapshot => {
                dispatch({
                    type: LOCATION_FETCH,
                    payload: snapshot.val() || ''
                });
                dispatch({
                    type: LOCATION_LOADING_END,
                    payload: false
                });
            });
    };
};

export const LocationDelete = (key) => {
    console.log(key);
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
                        firebase.database().ref(`/users/${currentUser.uid}/Infrastructure/Location/${key}`)
                            .remove()
                            .then(() => {
                                dispatch({
                                    type: LOCATION_REMOVE,
                                    payload: ''
                                });
                            })
                },
            ],
            { cancelable: false },
        );
    };
};

export const LocationUpdate = ({ latitude, longitude }, key, navigate) => {
    console.log(key);
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Infrastructure/Location/${key}`)
            .set({ latitude, longitude })
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
                    type: LOCATION_CREATE,
                    payload: ''
                });
                navigate.navigate('AnganwadiLocation');
            });
    };
};

const fetchLoad = (dispatch) => {
    dispatch({ type: LOCATION_LOADING_START, payload: true });
};
