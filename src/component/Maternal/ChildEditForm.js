import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import ChildRegistrationForm from './ChildRegistrationForm';
import { childUpdate, childSave, childDelete } from '../../actions/ChildAction';
import { Card, CardSection, Button, Confirm } from '../Common';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';

class ChildEditForm extends Component {
    state = {
        snapshotList: {},
        scores: {},
        showModal: false
    };

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
            //console.log('insede edit',this.props.navigation.state.params.child.uid);
            console.log(value);
            this.props.childUpdate({ name, value });
            this.search(this.props.navigation.state.params.child.HNumber);
        });
    }

    onButtonPress() {
        const { HNumber, CName, CMotherId, status, option, babytype, DPickdob, DPickregdate } = this.props;
        this.props.childSave({ HNumber, CName, CMotherId, status, option, babytype, DPickdob, DPickregdate, uid: this.props.navigation.state.params.child.uid });
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
    search(HNumber) {
        this.setState({ searchStatus: 'no' });
        const { currentUser } = firebase.auth();
        const db = firebase.database().ref(`/users/${currentUser.uid}/Demographic/Pregnancy`);
        const query = db.orderByChild('HHNumber').equalTo(HNumber);
        query.on('value', snapshot => {
            if (snapshot.val()) {
                this.setState({ scores: snapshot.val() });
            } else {
                this.setState({ scores: { noData: { HHName: 'No Data' } } });
            }
        });
    }

    getPickerElements() {
        var pickerArr = [];
        var scores = this.state.scores;
        var keys = Object.keys(scores);
        for (let i = 0; i < keys.length; i++) {
            let k = keys[i];
            let Name = scores[k].PregnantName;
            console.log('Pregnant Nam is ', Name);
            pickerArr.push(<Picker.Item label={Name} value={k} />);
        }

        return pickerArr;
    }


    render() {
        return (
            <ScrollView>
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
            </ScrollView>
        );
    }
}
const mapStateToProps = (state) => {

    const { HNumber, CName, CMotherId, status, option, babytype, DPickdob, DPickregdate } = state.child;
    return { HNumber, CName, CMotherId, status, option, babytype, DPickdob, DPickregdate };
};

export default connect(mapStateToProps, { childUpdate, childSave, childDelete })(ChildEditForm);  
