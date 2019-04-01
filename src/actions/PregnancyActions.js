import { Alert } from 'react-native';
import firebase from 'firebase';
import {
    PREGNANCY_UPDATE, PREGNANCY_CREATE,
    PREGNANCYS_FETCH_SUCCESS,
    PREGNENT_SAVE,
    PREGNANCY_FETCH_LOAD_START,
    PREGNANCY_FETCH_LOAD_END,
} from './types';
export const pregnancyUpdate = ({ prop, value }) => {
    return {
        type: PREGNANCY_UPDATE,
        payload: { prop, value }
    };
};

export const PregnancyCreate = ({ HHNumber, PregnantName, NPregnant, LPerioddate, FirstDose, SecondDose, DeliveryDate }) => {
    var Delivery = 'No';
   
        const { currentUser } = firebase.auth();
        return (dispatch) => {
            firebase.database().ref(`/users/${currentUser.uid}/Demographic/Pregnancy`)
                .push({ HHNumber, PregnantName, NPregnant, LPerioddate, FirstDose, SecondDose, DeliveryDate, Delivery })
                .then(() => {
                    dispatch({ type: PREGNANCY_CREATE });
                });
        };
};

export const pregnancyFetch = () => {

    const { currentUser } = firebase.auth();

    return (dispatch) => {
        fetchLoad(dispatch);
        firebase.database().ref(`/users/${currentUser.uid}/Demographic/Pregnancy`)
            .on('value', snapshot => {
                dispatch({ type: PREGNANCYS_FETCH_SUCCESS, payload: snapshot.val() });
                dispatch({ type: PREGNANCY_FETCH_LOAD_END, payload: false });
            });
    };
};

export const PregnancySave = ({ HHNumber, PregnantName, NPregnant, LPerioddate, FirstDose, SecondDose, DeliveryDate, Dplace, FirstWeightDate, Nchild, uid }) => {
    console.log('here i Print HHNumber', HHNumber);  
    var Delivery = 'NO';
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Demographic/Pregnancy/${uid}`)
            .update({ HHNumber, PregnantName, NPregnant, LPerioddate, FirstDose, SecondDose, Delivery, DeliveryDate, Dplace, FirstWeightDate })
            .then(() => {
                dispatch({ type: PREGNENT_SAVE });
            });
    };
};

export const PregnancyDelete = ({ uid }, navigate) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        Alert.alert(
            'Need Attention',
            'Do you Want to Delete..',
            [
                {
                    text: 'Cancel', onPress: () =>
                        dispatch({
                            type: ListChild
                        }),
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () =>
                        firebase.database().ref(`/users/${currentUser.uid}/Demographic/Pregnancy/${uid}`)
                            .remove()
                            .then(() => {
                                navigate.navigate('PregnancyTab');
                            })
                },
            ],
            { cancelable: false },
        );
    };
};

const fetchLoad = (dispatch) => {
    console.log('inside action');
    dispatch({ type: PREGNANCY_FETCH_LOAD_START, payload: true });
};
