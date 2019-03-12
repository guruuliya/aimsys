
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class DemographyDash extends Component {
    static navigationOptions = {
        title: 'Demography',
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
                            onPress={() => this.props.navigation.navigate('Householdtab')}
                        >
                            <Text style={styles.bottomitemInnerContent}>Registerd Household</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity
                            style={styles.bottomitemInner}
                            onPress={() => this.props.navigation.navigate('PregnancyTab')}
                        >
                            <Text style={styles.bottomitemInnerContent}>
                                {'Pregnancy\n Women'}
                            </Text>
                        </TouchableOpacity>
                    </View>


                    {/* complete  HouseHold survey */}



                    <View style={styles.bottomitem}>
                        <TouchableOpacity
                            style={styles.bottomitemInner}
                            onPress={() => this.props.navigation.navigate('DemographicReport')}
                        >
                            <Text style={styles.bottomitemInnerContent}>
                                {'HouseHold  Survey'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity
                            style={styles.bottomitemInner}
                            onPress={() => this.props.navigation.navigate('Picker')}
                        >
                            <Text style={styles.bottomitemInnerContent}>
                                {'Children \n 0-6 Years'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity
                            style={styles.bottomitemInner}
                            onPress={() => this.props.navigation.navigate('')}
                        >
                            <Text
                                style={styles.bottomitemInnerContent}
                            >
                                {'Lactating \n Mothers'}</Text>
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

export { DemographyDash };
