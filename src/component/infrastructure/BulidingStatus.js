import _ from 'lodash';
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
    Left
} from 'native-base';
import { connect } from 'react-redux';
import { bStatusUpdate, bStatusCreate, checkBStatus, bStatusFetch, bStatusDelete } from '../../actions';


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

    componentWillMount() {
        this.props.bStatusFetch();
    }

    onButtonPress() {
        const { option } = this.props;
        console.log(option);
        this.props.bStatusCreate({ option });
    }

    renderContent() {
        if (this.props.status) {
            return (this.props.buildingstatus.map((value) => {
                return (
                    <Content>
                        <Card>
                            <CardItem>
                                <Text>How you Own the Present Buliding?</Text>
                            </CardItem>
                            <CardItem key={value.uid}>
                                <Text style={styles.itemtext}>This Building is: {value.option}</Text>
                            </CardItem>
                            <ListItem>
                                <Button
                                    block info
                                    style={{
                                        width: Dimensions.get('window').width - 40,
                                        marginLeft: 0,
                                        marginRight: 0
                                    }}
                                    onPress={() => this.props.navigation.navigate('BuildingStatusUpdate', this.props.buildingstatus)}
                                >
                                    <Text>Edit</Text>
                                </Button>
                            </ListItem>
                            <ListItem>
                                <Button
                                    block danger
                                    style={{
                                        width: Dimensions.get('window').width - 40,
                                        marginLeft: 0,
                                        marginRight: 0
                                    }}
                                    onPress={() => this.props.bStatusDelete(value.uid)}
                                >
                                    <Text>Remove</Text>
                                </Button>
                            </ListItem>
                        </Card>
                    </Content>
                );
            })
            );
        }
        return (<Content>
            <Card>
                <CardItem>
                    <Text>How you Own the Present Buliding?</Text>
                </CardItem>
                <CardItem>
                    <Left><Text style={styles.textStyle}>Owned</Text></Left>
                    <Radio
                        // eslint-disable-next-line max-len
                        onPress={() => this.props.bStatusUpdate({ name: 'option', value: 'Owned' })}
                        selected={this.props.option === 'Owned'}
                    />
                </CardItem>
                <CardItem>
                    <Left><Text style={styles.textStyle}>Rented:</Text></Left>
                    <Radio
                        // eslint-disable-next-line max-len
                        onPress={() => this.props.bStatusUpdate({ name: 'option', value: 'Rented' })}
                        selected={this.props.option === 'Rented'}
                    />
                </CardItem>
                <CardItem>
                    <Left><Text style={styles.textStyle}>Gifted</Text></Left>
                    <Radio
                        // eslint-disable-next-line max-len
                        onPress={() => this.props.bStatusUpdate({ name: 'option', value: 'Gifted' })}
                        selected={this.props.option === 'Gifted'}
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
        </Content>);
    }

    render() {
        return (
            <Container>
                {this.renderContent()}
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
    const { option, status } = state.bfstatus;
    const buildingstatus = _.map(state.bstatus, (val, uid) => {
        return { ...val, uid };
    });
    console.log(buildingstatus);
    return { option, status, buildingstatus };
};

export default connect(mapStateToProps,
    { bStatusUpdate, bStatusCreate, checkBStatus, bStatusFetch, bStatusDelete })(BuildingStatus);
