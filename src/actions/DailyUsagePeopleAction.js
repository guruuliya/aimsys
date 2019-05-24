import { Alert } from "react-native";
import firebase from "firebase";
import {
  DAILY_USAGE_UPDATE,
  DAILY_USAGE_CREATE_SUCCESS,
  DAILY_USAGE_FETCH_SUCCESS,
  DAILY_USAGE_SAVECHANGES_SUCCESS
} from "./types";

export const dailyUsageUpdate = ({ name, value }) => ({
  type: DAILY_USAGE_UPDATE,
  payload: { name, value }
});
const firebaseLooperpeople = snapshot => {
  let data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      date: childSnapshot.key
    });
  });
  return data;
};
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
  nutritious_food,
  protien_food,
  oil,
  jaggery,
  chilli,
  egg,
  salt,
  grams,
  mustard_seeds,
  rice,
  wheat,
  amalice_rich,
  green_gram,
  navigate
}) => {
  let awcid = 0;
  const database = firebase.database();
  const { currentUser } = firebase.auth();
  return dispatch => {
    database
      .ref("/assignedworkerstocenters")
      .orderByChild("anganwadiworkerid")
      .equalTo(currentUser.uid)
      .once("value", snapshot => {
        if (snapshot.val()) {
          const value = snapshot.val();
          const keys = Object.keys(value);
          for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            awcid = value[k].anganwadicenter_code;
          }
          console.log(this.props,"people action -----------------------");
          if (
            six_months_to_one_year === " " ||
            six_months_to_one_year === undefined ||
            (one_year_to_three_year === " " ||
              one_year_to_three_year === undefined) ||
            (three_year_to_six_year === " " ||
              three_year_to_six_year === undefined) ||
            (pw_prenatal === " " || pw_prenatal === undefined) ||
            (pw_postnatal === " " || pw_postnatal === undefined) ||
            (pw_3rdgrade === " " || pw_3rdgrade === undefined) ||
            (pw_4thgrade === " " || pw_4thgrade === undefined) ||
            (DPickdob === " " || DPickdob === undefined) ||
            (total1 === " " || total1 === undefined) ||
            (total2 === " " || total2 === undefined) ||
            (totalfinal === 0 || totalfinal === undefined) ||
            (nutritious_food === 0 || nutritious_food === undefined) ||
            (protien_food === 0 || protien_food === undefined) ||
            (oil === 0 || oil === undefined) ||
            (jaggery === 0 || jaggery === undefined) ||
            (chilli === 0 || chilli === undefined) ||
            (egg === 0 || egg === undefined) ||
            (salt === 0 || salt === undefined) ||
            (grams === 0 || grams === undefined) ||
            (mustard_seeds === 0 || mustard_seeds === undefined) ||
            (rice === 0 || rice === undefined) ||
            (wheat === 0 || wheat === undefined) ||
            (amalice_rich === 0 || amalice_rich === undefined) ||
            (green_gram === 0 || green_gram === undefined)
          ) {
            Alert.alert("Please enter all the details");
          } else {
            var d = new Date(),
              month = "" + (d.getMonth() + 1),
              day = "" + d.getDate(),
              year = d.getFullYear();
            var d2 = new Date(),
              month1 = "" + (d2.getMonth() + 1),
              dayminus1 = "" + (d2.getDate() - 1),
              year1 = d2.getFullYear();
            var d3 = new Date(),
              month3 = "" + (d3.getMonth() + 1),
              dayminus2 = "" + (d3.getDate() - 2),
              year3 = d3.getFullYear();

            if (month.length < 2) month = "0" + month;
            if (month1.length < 2) month1 = "0" + month1;
            if (month3.length < 2) month3 = "0" + month3;

            if (day.length < 2) day = "0" + day;
            if (dayminus1.length < 2) dayminus1 = "0" + dayminus1;
            if (dayminus2.length < 2) dayminus2 = "0" + dayminus2;

            const todaysdate = [year, month, day].join("-");
            const yesterdaydate = [year1, month1, dayminus1].join("-");
            const daybeforeyesterdaydate = [year3, month3, dayminus2].join("-");

            //console.log(todaysdate, yesterdaydate, daybeforeyesterdaydate);

            database
              .ref(`/users/${awcid}/Timeline/DailyUsageStock`)
              .once("value", snapshot4 => {
                console.log(snapshot4.val());
                if (snapshot4.val()) {
                  const data3 = firebaseLooperpeople(snapshot4);
                  for (let i = 0; i < data3.length; i++) {
                    //console.log(todaysdate, yesterdaydate, daybeforeyesterdaydate);
                    if (data3[i].date == yesterdaydate) {
                      // console.log(data3[i]);
                      const nutritious_food_fromstock =
                        data3[i].nutritious_food;
                      const protien_food_fromstock = data3[i].protien_food;
                      const oil_fromstock = data3[i].oil;
                      const jaggery_fromstock = data3[i].jaggery;
                      const chilli_fromstock = data3[i].chilli;
                      const egg_fromstock = data3[i].egg;
                      const salt_fromstock = data3[i].salt;
                      const grams_fromstock = data3[i].grams;
                      const mustard_seeds_fromstock = data3[i].mustard_seeds;
                      const rice_fromstock = data3[i].rice;
                      const wheat_fromstock = data3[i].wheat;
                      const amalice_rich_fromstock = data3[i].amalice_rich;
                      const green_gram_fromstock = data3[i].green_gram;

                      database
                        .ref(
                          `/users/${awcid}/Timeline/DailyUsagePeople/${DPickdob}`
                        )
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
                          totalfinal,
                          nutritious_food,
                          protien_food,
                          oil,
                          jaggery,
                          chilli,
                          egg,
                          salt,
                          grams,
                          mustard_seeds,
                          rice,
                          wheat,
                          amalice_rich,
                          green_gram
                        });

                      const DPickdobStock = DPickdob;
                      const newstock_nutritious_food =
                        parseFloat(nutritious_food_fromstock) -
                        parseFloat(nutritious_food);
                      const newstock_protien_food =
                        parseFloat(protien_food_fromstock) -
                        parseFloat(protien_food);

                      const newstock_oil =
                        parseFloat(oil_fromstock) - parseFloat(oil);
                      const newstock_jaggery =
                        parseFloat(jaggery_fromstock) - parseFloat(jaggery);

                      const newstock_chilli =
                        parseFloat(chilli_fromstock) - parseFloat(chilli);
                      const newstock_egg =
                        parseFloat(egg_fromstock) - parseFloat(egg);

                      const newstock_salt =
                        parseFloat(salt_fromstock) - parseFloat(salt);
                      const newstock_grams =
                        parseFloat(grams_fromstock) - parseFloat(grams);

                      const newstock_mustard_seeds =
                        parseFloat(mustard_seeds_fromstock) -
                        parseFloat(mustard_seeds);
                      const newstock_rice =
                        parseFloat(rice_fromstock) - parseFloat(rice);

                      const newstock_wheat =
                        parseFloat(wheat_fromstock) - parseFloat(wheat);
                      const newstock_amalice_rich =
                        parseFloat(amalice_rich_fromstock) -
                        parseFloat(amalice_rich);

                      const newstock_green_gram =
                        parseFloat(green_gram_fromstock) -
                        parseFloat(green_gram);

                      var obj = {
                        nutritious_food: newstock_nutritious_food,
                        protien_food: newstock_protien_food,
                        oil: newstock_oil,
                        jaggery: newstock_jaggery,
                        chilli: newstock_chilli,
                        egg: newstock_egg,
                        salt: newstock_salt,
                        grams: newstock_grams,
                        mustard_seeds: newstock_mustard_seeds,
                        rice: newstock_rice,
                        wheat: newstock_wheat,
                        amalice_rich: newstock_amalice_rich,
                        green_gram: newstock_green_gram,
                        DPickdobStock: DPickdobStock
                      };
                      database
                        .ref(
                          `/users/${awcid}/Timeline/DailyUsageStock/${DPickdobStock}`
                        )
                        .set(obj)
                        .then(() => {
                          console.log("DAILY USAGE CREATE SUCCESS");
                          dispatch({
                            type: DAILY_USAGE_CREATE_SUCCESS
                          });
                          dailyUsageCreateSuccess(dispatch, navigate);
                        })
                        .catch(error => {
                          console.log(error);
                        });
                    }
                  }
                }
              });
          }
        } else {
          console.log("no user data");
        }
      });
  };
};

export const dailyUsageCreateSuccess = (dispatch, navigate) => {
  dispatch({
    type: DAILY_USAGE_CREATE_SUCCESS,
    payload: ""
  });
  navigate.navigate("ResultMessage", { paramName: "dailyUsageCreateSuccess" });
};

export const dailyUsageFetch = () => {
  let awcid = 0;
  const database = firebase.database();
  const { currentUser } = firebase.auth();
  return dispatch => {
    database
      .ref("/assignedworkerstocenters")
      .orderByChild("anganwadiworkerid")
      .equalTo(currentUser.uid)
      .once("value", snapshot => {
        if (snapshot.val()) {
          const value = snapshot.val();
          const keys = Object.keys(value);
          for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            awcid = value[k].anganwadicenter_code;
          }

          database
            .ref(`/users/${awcid}/Timeline/DailyUsagePeople`)
            .on("value", snapshot1 => {
              dispatch({
                type: DAILY_USAGE_FETCH_SUCCESS,
                payload: snapshot1.val()
              });
            });
        } else {
          console.log("no user data");
        }
      });
  };
};

export const dailyUsageSaveChangeseSuccess = (dispatch, navigate) => {
  dispatch({
    type: DAILY_USAGE_SAVECHANGES_SUCCESS,
    payload: ""
  });
  navigate.navigate("ResultMessage", {
    paramName: "dailyUsagesavechangesSuccess"
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
      .ref("/assignedworkerstocenters")
      .orderByChild("anganwadiworkerid")
      .equalTo(currentUser.uid)
      .once("value", snapshot => {
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
          console.log("no user data");
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
      .ref("/assignedworkerstocenters")
      .orderByChild("anganwadiworkerid")
      .equalTo(currentUser.uid)
      .once("value", snapshot => {
        if (snapshot.val()) {
          const value = snapshot.val();
          const keys = Object.keys(value);
          for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            awcid = value[k].anganwadicenter_code;
          }
          Alert.alert(
            "Need Attention",
            "Do you Want to Delete..",
            [
              {
                text: "Cancel",
                onPress: () =>
                  dispatch({
                    type: DAILY_USAGE_FETCH_SUCCESS
                  }),
                style: "cancel"
              },
              {
                text: "OK",
                onPress: () =>
                  database
                    .ref(`/users/${awcid}/Timeline/DailyUsagePeople/${uid}`)
                    .remove()
                    .then(() => {
                      dispatch({
                        type: DAILY_USAGE_FETCH_SUCCESS
                      });
                      navigate.navigate("DailyUsagePeopleTab");
                    })
              }
            ],
            { cancelable: false }
          );
        } else {
          console.log("no user data");
        }
      });
  };
};
