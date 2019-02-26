import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { pregnancyUpdate, PregnancyCreate } from '../../actions';
import {  Card, CardSection, Button } from '../Common';
import PregnancyForm from './PregnancyForm';

class Pregnancy extends Component {
    static navigationOptions = {
        title: 'Demography',
        headerStyle: {
            backgroundColor: '#203546',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    onButtonPress() {
        console.log('clicked');
        const {HHNumber, PregnantName,NPregnant, LPerioddate, EDeliveryplace, FirstDose, SecondDose, DeliveryDate, option, Dplace, FirstWeightDate, Nchild } = this.props;
        this.props.PregnancyCreate({HHNumber, PregnantName,NPregnant, LPerioddate, EDeliveryplace, FirstDose, SecondDose, DeliveryDate, option, Dplace, FirstWeightDate, Nchild });

    }
    render() {

        return (
            <ScrollView>
                <View>
                    <Card>
                        <PregnancyForm {...this.props} />
                        <CardSection>
                            <Button children="Add" onPress={this.onButtonPress.bind(this)} />
                            <Button children="update" />
                        </CardSection>

                    </Card>
                </View>
            </ScrollView>
        );
    }
}



const mapStateToProps = (state) => {
    const {HHNumber, PregnantName, PhoneNumber, NPregnant, LPerioddate, EDeliveryplace, option, FirstDose, SecondDose, DeliveryDate, Dplace, FirstWeightDate, Nchild } = state.PregnancyForm;
    return {HHNumber, PregnantName, PhoneNumber, NPregnant, LPerioddate, EDeliveryplace, option,  FirstDose, SecondDose, DeliveryDate, Dplace, FirstWeightDate, Nchild };
};
export default connect(mapStateToProps, { pregnancyUpdate, PregnancyCreate })(Pregnancy); 