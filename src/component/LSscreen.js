/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';
// import { createAppContainer, createStackNavigator } from 'react-navigation';
import Splash from './Splash';
import Login from './Login';

class LSscreen extends Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen: 'Splash' };
    console.log('Start doing some tasks for about 3 seconds');
    setTimeout(() => {
      console.log('Done some tasks for about 3 seconds');
      this.setState({ currentScreen: 'Login' });
    }, 3000);
  }
  render() {
    const { currentScreen } = this.state;
    const mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />;
    return (mainScreen);
  }
}

export default LSscreen;
