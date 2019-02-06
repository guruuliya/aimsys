import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text, Radio, Left, View } from 'native-base';
import { CardSection, Card, Input, Button, MyDatepicker } from '../Common';

class InjectionRecords extends Component {
    static navigationOptions = {
        title: 'Injection Records',
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
        };
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
                        <MyDatepicker
                            label="Date of birth"
                        />
                    </CardSection>
                    <CardSection>
                        <MyDatepicker
                            label="Registered date"
                        />
                    </CardSection>
                    <CardSection>
                        <MyDatepicker
                            label="polio After Birth"
                        />
                    </CardSection>
                    <CardSection>
                        <MyDatepicker
                            label="Hepatitis B0 Dose"
                        />
                    </CardSection>
                    <CardSection>
                        <MyDatepicker
                            label="BCG"
                        />
                    </CardSection>
                    <CardSection>
                        <MyDatepicker
                            label="DPT1"
                        />
                    </CardSection>
                    <CardSection>
                        <MyDatepicker
                            label="Hepatitis B1"
                        />
                    </CardSection>
                    <CardSection>
                        <MyDatepicker
                            label="OPV1"
                        />
                    </CardSection>
                    <CardSection>
                        <MyDatepicker
                            label="DPT2"
                        />
                    </CardSection>
                    <CardSection>
                        <MyDatepicker
                            label="Hepatitis B2"
                        />
                    </CardSection>
                    <CardSection>
                        <MyDatepicker
                            label="OPV2"
                        />
                    </CardSection>
                    <CardSection>
                        <MyDatepicker
                            label="DPT3"
                        />
                    </CardSection>
                    <CardSection>
                        <MyDatepicker
                            label="Hepatitis B3"
                        />
                    </CardSection>
                    <CardSection>
                        <MyDatepicker
                            label="OPV3"
                        />
                    </CardSection>
                    <CardSection>
                        <MyDatepicker
                            label="DADARA1"
                        />
                    </CardSection>
                    <CardSection>
                        <MyDatepicker
                            label="Nutrition 1st Dose "
                        />
                    </CardSection>
                    <CardSection>
                        <MyDatepicker
                            label="DPT Booster"
                        />
                    </CardSection>
                    <CardSection>
                        <MyDatepicker label="DADARA2 " />
                    </CardSection>


                    <CardSection>
                        <Left>
                            <Text
                                style={styles.labelStyle}
                            >
                                First year injection has completed or not?</Text>
                        </Left>
                        <View style={{ marginTop: 38, marginLeft: -45, flexDirection: 'row' }}>
                            <Text style={{ padding: 1 }}> Yes</Text>

                            <Radio
                                onPress={() => {
                                    this.setState({ itemSelected1: 'Yes', isHidden1: false });
                                    console.log(this.state.isHidden1);
                                }
                                }
                                selected={this.state.itemSelected1 === 'yes'}

                            />


                            <Text style={{ padding: 1 }}>No</Text>

                            <Radio
                                style={{ paddingRight: 66 }} onPress={() => {
                                    this.setState({ itemSelected1: 'No', isHidden1: true });
                                    console.log(this.state.isHidden1);
                                }
                                }
                                selected={this.state.itemSelected1 === 'No'}
                            />
                        </View>

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

export { InjectionRecords };
