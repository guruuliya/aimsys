import React, { Component } from 'react';
import { ScrollView, Alert } from 'react-native';
import { Container, Content, ListItem, Text, Right, Left, View } from 'native-base';
import { CardSection, Card, Header, Input, Button, Icon } from '../Common';
import { Radio, CardItem, Picker } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import ChildRegistrationForm from './ChildRegistrationForm';
import { childUpdate, childCreate } from '../../actions/ChildAction';

class ChildRegistration extends Component {

    onButtonPress() {
        const { HNumber, CName, CMotherName, option, DPickdob, DPickregdate } = this.props;
        this.props.childCreate({ HNumber, CName, CMotherName, option, DPickdob, DPickregdate });
        Alert.alert(
            'Oops !',
            'Inserted Successfully',
            [
                { text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            ],
            { cancelable: false }
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            selected: undefined,
        };
    }
    render() {
        return (
            <ScrollView>
                <Card>
                     <ChildRegistrationForm {...this.props} edit='no' />
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Register
                         </Button>

                    </CardSection>
                </Card>
            </ScrollView>

        );
    }
}

const styles = {

    textStyle: {
        padding: 5,
        fontSize: 18,
        color: 'blue',

    },
    buttonStyle: {
        alignItems: 'center'
    }
};

const mapStateToProps = (state) => {
    console.log(state);
    const { HNumber, CName, CMotherName, option, DPickdob, DPickregdate } = state.child;
    return { HNumber, CName, CMotherName, option, DPickdob, DPickregdate };
};

export default connect(mapStateToProps, {
    childUpdate, childCreate,
})(ChildRegistration);


