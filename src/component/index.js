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
      apiKey: 'AIzaSyAZnJ33pGi_YoONvwh8lH0PHc6fOYnbjoQ',
      authDomain: 'authentication-ac30e.firebaseapp.com',
      databaseURL: 'https://authentication-ac30e.firebaseio.com',
      projectId: 'authentication-ac30e',
      storageBucket: 'authentication-ac30e.appspot.com',
      messagingSenderId: '882138772244'
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
