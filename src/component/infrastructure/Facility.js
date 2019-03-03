import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, Dimensions, Alert } from 'react-native';
import { connect } from 'react-redux';
import {
    Container, Content, ListItem,
    Radio, Card, Text,
    Button, CardItem, Spinner
} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import {
    facilityForm, facilityCreate, facilityFetch, facilityDelete
} from '../../actions';


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
    componentWillMount() {
        this.props.facilityFetch();
    }

    onButtonPress() {
        const { Water, Medicine, Mother, Infant, Play, Toilet } = this.props;
        
        if (Water !== '' || Medicine !== '' || Mother !== '' || Infant !== '' || Play !== '' || Toilet !== '') {
            this.props.facilityCreate({ Water, Medicine, Mother, Infant, Play, Toilet });
        } else {
            Alert.alert(
                'oops...!',
                'Please Select a Image...',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: true }
            );
        }
    }

    renderContent() {
        if (this.props.status) {
            if (this.props.Loadding) {
                return (<Spinner />);
            }
            return (this.props.facilities.map((value, index) => {
                return (
                    <Content>
                        <Card key={index + 1}>
                            <CardItem>
                                <Text>Do You have Medicine?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.itemtext}>{value.Medicine}</Text>
                            </CardItem>
                            <CardItem>
                                <Text>Do You have Palyground?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.itemtext}>{value.Play}</Text>
                            </CardItem>
                            <CardItem>
                                <Text>Do You have Functional Toilet?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.itemtext}>{value.Toilet}</Text>
                            </CardItem>
                            <CardItem>
                                <Text>Do You have Weigh Scale for Infants?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.itemtext}>{value.Infant}</Text>
                            </CardItem>
                            <CardItem>
                                <Text>Do You have Weigh Scale for Mother?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.itemtext}>{value.Water}</Text>
                            </CardItem>

                            <ListItem>
                                <Button
                                    block info
                                    style={{
                                        width: Dimensions.get('window').width - 40,
                                        marginLeft: 0,
                                        marginRight: 0
                                    }}
                                    onPress={() => this.props.navigation.navigate('FacilityUpdate', this.props.facilities)}
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
                                    onPress={() => this.props.facilityDelete(value.uid)}
                                >
                                    <Text>Remove</Text>
                                </Button>
                            </ListItem>
                        </Card>
                    </Content>
                );
            })
            );
        } else if (!this.props.status) {
            if (this.props.Loadding) {
                return (<Spinner />);
            }
            return (
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
                                    onPress={() => this.props.facilityForm({ name: 'Water', value: 'Yes' })}
                                    selected={this.props.Water === 'Yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.props.facilityForm({ name: 'Water', value: 'No' })}
                                    selected={this.props.Water === 'No'}
                                />
                            </CardItem>

                            {/* {
                            this.props.Water === 'Yes' ?
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
                        } */}
                        </Card>

                        <Card>
                            <CardItem>
                                <Text>Do you have Medicine Kit?</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={styles.textStyle}>Yes:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    //onPress={() => this.props.bStatusUpdate({ name: 'option', value: 'Rented' })}
                                    onPress={() => this.props.facilityForm({ name: 'Medicine', value: 'Yes' })}
                                    selected={this.props.Medicine === 'Yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.props.facilityForm({ name: 'Medicine', value: 'No' })}
                                    selected={this.props.Medicine === 'No'}
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
                                    onPress={() => this.props.facilityForm({ name: 'Play', value: 'Yes' })}
                                    selected={this.props.Play === 'Yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.props.facilityForm({ name: 'Play', value: 'No' })}
                                    selected={this.props.Play === 'No'}
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
                                    onPress={() => this.props.facilityForm({ name: 'Toilet', value: 'Yes' })}
                                    selected={this.props.Toilet === 'Yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.props.facilityForm({ name: 'Toilet', value: 'No' })}
                                    selected={this.props.Toilet === 'No'}
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
                                    onPress={() => this.props.facilityForm({ name: 'Infant', value: 'Yes' })}
                                    selected={this.props.Infant === 'Yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.props.facilityForm({ name: 'Infant', value: 'No' })}
                                    selected={this.props.Infant === 'No'}
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
                                    onPress={() => this.props.facilityForm({ name: 'Mother', value: 'Yes' })}
                                    selected={this.props.Mother === 'Yes'}
                                />
                                <Text style={styles.textStyle}>No:</Text>
                                <Radio
                                    // eslint-disable-next-line max-len
                                    onPress={() => this.props.facilityForm({ name: 'Mother', value: 'No' })}
                                    selected={this.props.Mother === 'No'}
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
                                onPress={this.onButtonPress.bind(this)}
                            >
                                <Text>Add</Text>
                            </Button>
                        </ListItem>
                    </Content>
                </ScrollView>
            );
        }
    }

    render() {
        return (<Container>
            {this.renderContent()}
        </Container>);
    }
}

const styles = StyleSheet.create({
    textStyle: {
        padding: 5
    }
});

const mapStateToProps = (state) => {
    const { Water, Medicine, Mother, Infant, Play, Toilet, status, Loadding } = state.facilityform;
    const facilities = _.map(state.facility, (val, uid) => {
        return { ...val, uid };
    });
    return { Water, Medicine, Mother, Infant, Play, Toilet, status, Loadding, facilities };
};

export default connect(mapStateToProps,
    { facilityForm, facilityCreate, facilityFetch, facilityDelete })(Facility);

