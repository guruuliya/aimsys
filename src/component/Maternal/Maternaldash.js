/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class MaternalDash extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#355870',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bottom}>
                    <View style={styles.bottomitem}>
                        <TouchableOpacity
                            style={styles.bottomitemInner}
                            onPress={() => this.props.navigation.navigate('ChildTab')}
                        >
                            <Text style={styles.bottomitemInnerContent}>{'Child \n Registration'}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity
                            style={styles.bottomitemInner}
                            onPress={() => this.props.navigation.navigate('InjectionRecords')}
                        >
                            <Text style={styles.bottomitemInnerContent}>
                                {'Injection \n Records'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity
                            style={styles.bottomitemInner}
                            onPress={() => this.props.navigation.navigate('ChildNutrition')}
                        >
                            <Text style={styles.bottomitemInnerContent}>
                                {'Child \n Nutrition'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity
                            style={styles.bottomitemInner}
                            onPress={() => this.props.navigation.navigate('FoodNutri')}
                        >
                            <Text style={styles.bottomitemInnerContent}> {'Food \n Details'}</Text>
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

    bottom: {
        height: '50%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    },
    bottomitem: {
        width: '50%',
        height: '50%',
        padding: 5,
    },
    bottomitemInner: {
        flex: 1,
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

export { MaternalDash };
