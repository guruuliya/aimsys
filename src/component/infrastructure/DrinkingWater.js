import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    Container,
    Content,
    ListItem,
    Radio,
    Card,
    Text,
    CheckBox,
    Body,
    Button
} from 'native-base';

class DrinkingWater extends Component {
    constructor() {
        super();
        this.state = {
            itemSelected: 'itemTwo',
            isHidden: false,
            well: false,
            borewell: false,
            punchayath: false,
        };
    }
    render() {
        return (
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
                                onPress={() => this.setState({ itemSelected: 'itemOne', isHidden: true })}
                                selected={this.state.itemSelected === 'itemOne'}
                            />
                            <Text style={styles.textStyle}>No:</Text>
                            <Radio
                                // eslint-disable-next-line max-len
                                onPress={() => this.setState({ itemSelected: 'itemTwo', isHidden: false })}
                                selected={this.state.itemSelected === 'itemTwo'}
                            />
                        </ListItem>
                    </Card>
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
                                <ListItem>
                                    <Button block warning>
                                        <Text>Warning</Text>
                                    </Button>
                                </ListItem>

                            </Card>
                            : null
                    }
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

export { DrinkingWater };

