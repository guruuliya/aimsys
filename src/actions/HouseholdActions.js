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
export const HouseholdNumberSave = ({ HHNumber, Address }) => {
    const { currentUser } = firebase.auth();
    return () => {
        const find = firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseHold`);
    };
}

// let awcid = 0;
//     const database = firebase.database();
//     const { currentUser } = firebase.auth();



//         database.ref('/assignedworkerstocenters')
//             .orderByChild('anganwadiworkerid').equalTo(currentUser.uid)
//             .once('value', snapshot => {
//                 if (snapshot.val()) {
//                     const value = snapshot.val();
//                     const keys = Object.keys(value);
//                     for (let i = 0; i < keys.length; i++) {
//                         const k = keys[i];
//                         awcid = value[k].anganwadicenter_code;
//                     }

//                     //Put your existing code here database insertion part check another file for reference

//                 } else {
//                     console.log('no user data');
//                 }
//             });


export const HouseholdCreate = ({ HHNumber, Address }) => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    let count = 0;
    let ucount = 0;
    return (dispatch) => {
        database.ref('/assignedworkerstocenters')
            .orderByChild('anganwadiworkerid').equalTo(currentUser.uid)
            .once('value', snap => {
                if (snap.val()) {
                    const value = snap.val();
                    const keys = Object.keys(value);
                    for (let i = 0; i < keys.length; i++) {
                        const k = keys[i];
                        awcid = value[k].anganwadicenter_code;
                    }
                    if ((HHNumber === undefined || HHNumber === '') || (Address === undefined || Address === '')) {
                        count--;

                    } else {
                        database.ref(`/users/${awcid}/Demographic/HouseHold`).on('value', snapshot => {
                            snapshot.forEach(child => {
                                if (HHNumber === child.val().HHNumber) {
                                    count++;
                                }
                            });
                        });
                    }
                    if (count === 0) {
                        database.ref(`/users/${awcid}/Demographic/HouseHold`).child(HHNumber).set({ HHNumber, Address })
                            .then(() => {
                                dispatch({ type: HOUSEHOLD_CREATE });
                            });
                        Alert.alert(
                            'Sucessfully',
                            'Record Inserted ');
                    } else if (count > 0) {
                        Alert.alert(
                            'Sorry',
                            'Record alerday exist');
                    }
                    else if (count--) {
                        Alert.alert(
                            'Please enter the details',
                            'Record Not Inserted');
                    }

                } else {
                    console.log('no user data');
                }
            });
    };
};

export const HouseDelete = (uid, navigate, HNo) => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    return () => {
        database.ref('/assignedworkerstocenters')
            .orderByChild('anganwadiworkerid').equalTo(currentUser.uid)
            .once('value', snapshot => {
                if (snapshot.val()) {
                    const value = snapshot.val();
                    const keys = Object.keys(value);
                    for (let i = 0; i < keys.length; i++) {
                        const k = keys[i];
                        awcid = value[k].anganwadicenter_code;
                    }
                    database.ref(`/users/${awcid}/Demographic/HouseHold/${HNo}`)
                        .remove()

                        .then(() => {
                            navigate.navigate('Householdtab');
                        });

                    database.ref(`/users/${awcid}/Demographic/HouseholdMember/${HNo}`)
                        .remove();

                    // const ref = firebase.database().ref(`/users/${awcid}/Demographic/Pregnancy`);
                    // ref.orderByChild('HHNumber').equalTo(HNo).once('child_added', (snapshot1) => {
                    //     snapshot1.ref.remove();
                    // });
                } else {
                    console.log('no user data');
                }
            });
    };
};


export const HouseHoldFormCreate = ({ HHNumber, HHName, DOB, Caste, sex, LiteracyRate, Status, Designation, Income, Phonenumber, uid, Disease1, Disease2, Disease3 }) => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        database.ref('/assignedworkerstocenters')
            .orderByChild('anganwadiworkerid').equalTo(currentUser.uid)
            .once('value', snapshot => {
                if (snapshot.val()) {
                    const value = snapshot.val();
                    const keys = Object.keys(value);
                    for (let i = 0; i < keys.length; i++) {
                        const k = keys[i];
                        awcid = value[k].anganwadicenter_code;
                    }
                    if (HHNumber === undefined || HHName === undefined || DOB === undefined || sex === undefined || Status === undefined || Income === undefined || Designation === undefined || Disease1 === undefined || Disease2 === undefined || Disease3 === undefined) {
                        Alert.alert('Please enter the all the  details',
                            'Record Not Inserted');
                    } else if (uid === undefined) {
                        Alert.alert('NO Household Number ',
                            'Record Not Inserted');
                    } else {
                        database.ref(`/users/${awcid}/Demographic/HouseholdMember/${uid}`)
                            .push({ HHNumber, HHName, DOB, Caste, sex, LiteracyRate, Status, Designation, Income, Phonenumber, Disease1, Disease2, Disease3 })
                            .then(() => {
                                dispatch({ type: HOUSEHOLD_CREATE });
                            });
                    }
                } else {
                    console.log('no user data');
                }
            });
    };
};

export const HouseholdFetch = () => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        database.ref('/assignedworkerstocenters')
            .orderByChild('anganwadiworkerid').equalTo(currentUser.uid)
            .once('value', snapshot => {
                if (snapshot.val()) {
                    const value = snapshot.val();
                    const keys = Object.keys(value);
                    for (let i = 0; i < keys.length; i++) {
                        const k = keys[i];
                        awcid = value[k].anganwadicenter_code;
                    }
                    fetchLoad(dispatch);
                    database.ref(`/users/${awcid}/Demographic/HouseHold`)
                        .on('value', snapshot1 => {
                            dispatch({ type: HOUSEHOLD_FETCH_SUCCESS, payload: snapshot1.val() });
                            dispatch({ type: HOUSEHOLD_FETCH_LOAD_END, payload: false });
                        });
                } else {
                    console.log('no user data');
                }
            });
    };
};

export const FetchAll = () => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    let a = {};
    let i = 0;
    return (dispatch) => {
        database.ref('/assignedworkerstocenters')
            .orderByChild('anganwadiworkerid').equalTo(currentUser.uid)
            .once('value', snapshot => {
                if (snapshot.val()) {
                    const value = snapshot.val();
                    const keys = Object.keys(value);
                    for (let i = 0; i < keys.length; i++) {
                        const k = keys[i];
                        awcid = value[k].anganwadicenter_code;
                    }
                    FetchAllList(dispatch);
                    const query = database.ref(`/users/${awcid}/Demographic/HouseholdMember`);
                    query.on('value', snapshot1 => {
                        snapshot1.forEach(_child => {
                            _child.forEach(Names => {
                                a[i] = Names.val();
                                i++;
                            });
                        });
                        dispatch({ type: FETCH_ALL, payload: a });
                        dispatch({ type: FETCH_END, payload: false });
                    });
                } else {
                    console.log('no user data');
                }
            });
    };
};

export const HouseholdNameFetch = ({ uid }) => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        database.ref('/assignedworkerstocenters')
            .orderByChild('anganwadiworkerid').equalTo(currentUser.uid)
            .once('value', snapshot => {
                if (snapshot.val()) {
                    const value = snapshot.val();
                    const keys = Object.keys(value);
                    for (let i = 0; i < keys.length; i++) {
                        const k = keys[i];
                        awcid = value[k].anganwadicenter_code;
                    }
                    NameFetchLoad(dispatch);
                    const db = database.ref(`/users/${awcid}/Demographic/HouseholdMember/${uid}`);
                    db.on('value', snapshot1 => {
                        dispatch({ type: HOUSEHOLD_Name_FETCH_SUCCESS, payload: snapshot1.val() });
                        dispatch({ type: HOUSEHOLD_NAME_FETCH_END, payload: false });
                    });
                } else {
                    console.log('no user data');
                }
            });
    };
};

export const HouseholdSave = ({ HHNumber, HHName, DOB, Caste, sex, Status, Designation, Income, Phonenumber, Disease1, Disease2, Disease3 }, uid, HNo) => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    if (HHNumber === undefined || HHName === undefined || DOB === undefined || sex === undefined || Status === undefined || Income === undefined || Designation === undefined || Disease1 === undefined || Disease2 === undefined || Disease3 === undefined) {
        Alert.alert(
            'No  Record Present',
            'Update Failed'
        );
    } else if (uid === undefined) {
        Alert.alert(
            'No  Record Present',
            'Update Failed'
        );
    } else {
        return (dispatch) => {
            database.ref('/assignedworkerstocenters')
                .orderByChild('anganwadiworkerid').equalTo(currentUser.uid)
                .once('value', snapshot => {
                    if (snapshot.val()) {
                        const value = snapshot.val();
                        const keys = Object.keys(value);
                        for (let i = 0; i < keys.length; i++) {
                            const k = keys[i];
                            awcid = value[k].anganwadicenter_code;
                        }
                        database.ref(`/users/${awcid}/Demographic/HouseholdMember/${HNo}/${uid}`)
                            .update({ HHNumber, HHName, DOB, Caste, sex, Status, Designation, Income, Phonenumber, Income, Disease1, Disease2, Disease3 })
                            .then(() => {
                                dispatch({ type: HOUSEHOLD_SAVE });
                            });
                    } else {
                        console.log('no user data');
                    }
                });
        };
    }
};


export const HouseholdDelete = (uid, navigate, HNo) => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        database.ref('/assignedworkerstocenters')
            .orderByChild('anganwadiworkerid').equalTo(currentUser.uid)
            .once('value', snapshot => {
                if (snapshot.val()) {
                    const value = snapshot.val();
                    const keys = Object.keys(value);
                    for (let i = 0; i < keys.length; i++) {
                        const k = keys[i];
                        awcid = value[k].anganwadicenter_code;
                    }
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
                                    database.ref(`/users/${awcid}/Demographic/HouseholdMember/${HNo}/${uid}`)
                                        .remove()
                                        .then(() => {
                                            navigate.navigate('Householdtab');
                                        })
                            },
                        ],
                        { cancelable: false },
                    );
                } else {
                    console.log('no user data');
                }
            });
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

