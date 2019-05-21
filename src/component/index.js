/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import Navigator from './Navigator';
import { fetchUser } from '../actions';

class MainApp extends Component {
  componentWillMount() {
    const config = {
<<<<<<< HEAD
      //Timeline
      apiKey:"AIzaSyAM41SBy8oD2QwG3QsD61DIIguAVwSlYik",
      authDomain:"timelinedemo-d0193.firebaseapp.com",
      databaseURL:"https://timelinedemo-d0193.firebaseio.com",
      projectId:"timelinedemo-d0193",
      storageBucket:"timelinedemo-d0193.appspot.com",
      messagingSenderId:"962657185492"
=======
      apiKey: "AIzaSyAPb6cbba3ui5juo7XyRZk742FS9jdT56s",
    authDomain: "aimsys-67e99.firebaseapp.com",
    databaseURL: "https://aimsys-67e99.firebaseio.com",
    projectId: "aimsys-67e99",
    storageBucket: "aimsys-67e99.appspot.com",
    messagingSenderId: "524773124768",
    appId: "1:524773124768:web:2542f27f0f2459a4"
>>>>>>> pr/36
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    this.props.fetchUser();
  }

  render() {
    return (
      <Navigator />
    );
  }
}
export default connect(null, { fetchUser })(MainApp);
