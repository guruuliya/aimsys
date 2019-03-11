import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { CardSection, Card, } from '../Common';
import { Radio, CardItem, ListItem, Text, Form, Item, Label, Container, Input, Icon } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { childUpdate } from '../../actions/ChildAction';
import firebase from 'firebase';


class ChildRegistrationForm extends Component {
    // eslint-disable-next-line react/sort-comp
    state = {
        snapshotList: {},
        scores: {},
    };

    search(HNumber) {
        this.setState({ searchStatus: 'no' });
        const { currentUser } = firebase.auth();
        const db = firebase.database().ref(`/users/${currentUser.uid}/Demographic/Pregnancy`);
        const query = db.orderByChild('HHNumber').equalTo(HNumber);
        query.on('value', snapshot => {
            if (snapshot.val()) {
                this.setState({ scores: snapshot.val() });
            } else {
                this.setState({ scores: { noData: { HHName: 'No Data' } } });
            }
        });
    }

    getPickerElements() {
        var pickerArr = [];
        var scores = this.state.scores;
        var keys = Object.keys(scores);
        for (let i = 0; i < keys.length; i++) {
            let k = keys[i];
            let Name = scores[k].PregnantName;
            // console.log('Pregnant Nam is ', Name);
            pickerArr.push(<Picker.Item label={Name} value={k} />);
        }

        return pickerArr;
    }

    calFun(text) {
        this.props.childUpdate({ name: 'HNumber', value: text });
        this.search(text);
    }

    render() {
        return (
            <View>
                <Form>
                    <CardItem>
                        <Item floatingLabel>
                            <Label>Enter Household Number</Label>
                            <Input
                                autoCorrect={false}
                                value={this.props.HNumber}
                                onChangeText={this.calFun.bind(this)}
                            />
                            {!!this.state.nameError && (
                                <Text style={{ color: 'red' }}>{this.state.nameError}</Text>
                            )}
                        </Item>
                    </CardItem>

                    <CardItem>
                        <Item picker>
                            <Label>Select{'\t\t\t\t\t\t'}</Label>
                            <Picker
                                Style={{ marginLeft: 230 }}
                                selectedValue={this.props.CMotherId}
                                style={[{ width: 290, height: 50, color: 'black' }]}
                                onValueChange={(value) => this.props.childUpdate({ name: 'CMotherId', value })}
                            >
                                <Picker.Item label='Select Mother Name' value='' />
                                {this.getPickerElements()}
                            </Picker>
                        </Item>
                    </CardItem>

                    <CardItem>
                        <Label>Status</Label>
                        <Text style={{ marginLeft: 40, color: 'grey', fontSize: 16 }}> Born</Text>
                        <Radio
                            onPress={() => this.props.childUpdate({ name: 'status', value: 'Born' })}
                            selected={this.props.status === 'Born'}
                        />
                        <Text style={{ marginLeft: 10, color: 'grey', fontSize: 16 }}>Not Alive</Text>
                        <Radio
                            onPress={() => this.props.childUpdate({ name: 'status', value: 'Died' })}
                            selected={this.props.status === 'Died'}
                        />
                    </CardItem>
                    <Text>{'\n'}</Text>

                    <View>
                        {
                            this.props.status === 'Born' ?

                                <Card>
                                    <Label Style={{ color: 'Red' }}>{'\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'}Enter Child Details</Label>
                                    <CardItem>
                                        <Item floatingLabel>
                                            <Label>Enter Child Name Here</Label>
                                            <Input

                                                autoCorrect={false}
                                                onChangeText={value => this.props.childUpdate({ name: 'CName', value })}
                                                value={this.props.CName}
                                            />
                                        </Item>
                                    </CardItem>

                                    <CardItem>
                                        <Label>Gender</Label>
                                        <Text style={{ marginLeft: 105, color: 'grey', fontSize: 16 }}> Male</Text>

                                        <Radio
                                            onPress={() => this.props.childUpdate({ name: 'option', value: 'Male' })}
                                            selected={this.props.option === 'Male'}

                                        />
                                        <Text style={{ marginLeft: 20, color: 'grey', fontSize: 16 }}>Female</Text>
                                        <Radio
                                            onPress={() => this.props.childUpdate({ name: 'option', value: 'Female' })}
                                            selected={this.props.option === 'Female'}
                                        />


                                    </CardItem>

                                    <CardSection>
                                        <CardItem>
                                            <Label>BabyType</Label>
                                            <Text style={{ marginLeft: 80, color: 'grey', fontSize: 16 }}> Single</Text>

                                            <Radio
                                                onPress={() => this.props.childUpdate({ name: 'babytype', value: 'single' })}
                                                selected={this.props.babytype === 'single'}

                                            />


                                            <Text style={{ marginLeft: 30, color: 'grey', fontSize: 16 }}>Twin</Text>

                                            <Radio
                                                onPress={() => this.props.childUpdate({ name: 'babytype', value: 'twin' })}
                                                selected={this.props.babytype === 'twin'}
                                            />
                                        </CardItem>
                                    </CardSection>


                                    <CardItem>
                                        <Picker
                                            selectedValue={this.state.health}
                                            style={{ height: 50, width: 100 }}
                                            onValueChange={(itemValue) =>
                                                this.props.childUpdate({ name: 'health', itemValue })
                                            }
                                        >
                                            <Picker.Item label="Healthy" value="healthy" />
                                            <Picker.Item label="Unhealthy" value="unhealthy" />
                                        </Picker>

                                    </CardItem>

                                    <CardItem>
                                        <Label>Date Of Birth</Label>
                                        <DatePicker
                                            style={{ marginLeft: 63, padding: 5 }}
                                            mode="date"
                                            placeholder="select date"
                                            format="YYYY-MM-DD"
                                            onDateChange={value => this.props.childUpdate({ name: 'DPickdob', value })}
                                            date={this.props.DPickdob}
                                        />
                                    </CardItem>

                                    <CardItem>
                                        <Label>Registered date</Label>
                                        <DatePicker
                                            style={{ marginLeft: 40, padding: 5 }}
                                            mode="date"
                                            placeholder="select date"
                                            format="YYYY-MM-DD"
                                            onDateChange={value => this.props.childUpdate({ name: 'DPickregdate', value })}
                                            date={this.props.DPickregdate}
                                        />
                                    </CardItem>
                                </Card>
                                : null
                        }
                    </View>
                </Form>
            </View >
        );
    }
}

const styles = {

    textStyle: {
        padding: 5,
        fontSize: 18,
    },
    buttonStyle: {
        alignItems: 'center'
    },


};

const mapStateToProps = (state) => {
    console.log(state);

    const { HNumber, CName, CMotherId, status, option, babytype, health, DPickdob, DPickregdate } = state.child;
    console.log('registration  mother id form ', CMotherId);
    return { HNumber, CName, CMotherId, status, option, babytype, health, DPickdob, DPickregdate };
};

export default connect(mapStateToProps, { childUpdate })(ChildRegistrationForm);
