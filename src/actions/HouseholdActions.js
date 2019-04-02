import firebase from 'firebase';
import { Alert } from 'react-native';
import {
    HOUSEHOLD_UPDATE, HOUSEHOLD_CREATE, HOUSEHOLD_FETCH_SUCCESS,
    HOUSEHOLD_SAVE, FETCH_ALL, HOUSEHOLD_Name_FETCH_SUCCESS,
    HOUSEHOLD_FETCH_LOAD_START,
    HOUSEHOLD_FETCH_LOAD_END,
    HOUSEHOLD_NAME_FETCH_END,
    HOUSEHOLD_NAME_FETCH_START,
    FETCH_SUCESS, FETCH_END,

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
        if ((HHNumber === undefined || HHNumber === '') || (Address === undefined || Address === '')) {
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

        if (count === 0) {
            find.child(HHNumber).set({ HHNumber, Address })
                .then(() => {
                    dispatch({ type: HOUSEHOLD_CREATE });
                });
            Alert.alert(
                'yes',
                'Record Inserted Sucessfully');
        } else if (count < 0) {
            Alert.alert(
                'Sorry',
                ' Please enter all the details');
        } else {
            Alert.alert(
                'Sorry',
                'Record alerday exist');
        }
    };
};

export const HouseHoldFormCreate = ({ HHNumber, HHName, DOB, Caste, sex, Status, Designation, Income, Phonenumber, uid, Disease1, Disease2, Disease3 }) => {
    console.log('asas', HHNumber);
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        if (HHNumber === undefined || HHName === undefined || DOB === undefined || sex === undefined || Status === undefined || Income === undefined || Designation === undefined || Disease1 === undefined || Disease2 === undefined || Disease3 === undefined) {
            Alert.alert('Please enter the all the  details',
                'Record Not Inserted');
        }
        else if (uid === undefined) {
            Alert.alert('NO Household Number ',
                'Record Not Inserted');
        }
        else {
            firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseholdMember/${uid}`)
                .push({ HHNumber, HHName, DOB, Caste, sex, Status, Designation, Income, Phonenumber, Disease1, Disease2, Disease3 })
                .then(() => {
                    dispatch({ type: HOUSEHOLD_CREATE });
                });

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
        FetchAllList(dispatch);
        const query = firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseholdMember`);
        query.on('value', snapshot => {
            snapshot.forEach(_child => {
                _child.forEach(Names => {
                    a[i] = Names.val();
                    i++;
                });
            });
            dispatch({ type: FETCH_ALL, payload: a });
            dispatch({ type: FETCH_END, payload: false });
        });
    };
};

export const HouseholdNameFetch = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        NameFetchLoad(dispatch);
        const db = firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseholdMember/${uid}`);
        db.on('value', snapshot => {
            dispatch({ type: HOUSEHOLD_Name_FETCH_SUCCESS, payload: snapshot.val() });
            dispatch({ type: HOUSEHOLD_NAME_FETCH_END, payload: false });
        });
    };
};

export const HouseholdSave = ({ HHNumber, HHName, DOB, Caste, sex, Status, Designation, Income, Phonenumber, Disease1, Disease2, Disease3 }, uid, HNo) => {
    if (HHNumber === undefined || HHName === undefined || DOB === undefined || sex === undefined || Status === undefined || Income === undefined || Designation === undefined || Disease1 === undefined || Disease2 === undefined || Disease3 === undefined) {
        Alert.alert(
            'No  Record Present',
            'Update Failed'
        );
    }
    else if (uid === undefined) {
        Alert.alert(
            'No  Record Present',
            'Update Failed'
        );
    }
    else {

        const { currentUser } = firebase.auth();
        return (dispatch) => {
            firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseholdMember/${HNo}/${uid}`)
                .update({ HHNumber, HHName, DOB, Caste, sex, Status, Designation, Income, Phonenumber, Income, Disease1, Disease2, Disease3 })
                .then(() => {
                    dispatch({ type: HOUSEHOLD_SAVE });
                });

        };
    }
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
const NameFetchLoad = (dispatch) => {
    dispatch({ type: HOUSEHOLD_NAME_FETCH_START, payload: true });
}
const FetchAllList = (dispatch) => {
    dispatch({ type: FETCH_SUCESS, payload: true });
}

