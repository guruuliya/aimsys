/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class Workerdashboard extends Component {
    static navigationOptions = {
        title: 'Home',
        headerLeft: null,
        headerStyle: {
            backgroundColor: '#f7c744',
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
                        <TouchableOpacity style={styles.bottomitemInner} >
                            <View style={styles.bottomitemInner}>
                                <Text style={styles.bottomitemInnerContent}>Timeline</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} >
                            <View style={styles.bottomitemInner}>
                                <Text style={styles.bottomitemInnerContent}>Demographics</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} >
                            <View style={styles.bottomitemInner}>
                                <Text style={styles.bottomitemInnerContent}>
                                    {'Maternal\n&\nChild Nutrition'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} >
                            <View style={styles.bottomitemInner}>
                                <Text style={styles.bottomitemInnerContent}>Infrastructure</Text>
                            </View>
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
        // fontFamily:'verdana',
        //   fontWeight: 'bold',
        textAlign: 'center',
        padding: 5,
    }

});
