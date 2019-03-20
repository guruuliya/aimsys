import React, { Component } from 'react';
import { Text, View, Picker } from 'native-base';
import { CardSection, Card, } from '../Common';
import { Radio, CardItem, Form, Item, Label, Input } from 'native-base';
import { connect } from 'react-redux';
import { NutritionUpdate } from '../../actions/NutritionAction';
import firebase from 'firebase';


class ChildNutritionForm extends Component {
    state = {
        snapshotList: {},
        scores: {},
    };

    search(HNumber) {
        console.log('Hnumber', HNumber);
        const { currentUser } = firebase.auth();
        const db = firebase.database().ref(`/users/${currentUser.uid}/Maternal/ChildRegistration`)
        const query = db.orderByChild('HNumber').equalTo(HNumber)
        query.on('value', snapshot => {
            if (snapshot.val()) {
                this.setState({ scores: snapshot.val() });
            } else {
                this.setState({ scores: { noData: { CName: 'No Data' } } });
            }
        })
    }

    getPickerElements() {
        var pickerArr = [];
        var scores = this.state.scores;
        console.log('year', scores);
        var keys = Object.keys(scores);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var Name = scores[k].CName;
            pickerArr.push(<Picker.Item label={Name} value={Name} />);
        }
        return pickerArr;
    }

    calFun(text) {
        this.props.NutritionUpdate({ name: 'HNumber', value: text });
        this.search(text);
    }
    render() {


        return (
            <View>
                <Form>
                    <CardItem>
                        <Item floatingLabel>
                            <Label>Eneter HouseHold Number</Label>
                            <Input
                                autoCorrect={false}
                                onChangeText={this.calFun.bind(this)}
                                value={this.props.HNumber}
                            />
                        </Item>
                    </CardItem>

                    <CardItem>
                        <Item picker>
                            <Label>Select</Label>
                            <Picker selectedValue={this.props.CName}
                                style={[{ width: 290, height: 50, color: 'black' }]}
                                onValueChange={(value) => this.props.NutritionUpdate({ name: 'CName', value })}>
                                <Picker.Item label='Select Child Name' value='' />
                                {this.getPickerElements()}
                            </Picker>
                        </Item>
                    </CardItem>

                    <CardItem>
                        <Item floatingLabel>
                            <Label>Enter Child Age</Label>
                            <Input
                                autoCorrect={false}
                                onChangeText={value => this.props.NutritionUpdate({ name: 'Age', value })}
                                value={this.props.Age}
                            />
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item floatingLabel>
                            <Label>Enter Child Height</Label>
                            <Input
                                autoCorrect={false}
                                onChangeText={value => this.props.NutritionUpdate({ name: 'height', value })}
                                value={this.props.height}
                            />
                        </Item>
                    </CardItem>

                    <CardItem>
                        <Item floatingLabel>
                            <Label>Enter Child Weight</Label>
                            <Input
                                autoCorrect={false}
                                onChangeText={value => this.props.NutritionUpdate({ name: 'weight', value })}
                                value={this.props.weight}
                            />
                        </Item>
                    </CardItem>

                    <Card>
                        <CardItem>
                            <Text style={styles.textStyle1}>Underweight?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={{ marginLeft: 7, color: 'grey', fontSize: 16 }}>Yes:</Text>
                            <Radio onPress={() => this.props.NutritionUpdate({ name: 'under', value: 'Yes' })}
                                selected={this.props.under === 'Yes'}

                            />

                            <Text style={{ marginLeft: 10, color: 'grey', fontSize: 16 }}>No:</Text>
                            <Radio onPress={() => this.props.NutritionUpdate({ name: 'under', value: 'No' })}
                                selected={this.props.under === 'No'}
                            />
                        </CardItem>
                        {/* 
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
                    } */}
                    </Card>

                    <Card>
                        <CardItem>
                            <Text style={styles.textStyle1}>Wasting?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={{ marginLeft: 7, color: 'grey', fontSize: 16 }}>Yes:</Text>
                            <Radio onPress={() => this.props.NutritionUpdate({ name: 'wast', value: 'Yes' })}
                                selected={this.props.wast === 'Yes'}

                            />

                            <Text style={{ marginLeft: 10, color: 'grey', fontSize: 16 }}>No:</Text>
                            <Radio onPress={() => this.props.NutritionUpdate({ name: 'wast', value: 'No' })}
                                selected={this.props.wast === 'No'}

                            />
                        </CardItem>
                        {/* {
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
                    } */}
                    </Card>

                    <Card>
                        <CardItem>
                            <Text style={styles.textStyle1}>Stunting?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={{ marginLeft: 7, color: 'grey', fontSize: 16 }}>Yes:</Text>
                            <Radio onPress={() => this.props.NutritionUpdate({ name: 'stunt', value: 'Yes' })}
                                selected={this.props.stunt === 'Yes'}

                            />

                            <Text style={{ marginLeft: 10, color: 'grey', fontSize: 16 }}>No:</Text>
                            <Radio onPress={() => this.props.NutritionUpdate({ name: 'stunt', value: 'No' })}
                                selected={this.props.stunt === 'No'}

                            />
                        </CardItem>
                        {/* {
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
                    } */}
                    </Card>

                    <Card>
                        <CardItem>
                            <Text style={styles.textStyle1}>New born with low birth weight less then 2500 grams?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={{ marginLeft: 7, color: 'grey', fontSize: 16 }}>Yes:</Text>
                            <Radio onPress={() => this.props.NutritionUpdate({ name: 'lowbirth', value: 'Yes' })}
                                selected={this.props.lowbirth === 'Yes'}

                            />

                            <Text style={{ marginLeft: 10, color: 'grey', fontSize: 16 }}>No:</Text>
                            <Radio onPress={() => this.props.NutritionUpdate({ name: 'lowbirth', value: 'No' })}
                                selected={this.props.lowbirth === 'No'}

                            />
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Text style={styles.textStyle1}>Early iniation of Breastfeeding?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={{ marginLeft: 7, color: 'grey', fontSize: 16 }}>Yes:</Text>
                            <Radio onPress={() => this.props.NutritionUpdate({ name: 'breastfeed', value: 'Yes' })}
                                selected={this.props.breastfeed === 'Yes'}

                            />

                            <Text style={{ marginLeft: 10, color: 'grey', fontSize: 16 }}>No:</Text>
                            <Radio onPress={() => this.props.NutritionUpdate({ name: 'breastfeed', value: 'No' })}
                                selected={this.props.breastfeed === 'No'}

                            />
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Text style={styles.textStyle1}>Exclusive Breastfeeding?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={{ marginLeft: 7, color: 'grey', fontSize: 16 }}>Yes:</Text>
                            <Radio onPress={() => this.props.NutritionUpdate({ name: 'exfeed', value: 'Yes' })}
                                selected={this.props.exfeed === 'Yes'}

                            />

                            <Text style={{ marginLeft: 10, color: 'grey', fontSize: 16 }}>No:</Text>
                            <Radio onPress={() => this.props.NutritionUpdate({ name: 'exfeed', value: 'No' })}
                                selected={this.props.exfeed === 'No'}

                            />
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Text style={styles.textStyle1}>Children inititaed appropriate complementary feeding?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={{ marginLeft: 7, color: 'grey', fontSize: 16 }}>Yes:</Text>
                            <Radio onPress={() => this.props.NutritionUpdate({ name: 'cfeed', value: 'Yes' })}
                                selected={this.props.cfeed === 'Yes'}

                            />

                            <Text style={{ marginLeft: 10, color: 'grey', fontSize: 16 }}>No:</Text>
                            <Radio onPress={() => this.props.NutritionUpdate({ name: 'cfeed', value: 'No' })}
                                selected={this.props.cfeed === 'No'}

                            />
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Text style={styles.textStyle1}>Institutional deliveries?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={{ marginLeft: 7, color: 'grey', fontSize: 16 }}>Yes:</Text>
                            <Radio onPress={() => this.props.NutritionUpdate({ name: 'ideli', value: 'Yes' })}
                                selected={this.props.ideli === 'Yes'}

                            />

                            <Text style={{ marginLeft: 10, color: 'grey', fontSize: 16 }}>No:</Text>
                            <Radio onPress={() => this.props.NutritionUpdate({ name: 'ideli', value: 'No' })}
                                selected={this.props.ideli === 'No'}

                            />
                        </CardItem>
                    </Card>
                </Form>
            </View>

        );
    }
}

const styles = {

    // textStyle: {
    //     padding: 5,
    //     fontSize: 18,
    //     color: 'grey',

    // },
    buttonStyle: {
        alignItems: 'center'
    },
    textStyle1: {
        padding: 5,
        fontSize: 18,
        color: 'blue',
    }

};

const mapStateToProps = (state) => {
    console.log(state);
    const { HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli } = state.nutrition;
    return { HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli };
};

export default connect(mapStateToProps, { NutritionUpdate })(ChildNutritionForm);
