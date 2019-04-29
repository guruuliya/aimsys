import { Alert } from 'react-native';
import firebase from 'firebase';
import {
  DAILY_USAGE_UPDATE,
  DAILY_USAGE_CREATE_SUCCESS,
  DAILY_USAGE_FETCH_SUCCESS,
  DAILY_USAGE_SAVECHANGES_SUCCESS
} from './types';


export const dailyUsageUpdate = ({ name, value }) => ({
  type: DAILY_USAGE_UPDATE,
  payload: { name, value }
});

export const dailyUsageCreate = ({
  six_months_to_one_year,
  one_year_to_three_year,
  three_year_to_six_year,
  pw_prenatal,
  pw_postnatal,
  pw_3rdgrade,
  pw_4thgrade,
  DPickdob,
  total1,
  total2,
  totalfinal,
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
            .ref(`/users/${awcid}/Timeline/DailyUsagePeople`)
            .push({
              six_months_to_one_year,
              one_year_to_three_year,
              three_year_to_six_year,
              pw_prenatal,
              pw_postnatal,
              pw_3rdgrade,
              pw_4thgrade,
              DPickdob,
              total1,
              total2,
              totalfinal
            })
            .then(() => {
              dispatch({
                type: DAILY_USAGE_CREATE_SUCCESS
              });
              dailyUsageCreateSuccess(dispatch, navigate);
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

export const dailyUsageCreateSuccess = (dispatch, navigate) => {
  dispatch({
    type: DAILY_USAGE_CREATE_SUCCESS,
    payload: ''
  });
  navigate.navigate('ResultMessage', { paramName: 'dailyUsageCreateSuccess' });
};

export const dailyUsageFetch = () => {
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
            .ref(`/users/${awcid}/Timeline/DailyUsagePeople`)
            .on('value', snapshot1 => {
              dispatch({
                type: DAILY_USAGE_FETCH_SUCCESS,
                payload: snapshot1.val()
              });
            });
        } else {
          console.log('no user data');
        }
      });
  };
};

export const dailyUsageSaveChangeseSuccess = (dispatch, navigate) => {
  dispatch({
    type: DAILY_USAGE_SAVECHANGES_SUCCESS,
    payload: ''
  });
  navigate.navigate('ResultMessage', {
    paramName: 'dailyUsagesavechangesSuccess'
  });
};

export const dailyUsageSaveChanges = ({
  six_months_to_one_year,
  one_year_to_three_year,
  three_year_to_six_year,
  pw_prenatal,
  pw_postnatal,
  pw_3rdgrade,
  pw_4thgrade,
  DPickdob,
  total1,
  total2,
  totalfinal,
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
            .ref(`/users/${awcid}/Timeline/DailyUsagePeople/${uid}`)
            .set({
              six_months_to_one_year,
              one_year_to_three_year,
              three_year_to_six_year,
              pw_prenatal,
              pw_postnatal,
              pw_3rdgrade,
              pw_4thgrade,
              DPickdob,
              total1,
              total2,
              totalfinal
            })
            .then(() => {
              dailyUsageCreateSuccess(dispatch, navigate);
            });
        } else {
          console.log('no user data');
        }
      });
  };
};

export const dailyUsageDelete = ({ uid }, navigate) => {
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
            'Do you Want to Delete..',
            [
              {
                text: 'Cancel',
                onPress: () =>
                  dispatch({
                    type: DAILY_USAGE_FETCH_SUCCESS
                  }),
                style: 'cancel'
              },
              {
                text: 'OK',
                onPress: () =>
                  database
                    .ref(`/users/${awcid}/Timeline/DailyUsagePeople/${uid}`)
                    .remove()
                    .then(() => {
                      dispatch({
                        type: DAILY_USAGE_FETCH_SUCCESS
                      });
                      navigate.navigate('DailyUsagePeopleTab');
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
