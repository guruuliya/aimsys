import firebase from 'firebase';
import { Alert } from 'react-native';
import {
  DAILY_USAGE_STOCK_UPDATE,
  DAILY_USAGE_STOCK_CREATE,
  DAILY_USAGE_STOCK_CREATE_SUCCESS,
  DAILY_USAGE_STOCK_FETCH_SUCCESS
} from './types';
import DailyUsagePeopleListItem from '../component/TimeLine/DailyUsagePeopleListItem';

export const dailyUsageStockUpdate = ({ name, value }) => {
  return {
    type: DAILY_USAGE_STOCK_UPDATE,
    payload: { name, value }
  };
};

export const dailyUsageStockCreate = ({
  food_received,
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
  DPickdobStock,
  navigate
}) => {
  let awcid = 0;
  const database = firebase.database();
  const { currentUser } = firebase.auth();
  return dispatch => {
    database
      .ref('/assignedworkerstocenters')
      .orderByChild('anganwadiworkerid')
      .equalTo(currentUser.uid)
      .once('value', snapshot => {
        if (snapshot.val()) {
          const value = snapshot.val();
          const keys = Object.keys(value);
          for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            awcid = value[k].anganwadicenter_code;
          }
          database
            .ref(`/users/${awcid}/Timeline/DailyUsageStock`)
            .push({
              food_received,
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
              DPickdobStock
            })
            .then(() => {
              dispatch({
                type: DAILY_USAGE_STOCK_CREATE
              });
              dailyUsageStockCreateSuccess(dispatch, navigate);
            })
            .catch(error => {
              console.log(error);
              // dailyUsageCreateFail(dispatch,navigate);
            });
        } else {
          console.log('no user data');
        }
      });
  };
};

export const dailyUsageStockCreateSuccess = (dispatch, navigate) => {
  dispatch({
    type: DAILY_USAGE_STOCK_CREATE_SUCCESS,
    payload: ''
  });
  navigate.navigate('ResultMessage', { paramName: 'dailyUsageCreateSuccess' });
};

export const dailyUsageStockFetch = () => {
  let awcid = 0;
  const database = firebase.database();
  const { currentUser } = firebase.auth();
  return dispatch => {
    database
      .ref('/assignedworkerstocenters')
      .orderByChild('anganwadiworkerid')
      .equalTo(currentUser.uid)
      .once('value', snapshot => {
        if (snapshot.val()) {
          const value = snapshot.val();
          const keys = Object.keys(value);
          for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            awcid = value[k].anganwadicenter_code;
          }
          database
            .ref(`/users/${awcid}/Timeline/DailyUsageStock`)
            .on('value', snapshot1 => {
              dispatch({
                type: DAILY_USAGE_STOCK_FETCH_SUCCESS,
                payload: snapshot1.val()
              });
            });
        } else {
          console.log('no user data');
        }
      });
  };
};

export const dailyUsageStockSaveChanges = ({
  food_received,
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
  DPickdobStock,
  uid,
  navigate
}) => {
  let awcid = 0;
  const database = firebase.database();
  const { currentUser } = firebase.auth();
  return dispatch => {
    database
      .ref('/assignedworkerstocenters')
      .orderByChild('anganwadiworkerid')
      .equalTo(currentUser.uid)
      .once('value', snapshot => {
        if (snapshot.val()) {
          const value = snapshot.val();
          const keys = Object.keys(value);
          for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            awcid = value[k].anganwadicenter_code;
          }
          database
            .ref(`/users/${awcid}/Timeline/DailyUsageStock/${uid}`)
            .set({
              food_received,
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
              DPickdobStock
            })
            .then(() => {
              dailyUsageStockCreateSuccess(dispatch, navigate);
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          console.log('no user data');
        }
      });
  };
};

export const dailyUsageStockDelete = ({ uid }, navigate) => {
  let awcid = 0;
  const database = firebase.database();
  const { currentUser } = firebase.auth();
  return dispatch => {
    database
      .ref('/assignedworkerstocenters')
      .orderByChild('anganwadiworkerid')
      .equalTo(currentUser.uid)
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
            'Deleted successfully',
            [
              {
                text: 'Cancel',
                onPress: () =>
                  dispatch({
                    type: DailyUsagePeopleListItem
                  }),
                style: 'cancel'
              },
              {
                text: 'OK',
                onPress: () =>
                  database
                    .ref(`/users/${awcid}/Timeline/DailyUsageStock/${uid}`)
                    .remove()
                    .then(() => {
                      dispatch({
                        type: DailyUsagePeopleListItem
                      });
                      navigate.navigate('DailyUsageStockTab');
                    })
              }
            ],
            { cancelable: false }
          );
        } else {
          console.log('no user data');
        }
      });
  };
};
