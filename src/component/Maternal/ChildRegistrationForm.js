import React, { Component } from 'react';
import { Text, View, Picker } from 'native-base';
import { CardSection, Card, Input } from '../Common';
import { Radio, CardItem } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { childUpdate } from '../../actions/ChildAction';
import firebase from 'firebase';


class ChildRegistrationForm extends Component {
    state = {
        snapshotList: '',
        scores: '',
        searchStatus: ''
    };

    search(HHNumber) {
        this.setState({ searchStatus: 'no' });
        console.log(HHNumber);
        const { currentUser } = firebase.auth();
        const db = firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseholdMember/${HHNumber}`)
        const query = db.orderByChild('HHNumber').equalTo(HHNumber)
        query.on('value', snapshot => {
            if (snapshot.val()) {
                this.setState({ scores: snapshot.val() });
            } else {
                this.setState({ scores: { noData: { HHName: 'No Data' } } });
            }
        })
    }

    getPickerElements() {
        var pickerArr = [];
        var scores = this.state.scores;
        var keys = Object.keys(scores);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var Name = scores[k].HHName;
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
            <CardSection style={styles.cardsectionStyle}>
                <Input
                    placeholder="Household Number"
                    autoCorrect={false}
                    label="Household Number"
                    value={this.props.HNumber}
                    onChangeText={this.calFun.bind(this)}
                />
            </CardSection>

            <CardSection>
                <Picker selectedValue={this.props.CMotherName}
                    style={[{ width: 290, height: 50, color: 'black' }]}
                    onValueChange={(value) => this.props.childUpdate({ name: 'CMotherName', value })}>
                    <Picker.Item label='Select Mother Name' value='' />
                    {this.getPickerElements()}
                </Picker>
            </CardSection>

            <CardSection>
                <Input
                    placeholder="Child Name"
                    label="Child Name"
                    autoCorrect={false}
                    onChangeText={value => this.props.childUpdate({ name: 'CName', value })}
                    value={this.props.CName}
                />
            </CardSection>


            {/* <CardSection>
                    <Input
                        placeholder="Child Mother Name"
                        label="Mother Name"
                        autoCorrect={false}
                        onChangeText={value => this.props.childUpdate({ name: 'CMotherName', value })}
                        value={this.props.CMotherName}
                    />
                </CardSection> */}

            <CardSection>
                {/* <Picker
                        selectedValue={this.state.pickerSelection}
                        style={[{ width: 290, height: 50, color: 'black' }, pickerStyle]}
                        onValueChange={(itemValue) => this.setState({ pickerSelection: itemValue })}>
                        <Picker.Item label='Salle de sport' value='default' />
                        {pickerArr}
                    </Picker> */}
            </CardSection>


            <CardSection>
                <CardItem>
                    <Text style={styles.textStyle}>Gender</Text>
                </CardItem>
                <CardItem>

                    <Text style={{ marginLeft: 75, color: 'grey', fontSize: 16 }}> Male</Text>

                    <Radio onPress={() => this.props.childUpdate({ name: 'option', value: 'Male' })}
                        selected={this.props.option === 'Male'}

                    />


                    <Text style={{ marginLeft: 10, color: 'grey', fontSize: 16 }}>Female</Text>

                    <Radio onPress={() => this.props.childUpdate({ name: 'option', value: 'Female' })}
                        selected={this.props.option === 'Female'}
                    />
                </CardItem>
            </CardSection>


            <CardSection>
                <CardItem>
                    <Text style={styles.textStyle}>Date Of Birth</Text>
                </CardItem>
                <CardItem>
                    <DatePicker style={{ marginLeft: 35 }}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        onDateChange={value => this.props.childUpdate({ name: 'DPickdob', value })}
                        date={this.props.DPickdob}
                    />
                </CardItem>

            </CardSection>
            <CardSection>
                <CardItem>
                    <Text style={styles.textStyle}>Registered date</Text>
                </CardItem>
                <CardItem>
                    <DatePicker style={{ marginLeft: 10 }}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        onDateChange={value => this.props.childUpdate({ name: 'DPickregdate', value })}
                        date={this.props.DPickregdate}
                    />
                </CardItem>
            </CardSection>
            <Card></Card>
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

    const { HNumber, CName, CMotherName, option, DPickdob, DPickregdate } = state.child;
    return { HNumber, CName, CMotherName, option, DPickdob, DPickregdate };
};

export default connect(mapStateToProps, { childUpdate })(ChildRegistrationForm);