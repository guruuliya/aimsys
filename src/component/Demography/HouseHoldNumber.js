import React, { Component } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Input, Card, CardSection, Button } from '../Common';
import { connect } from 'react-redux';
import { HouseholdUpdate, HouseholdCreate } from '../../actions';
import { withNavigation } from 'react-navigation';
class HouseHoldNumber extends Component {
    onButtonPress() {
        const { HHNumber, Address } = this.props;
        this.props.HouseholdCreate({ HHNumber, Address });
    }
    render() {
        return (
            <ScrollView>
                <View>
                    <Card>
                        <CardSection>
                            <Input
                                placeholder="Enter The HouseHold Number"
                                autoCorrect={false}
                                label="HouseHold Number"
                                value={this.props.HHNumber}
                                onChangeText={value => this.props.HouseholdUpdate({ name: 'HHNumber', value })}
                            />
                        </CardSection>
                        <CardSection>
                            <Input
                                placeholder="Enter The Address"
                                autoCorrect={false}
                                label=" Address"
                                value={this.props.Address}
                                onChangeText={value => this.props.HouseholdUpdate({ name: 'Address', value })}
                            />
                        </CardSection>
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
    const { HHNumber, Address } = state.HouseHoldForm;
    console.log(HHNumber, Address);
    return { HHNumber, Address };
}
export default connect(mapStateToProps, { HouseholdUpdate, HouseholdCreate })(withNavigation(HouseHoldNumber));

