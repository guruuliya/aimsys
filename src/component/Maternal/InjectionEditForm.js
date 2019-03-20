import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import InjectionForm from './InjectionForm';
import { InjectionUpdate, InjectionSave, InjectionDelete } from '../../actions/InjectionAction';
import { Card, CardSection, Button, Confirm } from '../Common';
import { ScrollView } from 'react-native-gesture-handler';

class InjectionEditForm extends Component {
    state = { showModal: false };
    static navigationOptions = {
        title: 'Child Update',
        headerStyle: {
            backgroundColor: '#203546',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    componentWillMount() {
        _.each(this.props.navigation.state.params.injection, (value, name) => {

            console.log(name);
            console.log(value);
            this.props.InjectionUpdate({ name, value });
        });
    }

    onButtonPress() {
        // const { HNumber, CName, DPickdob, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2, complete } = this.props;

        // this.props.InjectionSave({ HNumber, CName, DPickdob, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2, complete, uid: this.props.navigation.state.params.injection.uid });
        const { HNumber, CName, update, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2 } = this.props;
        console.log('update', update);
        if (update === 'bcg') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, BCG);

        } else if (update === 'polio') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, poliodate);

        }
        else if (update === 'hepatitis') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, hepa);

        }
        else if (update === 'dpt1') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, DPT1);

        }
        else if (update === 'hepatitis1') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, hepa1);

        }
        else if (update === 'opv1') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, OPV1);

        }
        else if (update === 'dpt2') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, DPT2);

        }
        else if (update === 'hepatitis2') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, hepa2);

        }
        else if (update === 'opv2') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, OPV2);

        }
        else if (update === 'dpt3') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, DPT3);

        }
        else if (update === 'hepatitis3') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, hepa3);

        }
        else if (update === 'opv3') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, OPV3);

        }
        else if (update === 'dadara1') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, dadara1);

        }
        else if (update === 'nutrition1') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, nutri1);

        }
        else if (update === 'dptbooster') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, dptbooster);

        }
        else if (update === 'dadara2') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, dadara2);

        }
        Alert.alert(
            'Updated Successfully',
            [
                { text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            ],
            { cancelable: false }
        );
    }

    onAccept() {

        const navigate = this.props.navigation;
        this.props.InjectionDelete({ uid: this.props.navigation.state.params.injection.uid }, navigate);
        this.setState({ showModal: false });

    }
    onDecline() {
        this.setState({ showModal: false });
    }

    render() {

        return (
            <ScrollView>
                <Card>
                    <InjectionForm />
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
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

    const { HNumber, CName, DPickdob, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2, complete, update } = state.injection;
    // console.log('inside edit form',HNumber, CName, DPickdob, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2, complete);
    return { HNumber, CName, DPickdob, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2, complete, update };
};

export default connect(mapStateToProps, { InjectionUpdate, InjectionSave, InjectionDelete })(InjectionEditForm);  