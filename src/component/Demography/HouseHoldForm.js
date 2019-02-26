import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, Picker } from 'react-native';
import { Input, Card, CardSection, Button } from '../Common';
import { Radio, Left, CardItem } from 'native-base';
import Datepicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { HouseholdUpdate, HouseholdCreate, HouseHoldFormCreate } from '../../actions';

class HouseHoldForm extends Component {
    static navigationOptions = {
        title: 'Registration',
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
            <View>
                <CardSection>
                    <Input
                        placeholder="Enter The HouseHold Name"
                        autoCorrect={false}
                        label="Name"
                        onChangeText={value => this.props.HouseholdUpdate({ name: 'HHName', value })}
                        value={this.props.HHName}
                    />
                </CardSection>
                <CardSection>
                    <CardItem>
                        <Text style={{ fontSize: 18 }}> Enter the Date</Text>
                    </CardItem>
                    <CardItem>
                        <Datepicker label="Enter the Date"
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            date={this.props.DOB}
                            onDateChange={value => this.props.HouseholdUpdate({ name: 'DOB', value })}
                        />
                    </CardItem>
                </CardSection>
                <CardSection>
                    <CardItem>
                        <Text style={{ fontSize: 18 }}>Gender</Text>
                    </CardItem>
                    <CardItem style={{ marginLeft: 12 }}>
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
                    </CardItem>
                </CardSection>
                <CardSection>
                    <Input
                        placeholder="Enter The Caste"
                        autoCorrect={false}
                        label="Caste"
                        onChangeText={value => this.props.HouseholdUpdate({ name: 'Caste', value })}
                        value={this.props.Caste}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        placeholder="Enter The Relationship"
                        autoCorrect={false}
                        label="Relationship"
                        onChangeText={value => this.props.HouseholdUpdate({ name: 'Relationship', value })}
                        value={this.props.Relationship}
                    />
                </CardSection>
                <CardSection>
                    <CardItem>
                        <Text style={{ fontSize: 18 }}>Status</Text>
                    </CardItem>
                    <CardItem>
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
                    </CardItem>
                </CardSection>
                <CardSection>
                    <Input
                        placeholder="Enter The Designation"
                        autoCorrect={false}
                        label="Designation"
                        onChangeText={value => this.props.HouseholdUpdate({ name: 'Designation', value })}
                        value={this.props.Designation}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        placeholder="Enter Phone Number"
                        autoCorrect={false}
                        label=" Phone Number"
                        onChangeText={value => this.props.HouseholdUpdate({ name: 'Phonenumber', value })}
                        value={this.props.Phonenumber}
                    />
                </CardSection>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { HHName, DOB, Caste, sex, Relationship, Status, Designation, Phonenumber, Address } = state.HouseHoldForm;
    return { HHName, DOB, Caste, sex, Relationship, Designation, Status, Phonenumber, Address };

}
export default connect(mapStateToProps, { HouseholdUpdate, HouseholdCreate })(HouseHoldForm);