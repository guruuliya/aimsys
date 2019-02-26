import firebase from 'firebase';
import { Alert } from 'react-native';
import {
    CHILDUPDATE, CHILD_CREATE, CHILDFETCH,
    CHILD_SAVE, FETCH_USER, CHILD_FETCH_LOAD_START, CHILD_FETCH_LOAD_END,CMOTHERNAMEFETCH
} from './types';
import ListChild from '../component/Maternal/ListChild';

export const childUpdate = ({ name, value }) => {
    return {
        type: CHILDUPDATE,
        payload: { name, value }
    };
};

export const childCreate = ({ HNumber, CName, CMotherName, option, DPickdob, DPickregdate }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        console.log(firebase.auth());
        firebase.database().ref(`/users/${currentUser.uid}/Maternal/ChildRegistration`)
            .push({ HNumber, CName, CMotherName, option, DPickdob, DPickregdate })
            .then(() => {
                dispatch({
                    type: CHILD_CREATE
                });
                // ActionSheet.childList({ type: reset });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const childFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        fetchLoad(dispatch);
        firebase.database().ref(`/users/${currentUser.uid}/Maternal/ChildRegistration`)
            .on('value', snapshot => {
                dispatch({ type: CHILDFETCH, payload: snapshot.val() });
                dispatch({ type: CHILD_FETCH_LOAD_END, payload: false });
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

export const childSave = ({ HNumber, CName, CMotherName, option, DPickdob, DPickregdate, uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Maternal/ChildRegistration/${uid}`)
            .set({ HNumber, CName, CMotherName, option, DPickdob, DPickregdate })
            .then(() => {
                dispatch({
                    type: CHILD_SAVE
                });


            });
    };
}

export const childDelete = ({ uid }, navigate) => {
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
                        firebase.database().ref(`/users/${currentUser.uid}/Maternal/ChildRegistration/${uid}`)
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
    };
};

const fetchLoad = (dispatch) => {
    dispatch({ type: CHILD_FETCH_LOAD_START, payload: true });
};