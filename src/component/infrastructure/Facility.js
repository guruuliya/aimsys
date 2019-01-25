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
    CardItem
} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

class Facility extends Component {
    static navigationOptions = {
        title: 'Infrastructure',
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
            waterSelected: null,
            isHidden: false,
            well: false,
            borewell: false,
            punchayath: false,
            medicineSelected: null,
            playSelected: null,
            motherSelected: null,
            infantSelected: null,
            toiletSelected: null
        };
    }

    render() {
        return (

            <Container>
                <ScrollView>
                    <Content>
                        <Card>
                            <CardItem>
                                <Text>Do You have Drinking Water?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.textStyle}>Yes:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ waterSelected: 'yes', isHidden: true })}
                                    selected={this.state.waterSelected === 'yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ waterSelected: 'no', isHidden: false })}
                                    selected={this.state.waterSelected === 'no'}
                                />
                            </CardItem>

                            {
                                this.state.isHidden ?
                                    <Card>
                                        <ListItem>
                                            <CheckBox
                                                checked={this.state.well}
                                                onPress={() => this.setState({ well: !this.state.well })}
                                            />
                                            <Body>
                                                <Text>Well</Text>
                                            </Body>
                                        </ListItem>
                                        <ListItem>
                                            <CheckBox
                                                checked={this.state.punchayath}
                                                // eslint-disable-next-line max-len
                                                onPress={() => this.setState({ punchayath: !this.state.punchayath })}
                                            />
                                            <Body>
                                                <Text>Punchayath</Text>
                                            </Body>
                                        </ListItem>
                                        <ListItem>
                                            <CheckBox
                                                checked={this.state.borewell}
                                                // eslint-disable-next-line max-len
                                                onPress={() => this.setState({ borewell: !this.state.borewell })}
                                            />
                                            <Body>
                                                <Text>Borewell</Text>
                                            </Body>
                                        </ListItem>
                                    </Card>
                                    : null
                            }
                        </Card>

                        <Card>
                            <CardItem>
                                <Text>Do you have Medicine Kit?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.textStyle}>Yes:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ medicineSelected: 'yes' })
                                    }
                                    selected={this.state.medicineSelected === 'yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ medicineSelected: 'no', })}

                                    selected={this.state.medicineSelected === 'no'}
                                />
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Text>Do you have Playground?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.textStyle}>Yes:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ playSelected: 'yes' })
                                    }
                                    selected={this.state.playSelected === 'yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ playSelected: 'no', })}

                                    selected={this.state.playSelected === 'no'}
                                />
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Text>Do you have Toilet?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.textStyle}>Yes:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ toiletSelected: 'yes' })
                                    }
                                    selected={this.state.toiletSelected === 'yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ toiletSelected: 'no', })}

                                    selected={this.state.toiletSelected === 'no'}
                                />
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Text>Do you have Weigh Scale for Infants?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.textStyle}>Yes:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ infantSelected: 'yes' })
                                    }
                                    selected={this.state.infantSelected === 'yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ infantSelected: 'no', })}

                                    selected={this.state.infantSelected === 'no'}
                                />
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Text>Do you have Weigh Scale for Mother?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.textStyle}>Yes:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ motherSelected: 'yes' })
                                    }
                                    selected={this.state.motherSelected === 'yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ motherSelected: 'no', })}

                                    selected={this.state.motherSelected === 'no'}
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

export { Facility };

