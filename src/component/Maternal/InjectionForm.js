/* eslint-disable max-len */
import React, { Component } from 'react';
import { Radio, CardItem, Label, Form, Item, Input } from 'native-base';
import firebase from 'firebase';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { Text, View, Picker } from 'react-native';
import { CardSection, Card } from '../Common';
import { InjectionUpdate } from '../../actions/InjectionAction';


class InjectionForm extends Component {
    state = {
        snapshotList: {},
        scores: {},
    };
    // eslint-disable-next-line react/sort-comp
    search(HNumber) {
        console.log('Hnumber', HNumber);
        const { currentUser } = firebase.auth();
        const db = firebase.database().ref(`/users/${currentUser.uid}/Maternal/ChildRegistration`);
        const query = db.orderByChild('HNumber').equalTo(HNumber);
        query.on('value', snapshot => {
            if (snapshot.val()) {
                this.setState({ scores: snapshot.val() });
            } else {
                this.setState({ scores: { noData: { CName: 'No Data' } } });
            }
        });
    }

    getPickerElements() {
        const pickerArr = [];
        const scores = this.state.scores;
        console.log('year', scores);
        const keys = Object.keys(scores);
        for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            const Name = scores[k].CName;
            pickerArr.push(<Picker.Item label={Name} value={k} />);
        }
        return pickerArr;
    }

    calFun(text) {
        this.props.InjectionUpdate({ name: 'HNumber', value: text });
        this.search(text);
    }


    render() {
        return (
            <View>
                <Form>
                    <CardItem >
                        <Item floatingLabel>
                            <Label>Enter HouseHold Number</Label>
                            <Input
                                autoCorrect={false}
                                label="Household Number"
                                onChangeText={this.calFun.bind(this)}
                                value={this.props.HNumber}
                            />
                        </Item>
                    </CardItem>

                    <CardItem>
                        <Item picker>
                            <Label>Select{'\t\t\t\t\t\t\t\t'}</Label>
                            <Picker
                                Style={{ marginRight: 10 }}
                                selectedValue={this.props.CName}
                                style={[{ width: 290, height: 50, color: 'black' }]}
                                onValueChange={(value) => this.props.InjectionUpdate({ name: 'CName', value })}
                            >
                                <Picker.Item label='Select Child Name' value='' />
                                {this.getPickerElements()}
                            </Picker>
                        </Item>
                    </CardItem>

                    <CardItem>
                        <Item picker>
                            <Label>Select{'\t\t\t\t\t\t\t\t'}</Label>
                            <Picker
                                Style={{ marginLeft: 230 }}
                                selectedValue={this.props.update}
                                style={[{ width: 290, height: 50, color: 'black' }]}
                                onValueChange={(value) =>
                                    this.props.InjectionUpdate({ name: 'update', value })
                                }
                            >
                                <Picker.Item label="Select a Vacination" value="" />
                                <Picker.Item label="Polio After birth" value="polio" />
                                <Picker.Item label="Hepatitis B0" value="hepatitis" />
                                <Picker.Item label="BCG" value="bcg" />
                                <Picker.Item label="DPT1" value="dpt1" />
                                <Picker.Item label="Hepatitis B1" value="hepatitis1" />
                                <Picker.Item label="OPV1" value="opv1" />
                                <Picker.Item label="DPT2" value="dpt2" />
                                <Picker.Item label="Hepatitis B2" value="hepatitis2" />
                                <Picker.Item label="OPV2" value="opv2" />
                                <Picker.Item label="DPT3" value="dpt3" />
                                <Picker.Item label="Hepatitis B3" value="hepatitis3" />
                                <Picker.Item label="OPV3" value="opv3" />
                                <Picker.Item label="Dadara1" value="dadara1" />
                                <Picker.Item label="Nutririon 1st" value="nutrition1" />
                                <Picker.Item label="DPTBooster" value="dptbooster" />
                                <Picker.Item label="Dadara2" value="dadara2" />
                            </Picker>
                        </Item>
                    </CardItem>

                    {
                        this.props.update === 'polio' ?
                            <CardSection>
                                <CardItem>
                                    <Text style={styles.textStyle}>polio After Birth</Text>
                                </CardItem>
                                <CardItem>
                                    <DatePicker
                                        style={{ marginLeft: 16 }}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'poliodate', value })}
                                        date={this.props.poliodate}
                                    />
                                </CardItem>
                            </CardSection>
                            : null
                    }

                    {
                        this.props.update === 'hepatitis' ?
                            <CardSection>
                                <CardItem>
                                    <Text style={styles.textStyle}>Hepatitis B0 Dose</Text>
                                </CardItem>
                                <CardItem>
                                    <DatePicker
                                        style={{ marginLeft: 0 }}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'hepa', value })}
                                        date={this.props.hepa}
                                    />
                                </CardItem>
                            </CardSection>
                            : null
                    }

                    {
                        this.props.update === 'bcg' ?
                            <CardSection>
                                <CardItem>
                                    <Text style={styles.textStyle}>BCG</Text>
                                </CardItem>
                                <CardItem>
                                    <DatePicker
                                        style={{ marginLeft: 110 }}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'BCG', value })}
                                        date={this.props.BCG}
                                    />
                                </CardItem>
                            </CardSection>
                            : null
                    }

                    {
                        this.props.update === 'dpt1' ?
                            <CardSection>
                                <CardItem>
                                    <Text style={styles.textStyle}>DPT1</Text>
                                </CardItem>
                                <CardItem>
                                    <DatePicker
                                        style={{ marginLeft: 102 }}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'DPT1', value })}
                                        date={this.props.DPT1}
                                    />
                                </CardItem>
                            </CardSection>
                            : null
                    }

                    {
                        this.props.update === 'hepatitis1' ?
                            <CardSection>
                                <CardItem>
                                    <Text style={styles.textStyle}>Hepatitis B1</Text>
                                </CardItem>
                                <CardItem>
                                    <DatePicker
                                        style={{ marginLeft: 46 }}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'hepa1', value })}
                                        date={this.props.hepa1}
                                    />
                                </CardItem>
                            </CardSection>
                            : null
                    }

                    {
                        this.props.update === 'opv1' ?
                            <CardSection>
                                <CardItem>
                                    <Text style={styles.textStyle}>OPV1</Text>
                                </CardItem>
                                <CardItem>
                                    <DatePicker
                                        style={{ marginLeft: 101 }}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'OPV1', value })}
                                        date={this.props.OPV1}
                                    />
                                </CardItem>
                            </CardSection>
                            : null
                    }

                    {
                        this.props.update === 'dpt2' ?
                            <CardSection>
                                <CardItem>
                                    <Text style={styles.textStyle}>DPT2</Text>
                                </CardItem>
                                <CardItem>
                                    <DatePicker
                                        style={{ marginLeft: 102 }}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'DPT2', value })}
                                        date={this.props.DPT2}
                                    />
                                </CardItem>
                            </CardSection>
                            : null
                    }

                    {
                        this.props.update === 'hepatitis2' ?
                            <CardSection>
                                <CardItem>
                                    <Text style={styles.textStyle}>Hepatitis B2</Text>
                                </CardItem>
                                <CardItem>
                                    <DatePicker
                                        style={{ marginLeft: 46 }}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'hepa2', value })}
                                        date={this.props.hepa2}
                                    />
                                </CardItem>
                            </CardSection>
                            : null
                    }

                    {
                        this.props.update === 'opv2' ?
                            <CardSection>
                                <CardItem>
                                    <Text style={styles.textStyle}>OPV2</Text>
                                </CardItem>
                                <CardItem>
                                    <DatePicker
                                        style={{ marginLeft: 101 }}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'OPV2', value })}
                                        date={this.props.OPV2}
                                    />
                                </CardItem>
                            </CardSection>
                            : null
                    }

                    {
                        this.props.update === 'dpt3' ?
                            <CardSection>
                                <CardItem>
                                    <Text style={styles.textStyle}>DPT3</Text>
                                </CardItem>
                                <CardItem>
                                    <DatePicker
                                        style={{ marginLeft: 102 }}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'DPT3', value })}
                                        date={this.props.DPT3}
                                    />
                                </CardItem>
                            </CardSection>
                            : null
                    }

                    {
                        this.props.update === 'hepatitis3' ?
                            <CardSection>
                                <CardItem>
                                    <Text style={styles.textStyle}>Hepatitis B3</Text>
                                </CardItem>
                                <CardItem>
                                    <DatePicker
                                        style={{ marginLeft: 46 }}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'hepa3', value })}
                                        date={this.props.hepa3}
                                    />
                                </CardItem>
                            </CardSection>
                            : null
                    }

                    {
                        this.props.update === 'opv3' ?
                            <CardSection>
                                <CardItem>
                                    <Text style={styles.textStyle}>OPV3</Text>
                                </CardItem>
                                <CardItem>
                                    <DatePicker
                                        style={{ marginLeft: 101 }}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'OPV3', value })}
                                        date={this.props.OPV3}
                                    />
                                </CardItem>
                            </CardSection>
                            : null
                    }

                    {
                        this.props.update === 'dadara1' ?
                            <CardSection>
                                <CardItem>
                                    <Text style={styles.textStyle}>Dadara1</Text>
                                </CardItem>
                                <CardItem>
                                    <DatePicker
                                        style={{ marginLeft: 80 }}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'dadara1', value })}
                                        date={this.props.dadara1}
                                    />
                                </CardItem>
                            </CardSection>
                            : null
                    }

                    {
                        this.props.update === 'nutrition1' ?
                            <CardSection>
                                <CardItem>
                                    <Text style={styles.textStyle}>Nutriton 1st Dose</Text>
                                </CardItem>
                                <CardItem>
                                    <DatePicker
                                        style={{ marginLeft: 7 }}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'nutri1', value })}
                                        date={this.props.nutri1}
                                    />
                                </CardItem>
                            </CardSection>
                            : null
                    }

                    {
                        this.props.update === 'dptbooster' ?
                            <CardSection>
                                <CardItem>
                                    <Text style={styles.textStyle}>DPT Booster</Text>
                                </CardItem>
                                <CardItem>
                                    <DatePicker
                                        style={{ marginLeft: 45 }}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'dptbooster', value })}
                                        date={this.props.dptbooster}
                                    />
                                </CardItem>
                            </CardSection>
                            : null
                    }

                    {
                        this.props.update === 'dadara2' ?
                            <CardSection>
                                <CardItem>
                                    <Text style={styles.textStyle}>Dadara2</Text>
                                </CardItem>
                                <CardItem>
                                    <DatePicker
                                        style={{ marginLeft: 80 }}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'dadara2', value })}
                                        date={this.props.dadara2}
                                    />
                                </CardItem>
                            </CardSection>
                            : null
                    }

                    <Card>
                        <CardItem>
                            <Text style={styles.textStyle}> First year injection has completed or not?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.textStyle}>Yes:</Text>
                            <Radio
                                onPress={() => this.props.InjectionUpdate({ name: 'complete', value: 'Yes' })}
                                selected={this.props.complete === 'Yes'}

                            />
                            <Text style={styles.textStyle}>No:</Text>
                            <Radio
                                onPress={() => this.props.InjectionUpdate({ name: 'complete', value: 'No' })}
                                selected={this.props.complete === 'No'}
                            />
                        </CardItem>
                    </Card>
                </Form>
            </View >

        );
    }
}

const styles = {

    textStyle: {
        padding: 5,
        fontSize: 18,
        color: 'blue',
    },
    buttonStyle: {
        alignItems: 'center'
    },

};

const mapStateToProps = (state) => {
    console.log(state);
    const { HNumber, CName, DPickdob, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2, complete, update } = state.injection;
    return { HNumber, CName, DPickdob, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2, complete, update };
};

export default connect(mapStateToProps, { InjectionUpdate })(InjectionForm);
