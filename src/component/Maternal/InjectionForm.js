import React, { Component } from 'react';
import { Text, View, Picker } from 'native-base';
import { CardSection, Card, Input } from '../Common';
import { Radio, CardItem } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { InjectionUpdate } from '../../actions/InjectionAction';
import firebase from 'firebase';


class InjectionForm extends Component {
    state = {
        snapshotList: '',
        scores: '',
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
        this.props.InjectionUpdate({ name: 'HNumber', value: text });
        this.search(text);
    }


    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        placeholder="Household Number"
                        autoCorrect={false}
                        label="Household Number"
                        onChangeText={this.calFun.bind(this)}
                        value={this.props.HNumber}
                    />
                </CardSection>

                <CardSection>
                    <Picker selectedValue={this.props.CName}
                        style={[{ width: 290, height: 50, color: 'black' }]}
                        onValueChange={(value) => this.props.InjectionUpdate({ name: 'CName', value })}>
                        <Picker.Item label='Select Child Name' value='' />
                        {this.getPickerElements()}
                    </Picker>
                </CardSection>

                <CardSection>
                    <CardItem>
                        <Text style={styles.textStyle}>Date Of Birth</Text>
                    </CardItem>
                    <CardItem>
                        <DatePicker style={{ marginLeft: 39 }}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            onDateChange={value => this.props.InjectionUpdate({ name: 'DPickdob', value })}
                            date={this.props.DPickdob}
                        />
                    </CardItem>
                </CardSection>

                <CardSection>
                    <CardItem>
                        <Text style={styles.textStyle}>polio After Birth</Text>
                    </CardItem>
                    <CardItem>
                        <DatePicker style={{ marginLeft: 16 }}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            onDateChange={value => this.props.InjectionUpdate({ name: 'poliodate', value })}
                            date={this.props.poliodate}
                        />
                    </CardItem>
                </CardSection>

                <CardSection>
                    <CardItem>
                        <Text style={styles.textStyle}>Hepatitis B0 Dose</Text>
                    </CardItem>
                    <CardItem>
                        <DatePicker style={{ marginLeft: 0 }}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            onDateChange={value => this.props.InjectionUpdate({ name: 'hepa', value })}
                            date={this.props.hepa}
                        />
                    </CardItem>

                </CardSection>

                <CardSection>
                    <CardItem>
                        <Text style={styles.textStyle}>BCG</Text>
                    </CardItem>
                    <CardItem>
                        <DatePicker style={{ marginLeft: 110 }}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            onDateChange={value => this.props.InjectionUpdate({ name: 'BCG', value })}
                            date={this.props.BCG}
                        />
                    </CardItem>
                </CardSection>

                <CardSection>
                    <CardItem>
                        <Text style={styles.textStyle}>DPT1</Text>
                    </CardItem>
                    <CardItem>
                        <DatePicker style={{ marginLeft: 102 }}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            onDateChange={value => this.props.InjectionUpdate({ name: 'DPT1', value })}
                            date={this.props.DPT1}
                        />
                    </CardItem>

                </CardSection>

                <CardSection>
                    <CardItem>
                        <Text style={styles.textStyle}>Hepatitis B1</Text>
                    </CardItem>
                    <CardItem>
                        <DatePicker style={{ marginLeft: 46 }}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            onDateChange={value => this.props.InjectionUpdate({ name: 'hepa1', value })}
                            date={this.props.hepa1}
                        />
                    </CardItem>

                </CardSection>

                <CardSection>
                    <CardItem>
                        <Text style={styles.textStyle}>OPV1</Text>
                    </CardItem>
                    <CardItem>
                        <DatePicker style={{ marginLeft: 101 }}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            onDateChange={value => this.props.InjectionUpdate({ name: 'OPV1', value })}
                            date={this.props.OPV1}
                        />
                    </CardItem>

                </CardSection>

                <CardSection>
                    <CardItem>
                        <Text style={styles.textStyle}>DPT2</Text>
                    </CardItem>
                    <CardItem>
                        <DatePicker style={{ marginLeft: 102 }}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            onDateChange={value => this.props.InjectionUpdate({ name: 'DPT2', value })}
                            date={this.props.DPT2}
                        />
                    </CardItem>

                </CardSection>

                <CardSection>
                    <CardItem>
                        <Text style={styles.textStyle}>Hepatitis B2</Text>
                    </CardItem>
                    <CardItem>
                        <DatePicker style={{ marginLeft: 46 }}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            onDateChange={value => this.props.InjectionUpdate({ name: 'hepa2', value })}
                            date={this.props.hepa2}
                        />
                    </CardItem>

                </CardSection>

                <CardSection>
                    <CardItem>
                        <Text style={styles.textStyle}>OPV2</Text>
                    </CardItem>
                    <CardItem>
                        <DatePicker style={{ marginLeft: 101 }}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            onDateChange={value => this.props.InjectionUpdate({ name: 'OPV2', value })}
                            date={this.props.OPV2}
                        />
                    </CardItem>

                </CardSection>

                <CardSection>
                    <CardItem>
                        <Text style={styles.textStyle}>DPT3</Text>
                    </CardItem>
                    <CardItem>
                        <DatePicker style={{ marginLeft: 102 }}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            onDateChange={value => this.props.InjectionUpdate({ name: 'DPT3', value })}
                            date={this.props.DPT3}
                        />
                    </CardItem>

                </CardSection>

                <CardSection>
                    <CardItem>
                        <Text style={styles.textStyle}>Hepatitis B3</Text>
                    </CardItem>
                    <CardItem>
                        <DatePicker style={{ marginLeft: 46 }}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            onDateChange={value => this.props.InjectionUpdate({ name: 'hepa3', value })}
                            date={this.props.hepa3}
                        />
                    </CardItem>

                </CardSection>

                <CardSection>
                    <CardItem>
                        <Text style={styles.textStyle}>OPV3</Text>
                    </CardItem>
                    <CardItem>
                        <DatePicker style={{ marginLeft: 101 }}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            onDateChange={value => this.props.InjectionUpdate({ name: 'OPV3', value })}
                            date={this.props.OPV3}
                        />
                    </CardItem>

                </CardSection>

                <CardSection>
                    <CardItem>
                        <Text style={styles.textStyle}>Dadara1</Text>
                    </CardItem>
                    <CardItem>
                        <DatePicker style={{ marginLeft: 80 }}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            onDateChange={value => this.props.InjectionUpdate({ name: 'dadara1', value })}
                            date={this.props.dadara1}
                        />
                    </CardItem>

                </CardSection>

                <CardSection>
                    <CardItem>
                        <Text style={styles.textStyle}>Nutriton 1st Dose</Text>
                    </CardItem>
                    <CardItem>
                        <DatePicker style={{ marginLeft: 7 }}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            onDateChange={value => this.props.InjectionUpdate({ name: 'nutri1', value })}
                            date={this.props.nutri1}
                        />
                    </CardItem>

                </CardSection>

                <CardSection>
                    <CardItem>
                        <Text style={styles.textStyle}>DPT Booster</Text>
                    </CardItem>
                    <CardItem>
                        <DatePicker style={{ marginLeft: 45 }}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            onDateChange={value => this.props.InjectionUpdate({ name: 'dptbooster', value })}
                            date={this.props.dptbooster}
                        />
                    </CardItem>

                </CardSection>

                <CardSection>
                    <CardItem>
                        <Text style={styles.textStyle}>Dadara2</Text>
                    </CardItem>
                    <CardItem>
                        <DatePicker style={{ marginLeft: 80 }}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            onDateChange={value => this.props.InjectionUpdate({ name: 'dadara2', value })}
                            date={this.props.dadara2}
                        />
                    </CardItem>

                </CardSection>

                <Card>
                    <CardItem>
                        <Text style={styles.textStyle}> First year injection has completed or not?</Text>
                    </CardItem>
                    <CardItem>
                        <Text style={styles.textStyle}>Yes:</Text>
                        <Radio onPress={() => this.props.InjectionUpdate({ name: 'complete', value: 'Yes' })}
                            selected={this.props.complete === 'Yes'}

                        />

                        <Text style={styles.textStyle}>No:</Text>
                        <Radio onPress={() => this.props.InjectionUpdate({ name: 'complete', value: 'No' })}
                            selected={this.props.complete === 'No'}

                        />
                    </CardItem>
                </Card>

            </View>

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
    const { HNumber, CName, DPickdob, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2, complete } = state.injection;
    return { HNumber, CName, DPickdob, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2, complete };
};

export default connect(mapStateToProps, { InjectionUpdate })(InjectionForm);