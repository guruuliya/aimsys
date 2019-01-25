import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    Container,
    Header,
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

class Toilet extends Component {
    constructor() {
        super();
        this.state = {
            itemSelected: 'itemOne',
        }
    }
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Card>
                        <CardItem>
                            <Text>Do you have Functional Toilet?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.textStyle}>Yes:</Text>
                            <Radio onPress={() => {
                                this.setState({ itemSelected: 'itemOne', isHidden: false });
                            }
                            }
                                selected={this.state.itemSelected == 'itemOne'}
                            />
                            <Text style={styles.textStyle}>No:</Text>
                            <Radio onPress={() => {
                                this.setState({ itemSelected: 'itemTwo', isHidden: true });
                            }
                            }
                                selected={this.state.itemSelected == 'itemTwo'}
                            />
                        </CardItem>

                        <ListItem>
                            <Button block warning>
                                <Text>Warning</Text>
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
        padding: 10
    }
});

export { Toilet };
