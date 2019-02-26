import _ from 'lodash';
import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import PregnancyForm from './PregnancyForm';
import { pregnancyUpdate, PregnancySave, PregnancyDelete } from '../../actions/PregnancyActions';
import { Card, CardSection, Button, Confirm } from '../Common';
import { ScrollView } from 'react-native-gesture-handler';
class PregnancyEdit extends Component {
    state = { showModal: false };
    componentWillMount() {
        _.each(this.props.navigation.state.params.Pregnancy, (value, prop) => {
            this.props.pregnancyUpdate({ prop, value });
        });
    }
    onButtonPress() {
        const { PregnantName, PhoneNumber, NPregnant, LPerioddate, EDeliveryplace, FirstDose, SecondDose, DeliveryDate, option, Dplace, FirstWeightDate, Nchild, uid } = this.props;
        this.props.PregnancySave({ PregnantName, PhoneNumber, NPregnant, LPerioddate, EDeliveryplace, FirstDose, SecondDose, DeliveryDate, option, Dplace, FirstWeightDate, Nchild, uid: this.props.navigation.state.params.PregnancyFetch.uid });
        Alert.alert(
            'Oops !',
            'Updated Successfully',
            [
                { text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            ],
            { cancelable: false }
        )
    }
    onAccept() {
        const navigate = this.props.navigation;
        this.props.PregnancyDelete({ uid: this.props.navigation.state.params.PregnancyFetch.uid }, navigate);
        this.setState({ showModal: false });
    }
    onDecline() {
        this.setState({ showModal: false });
    }
    render() {
        return (
            <ScrollView>
                <Card>
                    <PregnancyForm />
                    <CardSection>
                        < Button onPress={this.onButtonPress.bind(this)}>
                            Save changes
                    </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>Delete</Button>
                    </CardSection>
                    <Confirm visible={this.state.showModal}
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
    const { PregnantName, PhoneNumber, NPregnant, LPerioddate, EDeliveryplace, FirstDose, SecondDose, DeliveryDate, option, Dplace, FirstWeightDate, Nchild, uid } = state.PregnancyForm;
    return { PregnantName, PhoneNumber, NPregnant, LPerioddate, EDeliveryplace, FirstDose, SecondDose, DeliveryDate, option, Dplace, FirstWeightDate, Nchild, uid };
};
export default connect(mapStateToProps, { PregnancySave, pregnancyUpdate, PregnancyDelete })(PregnancyEdit);