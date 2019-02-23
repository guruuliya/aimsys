import firebase from 'firebase';
import { Alert } from 'react-native';
import {
    FACILTY_FORM, FACILITY_FETCH, FACILITY_CREATE,
    FACILITY_REMOVE, FACILITY_LOADING_START, FACILITY_LOADING_END
} from './types';

export const facilityForm = ({ name, value }) => {
    return {
        type: FACILTY_FORM,
        payload: { name, value }
    };
};

export const facilityCreate = ({ Water, Medicine, Mother, Infant, Play, Toilet }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Infrastructure/facilities`)
            .push({ Water, Medicine, Mother, Infant, Play, Toilet })
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
                    type: FACILITY_CREATE
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};


export const facilityFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        fetchLoad(dispatch);
        firebase.database().ref(`/users/${currentUser.uid}/Infrastructure/facilities`)
            .on('value', snapshot => {
                dispatch({
                    type: FACILITY_FETCH,
                    payload: snapshot.val() || ''
                });
                dispatch({
                    type: FACILITY_LOADING_END,
                    payload: false
                });
            });
    };
};

export const facilityDelete = (key) => {
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
                        firebase.database().ref(`/users/${currentUser.uid}/Infrastructure/facilities/${key}`)
                            .remove()
                            .then(() => {
                                dispatch({
                                    type: FACILITY_REMOVE,
                                    payload: ''
                                });
                            })
                },
            ],
            { cancelable: false },
        );


    };
};

export const facilityUpdate = ({ Water, Medicine, Mother, Infant, Play, Toilet }, key, navigate) => {
    console.log(key);
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Infrastructure/facilities/${key}`)
            .set({ Water, Medicine, Mother, Infant, Play, Toilet })
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
                    type: FACILITY_CREATE,
                    payload: ''
                });
                navigate.navigate('Facility');
            });
    };
};

const fetchLoad = (dispatch) => {
    dispatch({ type: FACILITY_LOADING_START, payload: true });
};
