import React, { Component } from 'react';
import { ScrollView, Alert } from 'react-native';
import { CardSection, Card, Button } from '../Common';
import { connect } from 'react-redux';
import ChildRegistrationForm from './ChildRegistrationForm';
import { childUpdate, childCreate, deliveryUpdate } from '../../actions/ChildAction';

class ChildRegistration extends Component {

    onButtonPress() {
        const { HNumber, CName, CMotherId, status, option, babytype, DPickdob, DPickregdate } = this.props;
      
        if (status === 'Born') {
            this.props.childCreate({ HNumber, CName, CMotherId, status, option, babytype, DPickdob, DPickregdate });
            Alert.alert(
                'Oops !',
                'Inserted Successfully',
                [
                    { text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                ],
                { cancelable: false }
            );
        } else {
           
            this.props.deliveryUpdate({ status }, CMotherId);
            Alert.alert(
                'Oops !',
                'Inserted Successfully',
                [
                    { text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                ],
                { cancelable: false }
            );
        }
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

const mapStateToProps = (state) => {
   
    const { HNumber, CName, CMotherId, status, option, babytype, DPickdob, DPickregdate } = state.child;
   
    return { HNumber, CName, CMotherId, status, option, babytype, DPickdob, DPickregdate };
};

export default connect(mapStateToProps, {
    childUpdate, childCreate, deliveryUpdate
})(ChildRegistration);
