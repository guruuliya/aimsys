import firebase from 'firebase';
import {
    DAILY_USAGE_UPDATE, DAILY_USAGE_CREATE,
    DAILY_USAGE_CREATE_SUCCESS,
    DAILY_USAGE_CREATE_FAIL,
    DAILY_USAGE_FETCH_SUCCESS,
} from './types';
import { Alert } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
// import { NavigationActions } from 'react-navigation'
//import onsubmitresult from '../../../imports/client/actions/addTodo';

export const dailyUsageUpdate = ({ name, value }) => {
    return {
        type: DAILY_USAGE_UPDATE,
        payload: { name, value }
    };
};

export const dailyUsageCreate = ({ six_months_to_one_year, one_year_to_three_year, three_year_to_six_year, pw_prenatal, pw_postnatal, pw_3rdgrade, pw_4thgrade, DPickdob, total1, total2, totalfinal, navigate }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        console.log(firebase.auth());
        console.log("dailyUsageCreatedailyUsageCreatedailyUsageCreatedailyUsageCreate");
        // if (six_months_to_one_year != '' && one_year_to_three_year != '' && three_year_to_six_year != '') {
        //     dailyUsageCreateFail(dispatch,navigate);

        // } else {


        firebase.database().ref(`/users/${currentUser.uid}/Timeline/DailyUsagePeople`)
            .push({ six_months_to_one_year, one_year_to_three_year, three_year_to_six_year, pw_prenatal, pw_postnatal, pw_3rdgrade, pw_4thgrade, DPickdob, total1, total2, totalfinal })
            .then(() => {
                console.log("elephant drashan dailyUsageCreatedailyUsageCreate");
                dispatch({
                    type: DAILY_USAGE_CREATE_SUCCESS,
                });
                dailyUsageCreateSuccess(dispatch, navigate)
            })
            .catch((error) => {
                console.log(error);
    
            });
     
    };
};

export const dailyUsageCreateSuccess = (dispatch, navigate) => {
    dispatch({
        type: DAILY_USAGE_CREATE_SUCCESS,
        payload: ''
    });
    navigate.navigate('ResultMessage', { paramName: 'dailyUsageCreateSuccess' });
};


export const dailyUsageFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Timeline/DailyUsagePeople`)
            .on('value', snapshot => {
                dispatch({ type: DAILY_USAGE_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const dailyUsageSaveChangeseSuccess = (dispatch, navigate) => {
    dispatch({
        type: DAILY_USAGE_SAVECHANGES_SUCCESS,
        payload: ''
    });
    navigate.navigate('ResultMessage', { paramName: 'dailyUsagesavechangesSuccess' });
};



export const dailyUsageSaveChanges = ({ six_months_to_one_year, one_year_to_three_year, three_year_to_six_year, pw_prenatal, pw_postnatal, pw_3rdgrade, pw_4thgrade, DPickdob, total1, total2, totalfinal, uid, navigate }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {

        firebase.database().ref(`/users/${currentUser.uid}/Timeline/DailyUsagePeople/${uid}`)
            .set({ six_months_to_one_year, one_year_to_three_year, three_year_to_six_year, pw_prenatal, pw_postnatal, pw_3rdgrade, pw_4thgrade, DPickdob, total1, total2, totalfinal })
            .then(() => {
                dailyUsageCreateSuccess(dispatch, navigate)
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const dailyUsageDelete = ({ uid }, navigate) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        Alert.alert(
            'Need Attention',
            'Do you Want to Delete..',
            [
                {
                    text: 'Cancel', onPress: () =>
                        dispatch({
                            type: DAILY_USAGE_FETCH_SUCCESS
                        }),
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () =>
                        firebase.database().ref(`/users/${currentUser.uid}/Timeline/DailyUsagePeople/${uid}`)
                            .remove()
                            .then(() => {
                                dispatch({
                                    type: DAILY_USAGE_FETCH_SUCCESS
                                });
                                navigate.navigate('DailyUsagePeopleTab');
                            })
                },
            ],
            { cancelable: false },
        );
    };
};