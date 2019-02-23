import firebase from 'firebase';
import {
    DAILY_USAGE_STOCK_UPDATE, DAILY_USAGE_STOCK_CREATE,
    DAILY_USAGE_STOCK_CREATE_SUCCESS,
    DAILY_USAGE_CREATE_FAIL,
    DAILY_USAGE_FETCH_SUCCESS,
    DAILY_USAGE_STOCK_FETCH_SUCCESS
} from './types';
import { Alert } from 'react-native';
import DailyUsagePeopleListItem from '../component/TimeLine/DailyUsagePeopleListItem';
import { StackActions, NavigationActions } from 'react-navigation';
// import { NavigationActions } from 'react-navigation'
//import onsubmitresult from '../../../imports/client/actions/addTodo';


//DONE
export const dailyUsageStockUpdate = ({ name, value }) => {
    return {
        type: DAILY_USAGE_STOCK_UPDATE,
        payload: { name, value }
    };
};
//DONE
export const dailyUsageStockCreate = ({ food_received,
    food_provided,
    food_remaining,
    nutritious_food,
    protien_food,
    oil,
    jaggery,
    chilli,
    egg,
    salt,
    grams,
    mustard_seeds,
    amalice_rich,
    green_gram,
    food_provided_today,
    Extra,
    DPickdobStock, navigate }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        console.log(firebase.auth());
        console.log("dailyUsageCreatedailyUsageCreatedailyUsageCreatedailyUsageCreate");
        // if (six_months_to_one_year != '' && one_year_to_three_year != '' && three_year_to_six_year != '') {
        //     dailyUsageCreateFail(dispatch,navigate);

        // } else {


        firebase.database().ref(`/users/${currentUser.uid}/Timeline/DailyUsageStock`)
            .push({ food_received,
                food_provided,
                food_remaining,
                nutritious_food,
                protien_food,
                oil,
                jaggery,
                chilli,
                egg,
                salt,
                grams,
                mustard_seeds,
                amalice_rich,
                green_gram,
                food_provided_today,
                Extra,
                DPickdobStock })
            .then(() => {
                console.log("elephant drashan dailyUsageCreatedailyUsageCreate");
                dispatch({
                    type: DAILY_USAGE_STOCK_CREATE,
                });
                dailyUsageStockCreateSuccess(dispatch, navigate)
            })
            .catch((error) => {
                console.log(error);
                // dailyUsageCreateFail(dispatch,navigate);
            });
        // }
    };
};

// const dailyUsageCreateFail = (dispatch,navigate) => {
//     dispatch({
//         type: DAILY_USAGE_CREATE_FAIL,
//         payload: ''
//     });
//     console.log("then then iam  hen guru");
//     navigate.navigate('ResultMessage', { paramName: 'dailyUsageCreateFail' });
// };

export const dailyUsageStockCreateSuccess = (dispatch, navigate) => {
    dispatch({
        type: DAILY_USAGE_STOCK_CREATE_SUCCESS,
        payload: ''
    });
   // console.log("then then iam  hen guru");
   //resultmessage page is same for both of th actions thats why dailyusagecreatesuccess
    navigate.navigate('ResultMessage', { paramName: 'dailyUsageCreateSuccess' });
};


export const dailyUsageStockFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Timeline/DailyUsageStock`)
            .on('value', snapshot => {
                dispatch({ type: DAILY_USAGE_STOCK_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

// export const dailyUsageSaveChangeseSuccess = (dispatch, navigate) => {
//     dispatch({
//         type: DAILY_USAGE_SAVECHANGES_SUCCESS,
//         payload: ''
//     });
//     //console.log("then then iam  hen guru");
//     navigate.navigate('ResultMessage', { paramName: 'dailyUsagesavechangesSuccess' });
// };






export const dailyUsageStockSaveChanges = ({ food_received,food_provided, food_remaining, nutritious_food,  protien_food,   oil,   jaggery,  chilli,   egg,  salt,  grams,  mustard_seeds, amalice_rich, green_gram,food_provided_today, Extra, DPickdobStock,uid, navigate}) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        console.log(firebase.auth());
        console.log("dailyUsageSaveChanges");
        // if (six_months_to_one_year != '' && one_year_to_three_year != '' && three_year_to_six_year != '') {
        //     dailyUsageCreateFail(dispatch,navigate);

        // } else {


            firebase.database().ref(`/users/${currentUser.uid}/Timeline/DailyUsageStock/${uid}`)
            .set({ food_received,food_provided, food_remaining, nutritious_food,protien_food,oil,jaggery,chilli,egg,salt,grams,mustard_seeds,amalice_rich,green_gram,food_provided_today,Extra, DPickdobStock }).then(() => {
                console.log("savedddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
                dailyUsageStockCreateSuccess(dispatch, navigate)
            })
            .catch((error) => {
                console.log(error);
                // dailyUsageCreateFail(dispatch,navigate);
            });
        // }
    };
};









export const dailyUsageStockDelete = ({ uid }, navigate) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        Alert.alert(
            'Need Attention',
            'Deleted successfully',
            [
                {
                    text: 'Cancel', onPress: () =>
                        dispatch({
                           type: DailyUsagePeopleListItem
                        }),
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () =>
                        firebase.database().ref(`/users/${currentUser.uid}/Timeline/DailyUsageStock/${uid}`)
                            .remove()
                            .then(() => {
                                console.log("->I am don<-");
                                dispatch({
                                    type: DailyUsagePeopleListItem
                                });
                                navigate.navigate('DailyUsagePeopleTab');
                            })
                },
            ],
            { cancelable: false },
        );
    };
};