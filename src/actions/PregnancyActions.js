import {Alert}from 'react-native';
import firebase from 'firebase';
import { 
    PREGNANCY_UPDATE, PREGNANCY_CREATE,
     PREGNANCYS_FETCH_SUCCESS,PREGNENT_SAVE
} from './types';
export const pregnancyUpdate = ({ prop, value}) => {
    return {
        type: PREGNANCY_UPDATE,
        payload: { prop, value }
    };
};

export const PregnancyCreate = ({HHNumber,PregnantName,NPregnant, LPerioddate, EDeliveryplace,  FirstDose, SecondDose, DeliveryDate, Dplace,option, FirstWeightDate, Nchild })=>
{
    const {currentUser}= firebase.auth();
    return(dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/Demographic/Pregnancy`)
    .push({ HHNumber,PregnantName,NPregnant, LPerioddate, EDeliveryplace,  FirstDose, SecondDose, DeliveryDate, Dplace,option,  FirstWeightDate, Nchild})
     .then(() => {
         dispatch({ type:PREGNANCY_CREATE });
     });
};
};

export const pregnancyFetch = () => {
  
    const {currentUser}= firebase.auth();
 
    return  (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/Demographic/Pregnancy`)
    .on('value', snapshot =>{
        dispatch({ type: PREGNANCYS_FETCH_SUCCESS, payload: snapshot.val() });  

    });
  };
};

 export const PregnancySave = ({ PregnantName, NPregnant, LPerioddate, EDeliveryplace, FirstDose, SecondDose, DeliveryDate, option, Dplace, FirstWeightDate, Nchild, uid }) => {   
    const {currentUser}=firebase.auth();
    return (dispatch)=>
    {
       firebase.database().ref(`/users/${currentUser.uid}/Demographic/Pregnancy/${uid}`)
       .set({PregnantName,NPregnant, LPerioddate, EDeliveryplace, FirstDose, SecondDose, DeliveryDate, option, Dplace, FirstWeightDate, Nchild, uid })
       .then(()=>{
           dispatch({type:PREGNENT_SAVE});
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

