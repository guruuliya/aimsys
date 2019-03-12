import React, { Component } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, CardSection, Button } from '../Common';
import { connect } from 'react-redux';
import { HouseholdUpdate, HouseHoldFormCreate } from '../../actions';
import HouseHoldForm from './HouseHoldForm';

class HouseHold extends Component {
    componentWillMount() {
        console.log('value is form ', this.props.navigation.state.params.HouseHold);
        const { HHNumber } = this.props.navigation.state.params.HouseHold;
        console.log('here', HHNumber);
    }


    onButtonPress() {
        const { HHNumber, uid } = this.props.navigation.state.params.HouseHold;
        console.log('printed uid here', uid);
        const { HHName, DOB, Caste, sex, Relationship, Status, Designation, Phonenumber, Address } = this.props;
        this.props.HouseHoldFormCreate({ HHNumber, HHName, DOB, Caste, sex, Status, Relationship, Designation, Phonenumber, Address, uid });
    }
    render() {
        return (
            <ScrollView>
                <View>
                    <Card>
                        <HouseHoldForm {...this.props} />
                        <CardSection>
                            <Button children="Add" onPress={this.onButtonPress.bind(this)} />
                        </CardSection>
                    </Card>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    const { HHName, DOB, Caste, sex, Relationship, Status, Designation, Phonenumber, Address, option } = state.HouseHoldForm;
    console.log(Phonenumber);
    return { HHName, DOB, Caste, sex, Relationship, Designation, Status, Phonenumber, Address, option }
}
export default connect(mapStateToProps, { HouseholdUpdate, HouseHoldFormCreate })(HouseHold);
