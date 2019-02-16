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
      apiKey: "AIzaSyBejotFw8RsLC-h-MaN2EbAYGRA7LhfyA4",
      authDomain: "aimsys-5c66f.firebaseapp.com",
      databaseURL: "https://aimsys-5c66f.firebaseio.com",
      projectId: "aimsys-5c66f",
      storageBucket: "aimsys-5c66f.appspot.com",
      messagingSenderId: "727865260147"
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
