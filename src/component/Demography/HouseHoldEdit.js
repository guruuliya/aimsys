import _ from 'lodash';
import React, { Component } from 'react';
import { View, Alert, Text } from 'react-native';
import { Input, Card, CardSection, Button, Confirm } from '../Common';
import { connect } from 'react-redux';
import { HouseholdUpdate, HouseholdSave, HouseholdDelete } from '../../actions/HouseholdActions';
import HouseHoldForm from './HouseHoldForm';
import { ScrollView } from 'react-native-gesture-handler';

class HouseHoldEdit extends Component {
    static navigationOptions = {
        title: 'Household Information',
        headerStyle: {
            backgroundColor: '#355870',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    state = { showModal: false };
    componentWillMount() {
        _.each(this.props.navigation.state.params.Houseno, (value, name) => {
            this.props.HouseholdUpdate({ name, value });
        });
    }

    onButtonPress() {
        const { HHNumber, HHName, DOB, Caste, sex, Relationship, LiteracyRate, Status, Designation, Phonenumber, Address, option, Income, Disease1, Disease2, Disease3 } = this.props;
        this.props.HouseholdSave({ HHNumber, HHName, DOB, Caste, sex, Relationship, LiteracyRate, Status, Designation, Phonenumber, Address, option, Income, Disease1, Disease2, Disease3 }, this.props.navigation.state.params.Houseno.uid, HHNumber);
        Alert.alert(
            'Yes !',
            'Updated Successfully',
            [
                { text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            ],
            {
                cancelable: false
            })
    }
    onAccept() {
        const { HHNumber } = this.props;
        const navigate = this.props.navigation;
        this.props.HouseholdDelete(this.props.navigation.state.params.Houseno.uid, navigate, HHNumber);
        this.setState({ showModal: false });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
  return (
            <ScrollView>
                <Text>{"\n"}</Text>
                <Card>
                    <HouseHoldForm />
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Save
                    </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>Delete</Button>
                    </CardSection>
                    <Confirm 
                    visible={this.state.showModal}
                        onAccept={this.onAccept.bind(this)}
                        onDecline={this.onDecline.bind(this)}
                    >
                        Are you sure you want to delete this?
                </Confirm>
                </Card>
            </ScrollView>
        );
    }
}
const mapStateToProps = (state) => {
    const { HHNumber, HHName, DOB, Caste, sex, Relationship, LiteracyRate, Status, Designation, Phonenumber, Address, option, Income, Disease1, Disease2, Disease3, uid } = state.HouseHoldForm;
    return { HHNumber, HHName, DOB, Caste, sex, Relationship, LiteracyRate, Designation, Status, Phonenumber, Address, option, Income, Disease1, Disease2, Disease3, uid };
}
export default connect(mapStateToProps, { HouseholdSave, HouseholdUpdate, HouseholdDelete })(HouseHoldEdit);