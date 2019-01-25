import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import {
    Container,
    Content,
    ListItem,
    Radio,
    Card,
    Text,
    Button,
    CardItem,
    Left,
} from 'native-base';

class BuildingStatus extends Component {
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
            itemSelected: 'null',
        };       
    }

    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Text>How you Own the Present Buliding?</Text>
                        </CardItem>
                        <CardItem>
                            <Left><Text style={styles.textStyle}>Owned</Text></Left>
                            <Radio
                                // eslint-disable-next-line max-len
                                onPress={() => this.setState({ itemSelected: 'owned' })}
                                selected={this.state.itemSelected === 'owned'}
                            />
                        </CardItem>
                        <CardItem>
                            <Left><Text style={styles.textStyle}>Rented:</Text></Left>
                            <Radio
                                // eslint-disable-next-line max-len
                                onPress={() => this.setState({ itemSelected: 'rented' })}
                                selected={this.state.itemSelected === 'rented'}
                            />
                        </CardItem>
                        <CardItem>
                            <Left><Text style={styles.textStyle}>Gifted</Text></Left>
                            <Radio
                                // eslint-disable-next-line max-len
                                onPress={() => this.setState({ itemSelected: 'gifted' })}
                                selected={this.state.itemSelected === 'gifted'}
                            />
                        </CardItem>
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
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        padding: 5
    }
});

export { BuildingStatus };
