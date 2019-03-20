import React, { Component } from 'react';
import { TextInput, View, Text, Picker, StyleSheet } from 'react-native';
import { Radio } from 'native-base';
import Datepicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { HouseholdUpdate, HouseholdCreate, HouseHoldFormCreate } from '../../actions';

class HouseHoldForm extends Component {
  
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
      state = {
        Designation: ''
    }
   
    calFun(text) {
        this.props.HouseholdUpdate({ name: 'Designation', value: text });
    }
    render() {
        return (
            <View style={styles.container}>
               <View style={styles.mainview}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Enter The HouseHold Name"
                        autoCorrect={false}
                        onChangeText={value => this.props.HouseholdUpdate({ name: 'HHName', value })}
                        value={this.props.HHName}
                    />
                </View>


                <View style={styles.inputContainer}>
                    <Text style={{ fontSize: 18 }}> Date of Birth</Text>
                    <Datepicker label="Date of Birth"
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        date={this.props.DOB}
                        onDateChange={value => this.props.HouseholdUpdate({ name: 'DOB', value })}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={{ fontSize: 18 }}>Gender</Text>
                    <Text style={{ padding: 2 }}>Male</Text>
                    <Radio
                        onPress={() => this.props.HouseholdUpdate({ name: 'sex', value: 'Male' })}
                        selected={this.props.sex === 'Male'}
                    />
                    <Text style={{ padding: 2 }}>Female</Text>
                    <Radio
                        onPress={() => this.props.HouseholdUpdate({ name: 'sex', value: 'Female' })}
                        selected={this.props.sex === 'Female'}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Enter The Caste"
                        autoCorrect={false}
                        label="Caste"
                        onChangeText={value => this.props.HouseholdUpdate({ name: 'Caste', value })}
                        value={this.props.Caste}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={{ fontSize: 18 }}>Status</Text>
                    <Text style={{ padding: 2 }}>Married</Text>
                    <Radio
                        onPress={() => this.props.HouseholdUpdate({ name: 'Status', value: 'Married' })}
                        selected={this.props.Status === 'Married'}
                    />
                    <Text style={{ padding: 2 }}>UnMarried</Text>
                    <Radio
                        onPress={() => this.props.HouseholdUpdate({ name: 'Status', value: 'UnMarried' })}
                        selected={this.props.Status === 'UnMarried'}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text> Ocupation</Text>
                    <Picker
                        selectedValue={this.props.Designation}
                        style={{ height: 50, width: 350 }}
                        onValueChange={this.calFun.bind(this)}>
                        <Picker.Item label="Agriculture" value="Agriculture" />
                        <Picker.Item label="HouseWife" value="HouseWife" />
                        <Picker.Item label="Teacher" value="Serculture" />
                        <Picker.Item label="Paultry" value="tyy" />


                    </Picker>
                </View>


                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Enter Phone Number"
                        autoCorrect={false}
                        label=" Phone Number"
                        onChangeText={value => this.props.HouseholdUpdate({ name: 'Phonenumber', value })}
                        value={this.props.Phonenumber}
                    />
                </View>
                </View>
            </View>
        );
    }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //
        // '#DCDCDC
        backgroundColor: '#275DAD',
    },

    mainview: {
        margin: 18
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        width: 350,
        height: 45,
        alignItems: 'center',
    },
    childtitle: {
        width: 350,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#275DAD',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputContainer: {

        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 350,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',

    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
        color: '#275DAD'
    },
    dateblock: {
        width: '40%',
        height: 45,
        marginLeft: 30,
        borderWidth: 0,
        // marginLeft: 16,
        // borderBottomColor: '#FFFFFF',
        flex: 1,
        color: '#355870',
        alignItems: 'center',
        justifyContent: 'center',
    },
    picker: {
        width: 200,
        borderColor: 'black',
        borderWidth: 1,
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    pickerItem: {
        color: '#1F1F1F'
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
    const { HHName, DOB, Caste, sex, Status, Designation, Phonenumber, Address } = state.HouseHoldForm;
    return { HHName, DOB, Caste, sex, Designation, Status, Phonenumber, Address };

}
export default connect(mapStateToProps, { HouseholdUpdate, HouseholdCreate })(HouseHoldForm);