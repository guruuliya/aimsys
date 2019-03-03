/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Button } from 'native-base';
import firebase from 'firebase';

export default class Workerdashboard extends Component {
    static navigationOptions = {
        title: 'Home',
        headerRight: (
            <Button
                style={{ margin: 5, backgroundColor: '#395870', borderRadius: 10, width: 100 }}
                onPress={() => firebase.auth().signOut()}
            >
                <Text
                    style={{ color: '#ffffff', marginLeft: 25, fontWeight: 'bold' }}
                >
                    Logout
                </Text>
            </Button>
        ),
        headerStyle: {
            backgroundColor: '#203546',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.profilepic} />
                </View>
                <View style={styles.center} />
                <View style={styles.bottom}>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity
                            style={styles.bottomitemInner}
                            onPress={() =>
                                this.props.navigation.navigate('Timeline')}
                        >
                            <Text style={styles.bottomitemInnerContent}>Timeline</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity
                            style={styles.bottomitemInner}
                            onPress={() =>
                                this.props.navigation.navigate('DemographyDash')}
                        >
                            <Text style={styles.bottomitemInnerContent}>Demographics</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity
                            style={styles.bottomitemInner}
                            onPress={() => this.props.navigation.navigate('MaternalDash')}
                        >
                            <Text style={styles.bottomitemInnerContent}>
                                {'Maternal\n&\nChild Nutrition'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity
                            style={styles.bottomitemInner}
                            onPress={() => this.props.navigation.navigate('infrastructure')}
                        >
                            <Text style={styles.bottomitemInnerContent}>Infrastructure
                                </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        height: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#395870',
    },
    profilepic: {
        width: 140,
        height: 140,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#fff',
        backgroundColor: '#fff',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        backgroundColor: '#203546',
    },
    bottom: {
        height: '55%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 3,
    },
    bottomitem: {
        width: '50%',
        height: '50%',
        padding: 3,
    },
    bottomitemInner: {
        flex: 1,
        // borderRadius: 10,
        // borderWidth: 4,
        // borderColor: '#292929',
        backgroundColor: '#395870',
        alignItems: 'center',
        justifyContent: 'center',

    },
    bottomitemInnerContent: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        padding: 5,
    }

});
