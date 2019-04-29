import firebase from 'firebase';
import { Alert } from 'react-native';
import {
    CHILDUPDATE, CHILD_CREATE, CHILDFETCH,
    CHILD_SAVE, CHILD_FETCH_LOAD_START, CHILD_FETCH_LOAD_END,
} from './types';
import ListChild from '../component/Maternal/ListChild';
// import { onlyLetters } from '../Config/Config';
// import { VALID_NAME, INVALID_NAME } from './types';
export const childUpdate = ({ name, value }) => ({
    type: CHILDUPDATE,
    payload: { name, value }
});

//
// eslint-disable-next-line max-len
export const childCreate = ({ HNumber, CName, CMotherId, status, option, babytype, health, DPickdob, DPickregdate }) => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();


    // if (HNumber === '' || CName === '') {
    //     Alert.alert(
    //         'Please enter the details',
    //         [
    //             { text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
    //         ],
    //         { cancelable: false }

    //     );
    // } else {

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
                    console.log(firebase.auth());
                    database.ref(`/users/${awcid}/Maternal/ChildRegistration`)
                        .push({ HNumber, CName, CMotherId, status, option, babytype, health, DPickdob, DPickregdate })
                        .then(() => {
                            dispatch({
                                type: CHILD_CREATE
                            });
                            // ActionSheet.childList({ type: reset });
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                } else {
                    console.log('no user data');
                }
            });
    };
};


export const childFetch = () => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();

    //    const { currentUser } = firebase.auth();
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
                    database.ref(`/users/${awcid}/Maternal/ChildRegistration`)
                        // eslint-disable-next-line no-shadow
                        .on('value', snapshot => {
                            dispatch({ type: CHILDFETCH, payload: snapshot.val() });
                            dispatch({ type: CHILD_FETCH_LOAD_END, payload: false });
                        });
                } else {
                    console.log('no user data');
                }
            });
    };
};


// export const CMotherNameFetch=({CMotherName})=> {
//     const { currentUser } = firebase.auth();
//     return (dispatch) => {
//         firebase.database().ref(`/users/${currentUser.uid}/Maternal/ChildRegistration`)
//         .once('value',snapshot=>{
//             dispatch({type:CMOTHERNAMEFETCH,payload:snapshot.val(CMotherName) });
//         });
//     };
// };

// eslint-disable-next-line max-len
export const childSave = ({ HNumber, CName, CMotherId, status, option, babytype, DPickdob, DPickregdate, uid }) => {
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
                    database.ref(`/users/${awcid}/Maternal/ChildRegistration/${uid}`)
                        .set({ HNumber, CName, CMotherId, status, option, babytype, DPickdob, DPickregdate })
                        .then(() => {
                            dispatch({
                                type: CHILD_SAVE
                            });
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                } else {
                    console.log('no user data');
                }
            });
    };
};

export const deliveryUpdate = ({ status, placedied }, uid) => {
    // console.log('uid', placedied);
    //  const hno = '3';
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();


    const Delivery = 'Yes';
    // const { currentUser } = firebase.auth();
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
                    database.ref(`/users/${awcid}/Demographic/Pregnancy/${uid}`)
                        .update({ Delivery, status, placedied })
                        .then(() => {
                            dispatch({
                                type: CHILD_SAVE
                            });
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                } else {
                    console.log('no user data');
                }
            });
    };
};

export const childDelete = ({ uid }, navigate) => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    // const { currentUser } = firebase.auth();
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
                                    database.ref(`/users/${awcid}/Maternal/ChildRegistration/${uid}`)
                                        .remove()
                                        .then(() => {
                                            dispatch({
                                                type: ListChild
                                            });
                                            navigate.navigate('ChildTab');
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
    dispatch({ type: CHILD_FETCH_LOAD_START, payload: true });
};

// export const onNameChanged = (name) => {
//     const validateName = onlyLetters.exec(name);
//     if (validateName) {
//         return { type: VALID_NAME, payload: name };
//     }
//     return { type: INVALID_NAME };
// };
