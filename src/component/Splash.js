import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Splash extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(32, 53, 70)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    }
});
