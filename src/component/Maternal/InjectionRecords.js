import React, { Component } from 'react';
import { ScrollView, Alert } from 'react-native';
import { Container, Content, ListItem, Text, Right, Left, View } from 'native-base';
import { CardSection, Card, Header, Input, Button, Icon } from '../Common';
import { Radio, CardItem, Picker } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import InjectionForm from './InjectionForm';
import { InjectionUpdate, InjectionCreate } from '../../actions/InjectionAction';

class InjectionRecords extends Component {
    onButtonPress() {
        const { HNumber, CName,DPickdob, poliodate,hepa,BCG,DPT1,hepa1,OPV1,DPT2,hepa2,OPV2,DPT3,hepa3,OPV3,dadara1,nutri1,dptbooster,dadara2,complete } = this.props;
        this.props.InjectionCreate({ HNumber, CName,DPickdob, poliodate,hepa,BCG,DPT1,hepa1,OPV1,DPT2,hepa2,OPV2,DPT3,hepa3,OPV3,dadara1,nutri1,dptbooster,dadara2,complete });
        Alert.alert(
            'Oops !',
            'Inserted Successfully',
            [
                { text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            ],
            { cancelable: false }
        )
    }
    constructor() {
        super();
        this.state = {
            itemSelected: null,
            isHidden: false,
            itemSelected1: null,
            isHidden1: false
        };
    }

    render() {
        return (
            <ScrollView>
                   
                   <Card>
                    <InjectionForm {...this.props} />
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
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    labelStyle: {
        fontSize: 14,
        paddingLeft: 16,
        flex: 1,
    },
        textStyle: {
            padding: 5,
            fontSize: 18,
            color: 'blue',
    
        },
        dateStyle: {
            paddingRight:5
        }


};

const mapStateToProps = (state) => {
    console.log(state);
    const { HNumber, CName,DPickdob, poliodate,hepa,BCG,DPT1,hepa1,OPV1,DPT2,hepa2,OPV2,DPT3,hepa3,OPV3,dadara1,nutri1,dptbooster,dadara2,complete} = state.injection;
    return { HNumber, CName,DPickdob, poliodate,hepa,BCG,DPT1,hepa1,OPV1,DPT2,hepa2,OPV2,DPT3,hepa3,OPV3,dadara1,nutri1,dptbooster,dadara2,complete};
};

export default connect(mapStateToProps, {
    InjectionUpdate, InjectionCreate,
})(InjectionRecords);
