import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import ChildRegistrationForm from './ChildRegistrationForm';
import { childUpdate, childSave, childDelete } from '../../actions/ChildAction';
import { Card, CardSection, Button, Confirm } from '../Common';

class ChildEditForm extends Component {
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
        _.each(this.props.navigation.state.params.child, (value, name) => {
            console.log(name);
            console.log(value);
            this.props.childUpdate({ name, value });
        });
    }

    onButtonPress() {
        const { HNumber, CName, CMotherName, option, DPickdob, DPickregdate } = this.props;
        this.props.childSave({ HNumber, CName, CMotherName, option, DPickdob, DPickregdate, uid: this.props.navigation.state.params.child.uid });
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
        this.props.childDelete({ uid: this.props.navigation.state.params.child.uid }, navigate);
        this.setState({ showModal: false });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Card>
                <ChildRegistrationForm edit='yes' />
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
        );
    }
}
const mapStateToProps = (state) => {

    const { HNumber, CName, CMotherName, option, DPickdob, DPickregdate } = state.child;
    return { HNumber, CName, CMotherName, option, DPickdob, DPickregdate };
};

export default connect(mapStateToProps, { childUpdate, childSave, childDelete })(ChildEditForm);  