
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, CardSection, Button } from '../Common';
import { connect } from 'react-redux'
import ChildRegistrationForm from './ChildRegistrationForm';
import { childUpdate, childCreate, deliveryUpdate } from '../../actions/ChildAction';

class ChildRegistration extends Component {
    onButtonPress() {
        const { HNumber, CName, CMotherId, status, option, health, babytype, DPickdob, DPickregdate, placedied } = this.props;
        if (HNumber === undefined || CName === undefined || CMotherId === undefined || status === undefined || option === undefined || health === undefined || babytype === undefined || DPickdob === undefined || DPickregdate === undefined || placedied === undefined) {
            Alert.alert(
                'Enter all the details',
                'record not inserted');
        } 
        if (status === 'Born') {
            console.log('data here', CMotherId);
            this.props.childCreate({ HNumber, CName, CMotherId, status, health, option, babytype, DPickdob, DPickregdate });
            console.log('data here', CMotherId);
            Alert.alert(

                'Inserted Successfully',

            );
        } else {
            this.props.deliveryUpdate({ status, placedied }, CMotherId);
            Alert.alert(

                'Inserted Successfully',

            );
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container} style={{ backgroundColor: '#355870' }}>
                    <Card>
                        <ChildRegistrationForm {...this.props} edit='no' />

                        <CardSection>
                            <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.onButtonPress.bind(this)}>
                                <Text style={styles.loginText}>ADD</Text>
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
        width: 395,
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

    const { HNumber, CName, CMotherId, status, option, health, babytype, DPickdob, DPickregdate, placedied } = state.child;
    console.log('registration inside tyyy mother id form ', CMotherId);
    return { HNumber, CName, CMotherId, status, option, health, babytype, DPickdob, DPickregdate, placedied };
};

export default connect(mapStateToProps, {
    childUpdate, childCreate, deliveryUpdate
})(ChildRegistration);
