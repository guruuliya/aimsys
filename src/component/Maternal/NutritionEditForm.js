import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import ChildNutritionForm from './ChildNutritionForm';
import { NutritionUpdate, NutritionSave, NutritionDelete } from '../../actions/NutritionAction';
import { Card, CardSection, Button, Confirm } from '../Common';
import { ScrollView } from 'react-native-gesture-handler';

class NutritionEditForm extends Component {
    state = { showModal: false };
    static navigationOptions = {
        title: 'Child Nutrition Update',
        headerStyle: {
            backgroundColor: '#203546',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    componentWillMount() {
        _.each(this.props.navigation.state.params.nutrition, (value, name) => {

            console.log(name);
            console.log(value);
            this.props.NutritionUpdate({ name, value });
        });
    }

    onButtonPress() {
        const { HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli } = this.props;
        this.props.NutritionSave({ HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli, uid: this.props.navigation.state.params.nutrition.uid });
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

        console.log('success');
        console.log('----------------------');

        console.log('----------------------');
        const navigate = this.props.navigation;
        this.props.NutritionDelete({ uid: this.props.navigation.state.params.nutrition.uid },navigate);
        this.setState({ showModal: false });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {

        return (
            <ScrollView>
            <Card>
                <ChildNutritionForm />
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

    const { HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli } = state.nutrition;
    return { HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli };
};

export default connect(mapStateToProps, { NutritionUpdate, NutritionSave, NutritionDelete })(NutritionEditForm);  