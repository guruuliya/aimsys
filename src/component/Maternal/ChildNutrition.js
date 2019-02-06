import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import {
    Container,
    Content,
    ListItem,
    Radio,
    Card,
    Text,
    CheckBox,
    Body,
    Button,
    CardItem,
    Input
} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

class ChildNutrition extends Component {
    static navigationOptions = {
        title: 'Child Nutrition ',
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
            underweight: null,
            isHidden: false,
            isHidden1: false,
            isHidden2: false,
            well: false,
            wasting: null,
            stunting: null,
            feedSelected: null,
            breastfeedSelected: null,
            birthweightSelected: null,
            compliSelected: null,
            institutionSelected:null
        };
    }

    render() {
        return (

            <Container>
                <ScrollView>
                    <Content>
                        <Card>
                            <CardItem>
                                <Text>Underweight?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.textStyle}>Yes:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ underweight: 'yes', isHidden: true })}
                                    selected={this.state.underweight === 'yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ underweight: 'no', isHidden: false })}
                                    selected={this.state.underweight === 'no'}
                                />
                            </CardItem>

                            {
                                this.state.isHidden ?
                                    <Card>
                                        <ListItem>
                                        <Input
                                            placeholder='age'
                                            label='Age'
                                        />
                                        </ListItem>
                                        <ListItem>
                                        <Input
                                            placeholder='weight'
                                            label='weight'
                                        />
                                        </ListItem>
                                        
                                    </Card>
                                    : null
                            }
                        </Card>

                        <Card>
                            <CardItem>
                                <Text>Wasting?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.textStyle}>Yes:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ wasting: 'yes', isHidden1:true })
                                    }
                                    selected={this.state.wasting === 'yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ wasting: 'no', isHidden1: false })}

                                    selected={this.state.wasting === 'no'}
                                />
                            </CardItem>
                            {
                                this.state.isHidden1 ?
                                    <Card>
                                        <ListItem>
                                        <Input
                                            placeholder='age'
                                            label='Age'
                                        />
                                        </ListItem>
                                        <ListItem>
                                        <Input
                                            placeholder='weight'
                                            label='weight'
                                        />
                                        </ListItem>
                                        <ListItem>
                                        <Input
                                            placeholder='height'
                                            label='height'
                                        />
                                        </ListItem>
                                        
                                    </Card>
                                    : null
                            }
                        </Card>

                        <Card>
                            <CardItem>
                                <Text>Stunting?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.textStyle}>Yes:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ stunting: 'yes', isHidden2:true})
                                    }
                                    selected={this.state.stunting === 'yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ stunting: 'no', isHidden2:false })}

                                    selected={this.state.stunting === 'no'}
                                />
                            </CardItem>
                            {
                                this.state.isHidden2 ?
                                    <Card>
                                        <ListItem>
                                        <Input
                                            placeholder='age'
                                            label='Age'
                                        />
                                        </ListItem>
                                        <ListItem>
                                        <Input
                                            placeholder='height'
                                            label='height'
                                        />
                                        </ListItem>
                                        
                                    </Card>
                                    : null
                            }
                        </Card>

                        <Card>
                            <CardItem>
                                <Text>New born with low birth weight less then 2500 grams?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.textStyle}>Yes:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({  birthweightSelected: 'yes' })
                                    }
                                    selected={this.state. birthweightSelected === 'yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({  birthweightSelected: 'no', })}

                                    selected={this.state. birthweightSelected === 'no'}
                                />
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Text>Early iniation of Breastfeeding?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.textStyle}>Yes:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ breastfeedSelected: 'yes' })
                                    }
                                    selected={this.state.breastfeedSelected === 'yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ breastfeedSelected: 'no', })}

                                    selected={this.state.breastfeedSelected === 'no'}
                                />
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Text>Exclusive Breastfeeding?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.textStyle}>Yes:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({  feedSelected: 'yes' })
                                    }
                                    selected={this.state. feedSelected === 'yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({  feedSelected: 'no', })}

                                    selected={this.state. feedSelected === 'no'}
                                />
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Text>Children inititaed appropriate complementary feeding?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.textStyle}>Yes:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({  compliSelected: 'yes' })
                                    }
                                    selected={this.state.compliSelected === 'yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({  compliSelected: 'no', })}

                                    selected={this.state. compliSelected === 'no'}
                                />
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Text>Institutional deliveries?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.textStyle}>Yes:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({  institutionSelected: 'yes' })
                                    }
                                    selected={this.state. institutionSelected === 'yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({  institutionSelected: 'no', })}

                                    selected={this.state. institutionSelected === 'no'}
                                />
                            </CardItem>
                        </Card>


                        <ListItem>
                            <Button
                                block success
                                style={{
                                    width: Dimensions.get('window').width - 40,
                                    marginLeft: 0,
                                    marginRight: 0
                                }}
                            >
                                <Text>Add</Text>
                            </Button>
                        </ListItem>

                    </Content>

                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        padding: 5
    }
});

export { ChildNutrition };

