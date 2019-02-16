import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Content, ListItem, Text, Radio, Right, Left, View } from 'native-base';
import { CardSection, Card, Input, Header, Radio1, Button } from '../Common';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { childUpdate, childCreate } from '../../actions/ChildAction';

class ChildRegistration extends Component {
    onButtonPress() {
        const { HNumber, CName, CMotherName, option, DPickdob, DPickregdate } = this.props;
        this.props.childCreate({ HNumber, CName, CMotherName, option, DPickdob, DPickregdate });
    }
      
    render() {
        return (
            <ScrollView>
                <Card>
                    <CardSection>
                        <Input
                            placeholder="Household Number"
                            autoCorrect={false}
                            label="Household Number"
                            onChangeText={value => this.props.childUpdate({ name: 'HNumber', value })}
                            value={this.props.HNumber}
                        //onChangeText={email => this.setState({ email })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Child Name"
                            label="Child Name"
                            autoCorrect={false}
                            onChangeText={value => this.props.childUpdate({ name: 'CName', value })}
                            value={this.props.CName}
                        />
                    </CardSection>


                    <CardSection>
                        <Input
                            placeholder="Child Mother Name"
                            label="Mother Name"
                            autoCorrect={false}
                            onChangeText={value => this.props.childUpdate({ name: 'CMotherName', value })}
                            value={this.props.CMotherName}
                        />
                    </CardSection>

                    <CardSection>
                        <Left><Text style={styles.labelStyle}>Gender</Text></Left>

                        <Text style={{ padding: 2 }}> Male</Text>

                        <Radio onPress={() => this.props.childUpdate({ name: 'option', value: 'Male' })}
                            selected={this.props.option === 'Male'}

                        />


                        <Text style={{ padding: 2 }}>Female</Text>

                        <Radio style={{ paddingRight: 66 }} onPress={() => this.props.childUpdate({ name: 'option', value: 'Female' })}
                            selected={this.props.option === 'Female'}
                        />

                    </CardSection>
                    <CardSection>
                    <Left><Text style={styles.labelStyle}>Date Of Birth</Text></Left>
                        <DatePicker style={{ paddingRight: 5, paddingLeft: 3, flex:2}}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            onDateChange={value => this.props.childUpdate({ name: 'DPickdob', value })}
                            date={this.props.DPickdob}
                        />

                    </CardSection>
                    <CardSection>
                    <Left><Text style={styles.labelStyle}>Registered date</Text></Left>
                        <DatePicker style={{ paddingRight: 5, paddingLeft: 3, flex:2}}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            onDateChange={value => this.props.childUpdate({ name: 'DPickregdate', value })}
                            date={this.props.DPickregdate}
                        />
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            <Text>Register</Text>
                        </Button>
                    </CardSection>


                </Card >
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
    // labelStyle: {
    //     fontSize: 18,
    //     paddingLeft: 20,
    //     flex: 1

    // },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'

    }
};
const mapStateToProps = (state) => {
    console.log(state);
    const { HNumber, CName, CMotherName, option, DPickdob, DPickregdate } = state.child;
    return { HNumber, CName, CMotherName, option, DPickdob, DPickregdate };
};

export default connect(mapStateToProps, {
    childUpdate, childCreate
})(ChildRegistration);


