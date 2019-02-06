import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Content, ListItem, Text, Radio, Right, Left, View } from 'native-base';
import { CardSection, Card, Input, Header, Radio1, Button, MyDatepicker } from '../Common';

class ChildRegistration extends Component {
    static navigationOptions = {
        title: 'Child Registration ',
        headerStyle: {
            backgroundColor: '#203546',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    constructor() {
        super();
        this.state = {
            itemSelected: null,
            isHidden: false,
            itemSelected1: null,
            isHidden1: false
        }
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
                        //value={this.state.email}
                        //onChangeText={email => this.setState({ email })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Child Name"
                            label="Child Name"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>


                    <CardSection>
                        <Input
                            placeholder="Pregnant Mother Name"
                            label="Mother Name"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>


                    <CardSection>
                        <Left><Text style={styles.labelStyle}>Gender</Text></Left>

                        <Text style={{ padding: 1 }}> Male</Text>

                        <Radio
                            onPress={() => this.setState({ itemSelected: 'Male', isHidden: false })}
                            selected={this.state.itemSelected === 'Male'}

                        />


                        <Text style={{ padding: 1 }}>Female</Text>

                        <Radio
                            style={{ paddingRight: 66 }}
                            onPress={() => {
                                this.setState({ itemSelected: 'Female', isHidden: true });
                                console.log(this.state.isHidden);

                            }
                            }
                            selected={this.state.itemSelected == 'Female'}
                        />

                    </CardSection>


                    <CardSection>
                        <MyDatepicker
                            label="Date of birth"
                        />
                    </CardSection>

                    <CardSection>
                        <Button children="Add" />

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


    }
};

export { ChildRegistration };
