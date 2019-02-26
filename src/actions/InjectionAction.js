import firebase from 'firebase';
import { INJECTIONUPDATE, INJECTION_CREATE, INJECTIONFETCH, INJECTION_SAVE, FETCH_USER,NUTRITION_FETCH_LOAD_START,INJECTION_FETCH_LOAD_END } from './types';
import ListInjection from '../component/Maternal/ListInjection';
import {Alert} from 'react-native';

export const InjectionUpdate = ({ name, value }) => {
    return {
        type: INJECTIONUPDATE,
        payload: { name, value }
    };
};

export const InjectionCreate = ({HNumber, CName,DPickdob, poliodate,hepa,BCG,DPT1,hepa1,OPV1,DPT2,hepa2,OPV2,DPT3,hepa3,OPV3,dadara1,nutri1,dptbooster,dadara2,complete}) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        console.log(firebase.auth());
        firebase.database().ref(`/users/${currentUser.uid}/Maternal/Injection`)
            .push({ HNumber, CName,DPickdob, poliodate,hepa,BCG,DPT1,hepa1,OPV1,DPT2,hepa2,OPV2,DPT3,hepa3,OPV3,dadara1,nutri1,dptbooster,dadara2,complete})
            .then(() => {
                dispatch({
                    type: INJECTION_CREATE
                });
                // ActionSheet.childList({ type: reset });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const InjectionFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        fetchLoad(dispatch);
        firebase.database().ref(`/users/${currentUser.uid}/Maternal/Injection`)
            .on('value', snapshot => {
                console.log('sanp',snapshot.val());
                dispatch({ type: INJECTIONFETCH, payload: snapshot.val() });
                dispatch({ type: INJECTION_FETCH_LOAD_END, payload: false });

            });
    };
};

export const InjectionSave = ({HNumber, CName,DPickdob, poliodate,hepa,BCG,DPT1,hepa1,OPV1,DPT2,hepa2,OPV2,DPT3,hepa3,OPV3,dadara1,nutri1,dptbooster,dadara2,complete,uid}) => {
    const { currentUser } = firebase.auth();
    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Maternal/Injection/${uid}`)
            .set({ HNumber, CName,DPickdob, poliodate,hepa,BCG,DPT1,hepa1,OPV1,DPT2,hepa2,OPV2,DPT3,hepa3,OPV3,dadara1,nutri1,dptbooster,dadara2,complete})
            .then(() => {
                dispatch({
                    type: INJECTION_SAVE
                });


            });
    };
}

export const InjectionDelete = ({ uid }, navigate) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        Alert.alert(
            'Need Attention',
            'Do you Want to Delete..',
            [
                {
                    text: 'Cancel', onPress: () =>
                        dispatch({
                            type: ListInjection
                        }),
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () =>
                        firebase.database().ref(`/users/${currentUser.uid}/Maternal/Injection/${uid}`)
                            .remove()
                            .then(() => {
                                dispatch({
                                    type: ListInjection
                                });
                                navigate.navigate('InjectionTab');
                            })
                },
            ],
            { cancelable: false },
        );
    };
};

const fetchLoad = (dispatch) => {
    dispatch({ type: NUTRITION_FETCH_LOAD_START, payload: true });
};
