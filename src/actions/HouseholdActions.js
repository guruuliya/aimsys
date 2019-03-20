import firebase from 'firebase';
import { Alert } from 'react-native';
import {
    HOUSEHOLD_UPDATE, HOUSEHOLD_CREATE, HOUSEHOLD_FETCH_SUCCESS,
    HOUSEHOLD_SAVE, FETCH_ALL, HOUSEHOLD_Name_FETCH_SUCCESS,
    HOUSEHOLD_FETCH_LOAD_START,
    HOUSEHOLD_FETCH_LOAD_END,
} from './types';

export const HouseholdUpdate = ({ name, value }) => ({
    type: HOUSEHOLD_UPDATE,
    payload: { name, value }
});

export const HouseholdCreate = ({ HHNumber, Address }) => {
    let count = 0;
    const { currentUser } = firebase.auth();
    const find = firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseHold`);
    return (dispatch) => {
        if (HHNumber === '' || Address === '') {
            count--;
            Alert.alert(
                'Please enter the details',
                'Record Not Inserted');
        }
        else {
            find.on('value', snapshot => {

                snapshot.forEach(child => {

                    if (HHNumber === child.val().HHNumber) {
                        count++;
                    }
                });
            });
        }

        if (count == 0) {
            find.child(HHNumber).set({ HHNumber, Address })
                .then(() => {
                    dispatch({ type: HOUSEHOLD_CREATE });
                });
            Alert.alert(
                'yes',
                'Record Inserted Sucessfully');
        }
        else if (count < 0) {
            Alert.alert(
                'Sorry',
                ' Please enter all the details');
        }
        else {
            Alert.alert(
                'Sorry',
                'Record alerday exist');
        }
    };
};

export const HouseHoldFormCreate = ({ HHNumber, HHName, DOB, Caste, sex, Status, Designation, Phonenumber, uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        if (HHNumber === '' || HHName === '' || DOB === '' || sex === '' || Status === '' || Designation === '' || Phonenumber === '') {
            Alert.alert('Please enter the all the  details',
                'Record Not Inserted');
        }
        else {
            if (Phonenumber.length != 10) {
                Alert.alert(
                    'Please Phone number is too large',
                    'Record Not Inserted');

            }
            else {
                firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseholdMember/${uid}`)
                    .push({ HHNumber, HHName, DOB, Caste, sex, Status, Designation, Phonenumber })
                    .then(() => {
                        dispatch({ type: HOUSEHOLD_CREATE });
                    });
            }
        }
    };
};

export const HouseholdFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        fetchLoad(dispatch);
        firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseHold`)
            .on('value', snapshot => {
                dispatch({ type: HOUSEHOLD_FETCH_SUCCESS, payload: snapshot.val() });
                dispatch({ type: HOUSEHOLD_FETCH_LOAD_END, payload: false });
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

const fetchLoad = (dispatch) => {
    console.log('inside action');
    dispatch({ type: HOUSEHOLD_FETCH_LOAD_START, payload: true });
};

