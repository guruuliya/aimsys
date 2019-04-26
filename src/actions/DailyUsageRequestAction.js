import firebase from 'firebase';
import { Alert } from 'react-native';
import {
  DAILY_USAGE_STOCK_UPDATE,
  DAILY_USAGE_STOCK_CREATE,
  DAILY_USAGE_STOCK_CREATE_SUCCESS,
  DAILY_USAGE_STOCK_FETCH_SUCCESS
} from './types';

import DailyUsageRequestListItem from '../component/TimeLine/DailyUsageRequestListItem';

export const dailyUsageStockUpdate = ({ name, value }) => {
  return {
    type: DAILY_USAGE_STOCK_UPDATE,
    payload: { name, value }
  };
};

export const dailyUsageStockCreate = ({
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
  Oralrehydrationsalts,
  Chloroquine,
  Iron_and_folic_acid,
  Co_trimoxazole_tablet,
  Co_trimoxazole_syrup,
  Mebendazole,
  Benzyl_benzoate,
  Vitamin_A_solution,
  Aspirin,
  Sulphadimidine,
  Paracetamol,
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
          const Request_Status = 0;
          database
            .ref(`/users/${awcid}/Timeline/DailyUsageRequest`)
            .push({
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
              Oralrehydrationsalts,
              Chloroquine,
              Iron_and_folic_acid,
              Co_trimoxazole_tablet,
              Co_trimoxazole_syrup,
              Mebendazole,
              Benzyl_benzoate,
              Vitamin_A_solution,
              Aspirin,
              Sulphadimidine,
              Paracetamol,
              DPickdobStock,
              Request_Status
            })
            .then(() => {
              dispatch({
                type: DAILY_USAGE_STOCK_CREATE
              });
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
            .ref(`/users/${awcid}/Timeline/DailyUsageRequest`)
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
            .ref(`/users/${awcid}/Timeline/DailyUsageRequest/${uid}`)
            .set({
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
              DPickdobStock
            })
            .then(() => {
              dailyUsageStockCreateSuccess(dispatch, navigate);
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
                    type: DailyUsageRequestListItem
                  }),
                style: 'cancel'
              },
              {
                text: 'OK',
                onPress: () =>
                  database
                    .ref(`/users/${awcid}/Timeline/DailyUsageRequest/${uid}`)
                    .remove()
                    .then(() => {
                      dispatch({
                        type: DailyUsageRequestListItem
                      });
                      navigate.navigate('DailyUsageRequestTab');
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
