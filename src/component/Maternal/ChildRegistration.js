import React, { Component } from 'react';
import { ScrollView, Alert } from 'react-native';
import { Container, Content, ListItem, Text, Right, Left, View } from 'native-base';
import { CardSection, Card, Header, Input, Button, Icon } from '../Common';
import { Radio, CardItem, Picker } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { childUpdate, childCreate} from '../../actions/ChildAction';

class ChildRegistration extends Component {
   
    onButtonPress() {
        const { HNumber, CName, CMotherName,childList, option, DPickdob, DPickregdate } = this.props;
        this.props.childCreate({ HNumber, CName, CMotherName,childList, option, DPickdob, DPickregdate });
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
          selected: undefined
        };
      }
      onValueChange(value) {
        this.setState({
          selected: value
        });
      }


    render() {
        return (
            <ScrollView>
                <Card>
                    <CardSection style={styles.cardsectionStyle}>
                        <Input
                            placeholder="Household Number"
                            autoCorrect={false}
                            label="Household Number"
                            onChangeText={value => this.props.childUpdate({ name: 'HNumber', value })}
                            value={this.props.HNumber}
                        //onChangeText={email => this.setState({ email })}
                        />
                    </CardSection>
                    {/* <CardSection>
                        <Picker style={styles.textStyle}
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            placeholder="Select your SIM"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            style={{ width: undefined }}
                            selectedValue={this.state.childList}
                            onValueChange={value=> this.props.childUpdate({name:'childList',value})}
                        >
                        </Picker>
                    </CardSection> */}

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
                        <CardItem>
                            <Text style={styles.textStyle}>Gender</Text>
                        </CardItem>
                        <CardItem>

                            <Text style={styles.textStyle}> Male</Text>

                            <Radio onPress={() => this.props.childUpdate({ name: 'option', value: 'Male' })}
                                selected={this.props.option === 'Male'}

                            />


                            <Text style={styles.textStyle}>Female</Text>

                            <Radio  onPress={() => this.props.childUpdate({ name: 'option', value: 'Female' })}
                                selected={this.props.option === 'Female'}
                            />
                        </CardItem>
                    </CardSection>


                    <CardSection>
                        <CardItem>
                            <Text style={styles.textStyle}>Date Of Birth</Text>
                        </CardItem>
                        <CardItem>
                            <DatePicker
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                onDateChange={value => this.props.childUpdate({ name: 'DPickdob', value })}
                                date={this.props.DPickdob}
                            />
                        </CardItem>

                    </CardSection>
                    <CardSection>
                        <CardItem>
                            <Text style={styles.textStyle}>Registered date</Text>
                        </CardItem>
                        <CardItem>
                            <DatePicker
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                onDateChange={value => this.props.childUpdate({ name: 'DPickregdate', value })}
                                date={this.props.DPickregdate}
                            />
                        </CardItem>
                    </CardSection>
                    <Card>
                        <CardSection>

                            <Button onPress={this.onButtonPress.bind(this)}>
                                <Text style={{ color: 'red' }}>Register</Text>
                            </Button>

                        </CardSection>
                    </Card>


                </Card >
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
    const { HNumber, CName, CMotherName,option, DPickdob, DPickregdate } = state.child;
    return { HNumber, CName, CMotherName, option, DPickdob, DPickregdate };
};

export default connect(mapStateToProps, {
    childUpdate, childCreate, 
})(ChildRegistration);


