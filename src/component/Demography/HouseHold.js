import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, CardSection, Button } from '../Common';
import { connect } from 'react-redux';
import { HouseholdUpdate, HouseHoldFormCreate } from '../../actions';
import HouseHoldForm from './HouseHoldForm';

class HouseHold extends Component {
    static navigationOptions = {
        title: 'Member Registration',
        headerStyle: {
            backgroundColor: '#203546',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    componentWillMount() {
        console.log('value is form ', this.props.navigation.state.params.HouseHold);
        const { HHNumber } = this.props.navigation.state.params.HouseHold;
        console.log('here', HHNumber);
    }


    onButtonPress() {
        const { HHNumber, uid } = this.props.navigation.state.params.HouseHold;
        console.log('printed uid here', uid);
        const { HHName, DOB, Caste, sex, Status, Designation, Phonenumber, Address } = this.props;
        this.props.HouseHoldFormCreate({ HHNumber, HHName, DOB, Caste, sex, Status, Designation, Phonenumber, Address, uid });
    }
    render() {
        return (
            <ScrollView>
                <View>
                    <Card>
                        <HouseHoldForm {...this.props} />
                        <CardSection>
                            <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.onButtonPress.bind(this)}>
                                <Text style={styles.loginText}>Add</Text>
                            </TouchableOpacity>
                        </CardSection>
                    </Card>
                </View>
            </ScrollView>
        );
    }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 300,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',

        shadowColor: '#808080',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginRight: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 400,
        borderRadius: 30,
        backgroundColor: 'transparent'
    },
    btnByRegister: {
        height: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        width: 300,
        backgroundColor: 'transparent'
    },
    loginButton: {
        backgroundColor: '#00b5ec',

        shadowColor: '#808080',
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    },
    loginText: {
        color: 'white',
    },
    bgImage: {
        flex: 1,
        resizeMode,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    textByRegister: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',

        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    }
});


const mapStateToProps = (state) => {
    const { HHName, DOB, Caste, sex, Relationship, Status, Designation, Phonenumber, Address, option } = state.HouseHoldForm;
    console.log(Phonenumber);
    return { HHName, DOB, Caste, sex, Relationship, Designation, Status, Phonenumber, Address, option }
}
export default connect(mapStateToProps, { HouseholdUpdate, HouseHoldFormCreate })(HouseHold);
