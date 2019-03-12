import firebase from 'firebase';
import { Alert } from 'react-native';
import {
    HOUSEHOLD_UPDATE, HOUSEHOLD_CREATE, HOUSEHOLD_FETCH_SUCCESS, HOUSEHOLD_SAVE, FETCH_ALL,
    HOUSEHOLD_Name_FETCH_SUCCESS
} from './types';
export const HouseholdUpdate = ({ name, value }) => ({
    type: HOUSEHOLD_UPDATE,
    payload: { name, value }
});

export const HouseholdCreate = ({ HHNumber, Address }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseHold`)
            .child(HHNumber).set({ HHNumber, Address })
            .then(() => {
                dispatch({ type: HOUSEHOLD_CREATE });
            });
    };
};


export const HouseHoldFormCreate = ({ HHNumber, HHName, DOB, Caste, sex, Status, Relationship, Designation, Phonenumber, Address, uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseholdMember/${uid}`)
            .push({ HHNumber, HHName, DOB, Caste, sex, Status, Relationship, Designation, Phonenumber, Address })
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

export const FetchAll = () => {
    let a = {};
    let i = 0;
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        const query = firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseholdMember`);
        query.on('value', snapshot => {
        snapshot.forEach(_child => {
                _child.forEach(Names => {
                    a[i] = Names.val();
                    i++;           
                });
            });
            dispatch({ type: FETCH_ALL, payload: a });
          });
    };
};

export const HouseholdNameFetch = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        const db = firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseholdMember/${uid}`);
        db.on('value', snapshot => {
            dispatch({ type: HOUSEHOLD_Name_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};

export const HouseholdSave = ({ HHNumber, HHName, DOB, Caste, sex, Relationship, Status, Designation, Phonenumber, Address }, uid, HNo) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseholdMember/${HNo}/${uid}`)
            .update({ HHNumber, HHName, DOB, Caste, sex, Relationship, Status, Designation, Phonenumber, Address })
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
                    text: 'Cancel',
                    onPress: () =>
                        dispatch({
                            type: ListChild
                        }),
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () =>
                        firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseholdMember/${HNo}/${uid}`)
                            .remove()
                            .then(() => {
                                navigate.navigate('Householdtab');
                            })
                },
            ],
            { cancelable: false },
        );
    };
};

