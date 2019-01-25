/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


class InfrastructureDash extends Component {
    static navigationOptions = {
        title: 'Infrastructure',
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
                <View style={styles.bottom}>
                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} >
                            <Text
                                style={styles.bottomitemInnerContent}
                                onPress={() => this.props.navigation.navigate('buildingPicture')}
                            >
                                Upload Picture</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} >
                            <Text
                                style={styles.bottomitemInnerContent}
                                onPress={() => this.props.navigation.navigate('buildingStatus')}
                            >
                                {'Building \n Status'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} >
                            <Text
                                style={styles.bottomitemInnerContent}
                                onPress={() => this.props.navigation.navigate('Facility')}
                            >
                                Facility</Text>
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
        padding: 3,
    },
    bottomitem: {
        width: '50%',
        height: '50%',
        padding: 3,
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

export { InfrastructureDash };
