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
import { connect } from 'react-redux';
import { bStatusUpdate, bStatusCreate } from '../../actions';


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

    onButtonPress() {
        const { option } = this.props;
        this.props.bStatusCreate({ option });
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
                                onPress={() => this.props.bStatusUpdate({ name: 'option', value: 'owned' })}
                                selected={this.props.option === 'owned'}
                            />
                        </CardItem>
                        <CardItem>
                            <Left><Text style={styles.textStyle}>Rented:</Text></Left>
                            <Radio
                                // eslint-disable-next-line max-len
                                onPress={() => this.props.bStatusUpdate({ name: 'option', value: 'rented' })}
                                selected={this.props.option === 'rented'}
                            />
                        </CardItem>
                        <CardItem>
                            <Left><Text style={styles.textStyle}>Gifted</Text></Left>
                            <Radio
                                // eslint-disable-next-line max-len
                                onPress={() => this.props.bStatusUpdate({ name: 'option', value: 'gifted' })}
                                selected={this.props.option === 'gifted'}
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
                                onPress={this.onButtonPress.bind(this)}
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

const mapStateToProps = (state) => {
    console.log(state);
    const { option } = state.bstatus;
    return { option };
};

export default connect(mapStateToProps, { bStatusUpdate, bStatusCreate })(BuildingStatus);
