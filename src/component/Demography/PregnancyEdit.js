import _ from 'lodash';
import React, { Component } from 'react';
import firebase from 'firebase';
import { Alert, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Radio, CardItem } from 'native-base';
import Datepicker from 'react-native-datepicker';
import { pregnancyUpdate, PregnancySave, PregnancyDelete } from '../../actions/PregnancyActions';
import { Card, CardSection, Button, Confirm, Input } from '../Common';
import { ScrollView } from 'react-native-gesture-handler';
class PregnancyEdit extends Component {
    state = {
        snapshotList: {},
        scores: {},
        showModal: false
    };


    componentWillMount() {
        _.each(this.props.navigation.state.params.Pregnancy, (value, prop) => {
            this.props.pregnancyUpdate({ prop, value });
            //const {HHNumber}=this.props.navigation.state.params.Pregnancy;
            console.log('value here', this.props.navigation.state.params.Pregnancy.HHNumber);

            this.search(this.props.navigation.state.params.Pregnancy.HHNumber);

        });
    }


    onButtonPress() {
        const { PregnantName, PhoneNumber, NPregnant, LPerioddate, EDeliveryplace, FirstDose, SecondDose, DeliveryDate, option, Dplace, FirstWeightDate, Nchild, HHNumber } = this.props;
        this.props.PregnancySave({ PregnantName, PhoneNumber, NPregnant, LPerioddate, EDeliveryplace, FirstDose, SecondDose, DeliveryDate, option, Dplace, FirstWeightDate, Nchild, uid: this.props.navigation.state.params.Pregnancy.uid, HHNumber });
        Alert.alert(
            'Oops !',
            'Updated Successfully',
            [
                { text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            ],
            { cancelable: false }
        );
    }
    onAccept() {
        const navigate = this.props.navigation;
        this.props.PregnancyDelete({ uid: this.props.navigation.state.params.Pregnancy.uid }, navigate);
        this.setState({ showModal: false });
    }
    onDecline() {
        this.setState({ showModal: false });
    }
    search(HHNumber) {
        const { currentUser } = firebase.auth();
        const db = firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseholdMember/${HHNumber}`)
        const query = db.orderByChild('HHNumber').equalTo(HHNumber)
        query.on('value', snapshot => {
            if (snapshot.val()) {
                this.setState({ scores: snapshot.val() });
            } else {
                this.setState({ scores: { noData: { HHName: 'No Data' } } });
            }
        });
    }

    getPickerElements() {
        let count = 0;
        var pickerArr = [];
        var scores = this.state.scores;
        var keys = Object.keys(scores);
        console.log(keys);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            console.log('pregna', keys[i]);
            var gender = scores[k].sex;
            if (gender === 'Female') {
                var PregnantName = scores[k].HHName;
                pickerArr.push(<Picker.Item label={PregnantName} value={k} />);
                count++;
            }
        }
        if (count == 0)
            pickerArr.push(<Picker.Item label={"No Data"} value={"NoData"} />);

        return pickerArr;
    }
    calFun(text) {
        this.props.pregnancyUpdate({ prop: 'HHNumber', value: text });
        //this.search(text);
    }
    render() {
        return (
            <ScrollView>
                <Card>
                    {/* <PregnancyForm /> */}
                    <CardSection>
                        <Input
                            placeholder="Enter The HouseHold Number"
                            autoCorrect={false}
                            label="HouseHoldNumber"
                            value={this.props.HHNumber}
                            onChangeText={this.calFun.bind(this)}
                        />
                    </CardSection>

                    <CardItem>
                        <Picker
                            selectedValue={this.props.PregnantName}
                            style={[{ width: 290, height: 50, color: 'black' }]}
                            onValueChange={(value) => this.props.pregnancyUpdate({ prop: 'PregnantName', value })}>
                            <Picker.Item label='Select Pregnant Name' value='default' />
                            {this.getPickerElements()}
                        </Picker>
                    </CardItem>



                    <CardSection>
                        <Input
                            placeholder="Enter Number of Pregnant"
                            autoCorrect={false}
                            label="Number of Pregnant"
                            value={this.props.NPregnant}
                            onChangeText={value => this.props.pregnancyUpdate({ prop: 'NPregnant', value })}
                        />
                    </CardSection>

                    <CardSection>
                        <CardItem>
                            <Text style={{ fontSize: 18 }}> Enter Lat Period Date</Text>
                        </CardItem>
                        <CardItem>
                            <Text>{"\t\t\t"}</Text>
                            <Datepicker label=" Last Period Date"
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                date={this.props.LPerioddate}
                                onDateChange={value => this.props.pregnancyUpdate({ prop: 'LPerioddate', value })}
                            />
                        </CardItem>
                    </CardSection>

                    <CardSection>
                        <CardItem>
                            <Text style={{ fontSize: 18 }}>  Expected Delivery Date</Text>
                        </CardItem>
                        <CardItem>

                            <Datepicker
                                label=" Expected Delivery Date"
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                date={this.props.EDeliveryplace}
                                onDateChange={value => this.props.pregnancyUpdate({ prop: 'EDeliveryplace', value })}
                            />

                        </CardItem>
                    </CardSection>
                    <CardSection>
                        <Text>T T date</Text>
                    </CardSection>
                    <CardSection>
                        <CardItem>
                            <Text style={{ fontSize: 18 }}> Enter FirstDose</Text>
                        </CardItem>
                        <CardItem>
                            <Text>{" \t\t\t\t\t\t\t\t\t"}</Text>
                            <Datepicker
                                label=" 1st Dose"
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                date={this.props.FirstDose}
                                onDateChange={value => this.props.pregnancyUpdate({ prop: 'FirstDose', value })}
                            />
                        </CardItem>
                    </CardSection>

                    <CardSection>
                        <CardItem>
                            <Text style={{ fontSize: 18 }}> Enter Second Dose</Text>
                        </CardItem>
                        <CardItem>
                            <Text>{"\t\t\t\t\t"}</Text>
                            <Datepicker
                                label=" 2nd Dose"
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                date={this.props.SecondDose}
                                onDateChange={value => this.props.pregnancyUpdate({ prop: 'SecondDose', value })}
                            />
                        </CardItem>
                    </CardSection>
                    <CardSection>
                        <CardItem>
                            <Text style={{ fontSize: 18 }}> Enter Delivery Date</Text>
                        </CardItem>
                        <CardItem>
                            <Text>{"\t\t\t\t\t"}</Text>
                            <Datepicker
                                label=" Delivery Date"
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                date={this.props.DeliveryDate}
                                onDateChange={value => this.props.pregnancyUpdate({ prop: 'DeliveryDate', value })}
                            />
                        </CardItem>
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder={"\t\t\t\t\t Enter Delivery Place"}
                            autoCorrect={false}
                            label={" Enter DeliveryPlace"}
                            value={this.props.Dplace}
                            onChangeText={value => this.props.pregnancyUpdate({ prop: 'Dplace', value })}
                        />
                    </CardSection>

                    <CardSection>
                        <CardItem>
                            <Text style={{ fontSize: 18 }}> First weight Taken Date</Text>
                        </CardItem>
                        <CardItem>
                            <Datepicker
                                label=" First weight Taken Date"
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                date={this.props.FirstWeightDate}
                                onDateChange={value => this.props.pregnancyUpdate({ prop: 'FirstWeightDate', value })}
                            />
                        </CardItem>
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder={"\t\t\t\t\tChild Registered "}
                            autoCorrect={false}
                            label="Number of Child Registered "
                            value={this.props.Nchild}
                            onChangeText={value => this.props.pregnancyUpdate({ prop: 'Nchild', value })}
                        />
                    </CardSection>







                    {/* Update Buttons */}
                    <CardSection>
                        < Button onPress={this.onButtonPress.bind(this)}>
                            Save changes
                    </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>Delete</Button>
                    </CardSection>
                    <Confirm visible={this.state.showModal}
                        onAccept={this.onAccept.bind(this)}
                        onDecline={this.onDecline.bind(this)}
                    >
                        Are you sure you want to delete this?
                </Confirm>
                </Card>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    const { HHNumber, PregnantName, PhoneNumber, NPregnant, LPerioddate, EDeliveryplace, FirstDose, SecondDose, DeliveryDate, option, Dplace, FirstWeightDate, Nchild, uid } = state.PregnancyForm;
    //console.log('inside edit',PregnantName);
    return { HHNumber, PregnantName, PhoneNumber, NPregnant, LPerioddate, EDeliveryplace, FirstDose, SecondDose, DeliveryDate, option, Dplace, FirstWeightDate, Nchild, uid };
};
export default connect(mapStateToProps, { PregnancySave, pregnancyUpdate, PregnancyDelete })(PregnancyEdit);