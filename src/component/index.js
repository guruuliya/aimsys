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
      //Timeline
      apiKey: "AIzaSyAhydrxQOI4d67ZLMxHUU2GSlP1wAr4RDU",
      authDomain: "fdemo-ec6e1.firebaseapp.com",
      databaseURL: "https://fdemo-ec6e1.firebaseio.com",
      projectId: "fdemo-ec6e1",
      storageBucket: "fdemo-ec6e1.appspot.com",
      messagingSenderId: "27194992388"
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
