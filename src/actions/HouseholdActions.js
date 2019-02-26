
import firebase from 'firebase';


import { Alert } from 'react-native';
import { HOUSEHOLD_UPDATE, HOUSEHOLD_CREATE, HOUSEHOLD_FETCH_SUCCESS, HOUSEHOLD_SAVE, HOUSEHOLD_Name_FETCH_SUCCESS } from './types';
export const HouseholdUpdate = ({ name, value }) => {
    return {
        type: HOUSEHOLD_UPDATE,
        payload: { name, value }
    };
};

export const HouseholdCreate = ({ HHNumber, Address }) => {
    // console.log(sex);
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseHold`)

            .push({ HHNumber, Address })
            .then(() => {
                dispatch({ type: HOUSEHOLD_CREATE });

            });

    };
};


export const HouseHoldFormCreate = ({ HHNumber, HHName, DOB, Caste, sex, Relationship, Status, Designation, Phonenumber, option }) => {
    console.log('Action', HHNumber);
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseholdMember/${HHNumber}`)

            .push({ HHNumber, HHName, DOB, Caste, sex, Relationship, Status, Designation, Phonenumber })
            .then(() => {
                dispatch({ type: HOUSEHOLD_CREATE });

            });

    };
};

export const HouseholdFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseHold`)
            .on('value', snapshot => {
                dispatch({ type: HOUSEHOLD_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};



export const HouseholdNameFetch = ({ HHNumber }) => {
    console.log('inside Action',HHNumber);
    
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseholdMember/${HHNumber}`)
            .on('value', snapshot => {
                dispatch({ type: HOUSEHOLD_Name_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };



};


export const HouseholdSave = ({ HHNumber, HHName, DOB, Caste, sex, Relationship, Status, Designation, Phonenumber, Address }, uid, HNo) => {

    console.log("inside Action save", HNo, 'uid here is ', uid);
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseholdMember/${HHNumber}/${uid}`)
            .set({ HHNumber, HHName, DOB, Caste, sex, Relationship, Status, Designation, Phonenumber, Address })
            .then(() => {
                dispatch({ type: HOUSEHOLD_SAVE });
            });
    };
};


export const HouseholdDelete = (uid, navigate, HNo) => {
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
                        firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseholdMember/${HNo}/${uid}`)
                            .remove()
                            .then(() => {
                                // dispatch({
                                //     type: ListChild
                                // });
                                navigate.navigate('Householdtab');
                            })
                },
            ],
            { cancelable: false },
        );
    };
};







