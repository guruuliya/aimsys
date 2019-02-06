/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';

console.disableYellowBox = true;

class AuthLoading extends Component {
    static navigationOptions = {
        header: null
    };

    renderPage() {
        if (this.props.authentcated === true) {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
            });
            this.props.navigation.dispatch(resetAction);
        } else if (this.props.authentcated === false) {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Login' })],
            });
            this.props.navigation.dispatch(resetAction);
        } else {
            this.props.navigation.navigate('Splash');
        }
    }
    render() {
        this.renderPage();
        return (<View style={{ backgroundColor: 'rgb(32, 53, 70)', flex: 1 }} />);
    }
}
const mapStateToProps = (state) => {
    return ({ authentcated: state.auth.loggedIn });
};

export default connect(mapStateToProps)(AuthLoading);
