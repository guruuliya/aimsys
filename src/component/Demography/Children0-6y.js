import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Container,
    Content,
    ListItem,
    Radio,
    Card,
    Text,
    CardItem
} from 'native-base';
import { Input } from '../Common/';

class Children extends Component {
    constructor() {
        super();
        this.state = {
            itemSelected: null,
        };
    }
    render() {
        return (
            <View>
                <Card>
                    <CardItem>
                        <Input
                            placeholder="Enter The HouseHold Number"
                            autoCorrect={false}
                            label="HouseHoldNumber"
                        />
                    </CardItem>

                    <CardItem>
                        <Input
                            placeholder="Enter the Child Name"
                            autoCorrect={false}
                            label="Name"
                        />
                    </CardItem>
                </Card>

                <Container>
                    <Content>
                        <Card>
                            <ListItem>
                                <Text>Do You have Drinking Water?</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.textStyle}>Yes:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ itemSelected: 'yes' })}
                                    selected={this.state.itemSelected === 'yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.setState({ itemSelected: 'no' })}
                                    selected={this.state.itemSelected === 'no'}
                                />
                            </ListItem>
                        </Card>
                    </Content>
                </Container>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    textStyle: {
        padding: 5
    }
});

export { Children };
