import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Left, Radio } from 'native-base';
import { CardSection, Card, Input, Header, Button } from '../Common';

class ChildNutrition extends Component {
    
    constructor() {
        super();
        this.state = {
            itemSelected: null,
            isHidden: false,
            itemSelected1: null,
            isHidden1: false,
            itemSelected2: null,
            isHidden2: false,
            itemSelected3: null,
            isHidden3: false,
            itemSelected4: null,
            isHidden4: false,
            itemSelected5: null,
            isHidden5: false,
            itemSelected6: null,
            isHidden6: false,
            itemSelected7: null,
            isHidden7: false,
            itemSelected8: null,
            isHidden8: false,
        };
    }
    render() {
        return (
            <ScrollView>
                <Header headerText={'CHILD NUTRITION'} />

                <Card>
                    <CardSection>
                        <Input
                            placeholder="Household Number"
                            label="Household Number"
                            autoCorrect={false}
                        //value={this.state.password}
                        //  onChangeText={password => this.setState({ password })}
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
                        <Left><Text style={styles.labelStyle}>Underweight</Text></Left>

                        <Text style={{ padding: 1 }}> Yes</Text>

                        <Radio
                            onPress={() => {
                                this.setState({ itemSelected: 'Yes', isHidden: true });
                                console.log(this.state.isHidden);
                            }
                            }
                            selected={this.state.itemSelected === 'Yes'}

                        />


                        <Text style={{ padding: 1 }}>No</Text>

                        <Radio
                            style={{ paddingRight: 66 }} onPress={() => {
                                this.setState({ itemSelected: 'No', isHidden: false });
                                console.log(this.state.isHidden);
                            }
                            }
                            selected={this.state.itemSelected === 'No'}
                        />

                    </CardSection>
                    {
                        this.state.isHidden ?
                            <View>
                                <Card>
                                    <CardSection>
                                        <Input
                                            placeholder='age'
                                            label='Age'
                                        />
                                    </CardSection>

                                    <CardSection>
                                        <Input
                                            placeholder='Weight'
                                            label='Weight'
                                        />
                                    </CardSection>

                                </Card>
                            </View>
                            : null
                    }

                    <CardSection>
                        <Left><Text style={styles.labelStyle}>Wasting</Text></Left>

                        <Text style={{ padding: 1 }}> Yes</Text>

                        <Radio
                            onPress={() => {
                                this.setState({ itemSelected1: 'Yes', isHidden1: true });
                                console.log(this.state.isHidden1);
                            }
                            }
                            selected={this.state.itemSelected1 === 'Yes'}

                        />


                        <Text style={{ padding: 1 }}>No</Text>

                        <Radio
                            style={{ paddingRight: 66 }} onPress={() => {
                                this.setState({ itemSelected1: 'No', isHidden1: false });
                                console.log(this.state.isHidden1);
                            }
                            }
                            selected={this.state.itemSelected1 === 'No'}
                        />

                    </CardSection>
                    {
                        this.state.isHidden1 ?
                            <View>
                                <Card>
                                    <CardSection>
                                        <Input
                                            placeholder='age'
                                            label='Age'
                                        />
                                    </CardSection>

                                    <CardSection>
                                        <Input
                                            placeholder='Weight'
                                            label='Weight'
                                        />
                                    </CardSection>
                                    <CardSection>
                                        <Input
                                            placeholder='Height'
                                            label='Height'
                                        />
                                    </CardSection>

                                </Card>
                            </View>
                            : null
                    }


                    <CardSection>
                        <Left><Text style={styles.labelStyle}>Stunting</Text></Left>

                        <Text style={{ padding: 1 }}> Yes</Text>

                        <Radio
                            onPress={() => {
                                this.setState({ itemSelected2: 'Yes', isHidden2: true });
                                console.log(this.state.isHidden2);
                            }
                            }
                            selected={this.state.itemSelected2 === 'Yes'}

                        />


                        <Text style={{ padding: 1 }}>No</Text>

                        <Radio
                            style={{ paddingRight: 66 }} onPress={() => {
                                this.setState({ itemSelected2: 'No', isHidden2: false });
                                console.log(this.state.isHidden2);
                            }
                            }
                            selected={this.state.itemSelected2 === 'No'}
                        />

                    </CardSection>
                    {
                        this.state.isHidden2 ?
                            <View>
                                <Card>
                                    <CardSection>
                                        <Input
                                            placeholder='age'
                                            label='Age'
                                        />
                                    </CardSection>
                                    <CardSection>
                                        <Input
                                            placeholder='Height'
                                            label='Height'
                                        />
                                    </CardSection>

                                </Card>
                            </View>
                            : null
                    }

                    <CardSection>
                        <Left><Text style={styles.labelStyle}>New born with low birth weight less then 2500 grams</Text></Left>
                        <View style={{ marginTop: 48, marginLeft: -100, flexDirection: 'row' }}>
                            <Text style={{ padding: 1 }}> Yes</Text>

                            <Radio
                                onPress={() => {
                                    this.setState({ itemSelected3: 'Yes', isHidden3: true });
                                    console.log(this.state.isHidden3);
                                }
                                }
                                selected={this.state.itemSelected3 === 'Yes'}

                            />


                            <Text style={{ padding: 1 }}>No</Text>

                            <Radio
                                style={{ paddingRight: 66 }} onPress={() => {
                                    this.setState({ itemSelected3: 'No', isHidden3: false });
                                    console.log(this.state.isHidden3);
                                }
                                }
                                selected={this.state.itemSelected3 === 'No'}
                            />
                        </View>
                    </CardSection>

                    <CardSection>
                        <Left><Text style={styles.labelStyle}>Early iniation of Breastfeeding</Text></Left>
                        <View style={{ marginTop: 38, marginLeft: -60, flexDirection: 'row' }}>
                            <Text style={{ padding: 1 }}> Yes</Text>

                            <Radio
                                onPress={() => {
                                    this.setState({ itemSelected4: 'Yes', isHidden4: true });
                                    console.log(this.state.isHidden4);
                                }
                                }
                                selected={this.state.itemSelected4 === 'Yes'}

                            />


                            <Text style={{ padding: 1 }}>No</Text>

                            <Radio
                                style={{ paddingRight: 66 }} onPress={() => {
                                    this.setState({ itemSelected4: 'No', isHidden4: false });
                                    console.log(this.state.isHidden4);
                                }
                                }
                                selected={this.state.itemSelected4 === 'No'}
                            />
                        </View>

                    </CardSection>

                    <CardSection>
                        <Left><Text style={styles.labelStyle}>Exclusive Breastfeeding</Text></Left>

                        <Text style={{ padding: 1 }}> Yes</Text>

                        <Radio
                            onPress={() => {
                                this.setState({ itemSelected5: 'Yes', isHidden5: true });
                                console.log(this.state.isHidden5);
                            }
                            }
                            selected={this.state.itemSelected5 === 'Yes'}

                        />


                        <Text style={{ padding: 1 }}>No</Text>

                        <Radio
                            style={{ paddingRight: 66 }} onPress={() => {
                                this.setState({ itemSelected5: 'No', isHidden5: false });
                                console.log(this.state.isHidden5);
                            }
                            }
                            selected={this.state.itemSelected5 === 'No'}
                        />

                    </CardSection>

                    <CardSection>
                        <Left><Text style={styles.labelStyle}>Children inititaed appropriate complementary feeding</Text></Left>
                        <View style={{ marginTop: 48, marginLeft: -100, flexDirection: 'row' }}>
                            <Text style={{ padding: 1 }}> Yes</Text>

                            <Radio
                                onPress={() => {
                                    this.setState({ itemSelected6: 'Yes', isHidden6: true });
                                    console.log(this.state.isHidden6);
                                }
                                }
                                selected={this.state.itemSelected6 === 'Yes'}

                            />


                            <Text style={{ padding: 1 }}>No</Text>

                            <Radio
                                style={{ paddingRight: 66 }} onPress={() => {
                                    this.setState({ itemSelected6: 'No', isHidden6: false });
                                    console.log(this.state.isHidden4);
                                }
                                }
                                selected={this.state.itemSelected6 === 'No'}
                            />
                        </View>
                    </CardSection>


                    <CardSection>
                        <Left><Text style={styles.labelStyle}>Institutional deliveries</Text></Left>

                        <Text style={{ padding: 1 }}> Yes</Text>

                        <Radio
                            onPress={() => {
                                this.setState({ itemSelected7: 'Yes', isHidden7: true });
                                console.log(this.state.isHidden7);
                            }
                            }
                            selected={this.state.itemSelected7 === 'Yes'}

                        />


                        <Text style={{ padding: 1 }}>No</Text>

                        <Radio
                            style={{ paddingRight: 66 }} onPress={() => {
                                this.setState({ itemSelected7: 'No', isHidden7: false });
                                console.log(this.state.isHidden7);
                            }
                            }
                            selected={this.state.itemSelected7 == 'No'}
                        />
                    </CardSection>

                    <CardSection>
                        <Left><Text style={styles.labelStyle}>Immunization Coverage</Text></Left>

                        <Text style={{ padding: 1 }}> Yes</Text>

                        <Radio
                            onPress={() => {
                                this.setState({ itemSelected8: 'Yes', isHidden8: true });
                                console.log(this.state.isHidden8);
                            }
                            }
                            selected={this.state.itemSelected8 === 'Yes'}

                        />

                        <Text style={{ padding: 1 }}>No</Text>

                        <Radio
                            style={{ paddingRight: 66 }}
                            onPress={() => this.setState({ itemSelected8: 'No', isHidden8: false })}
                            selected={this.state.itemSelected8 === 'No'}
                        />

                    </CardSection>

                    <CardSection>
                        <Button children="Add" />
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
        fontSize: 18,
        paddingLeft: 16,
        flex: 1,
    }
};

export { ChildNutrition };
