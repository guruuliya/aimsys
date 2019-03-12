import firebase from 'firebase';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Picker } from 'react-native';
import Datepicker from 'react-native-datepicker';
import { Radio, CardItem } from  'native-base';
import { CardSection, Input } from '../Common';
import { pregnancyUpdate } from '../../actions';

class PregnancyForm extends Component {
    state = {
        snapshotList: {},
        scores: {}
    };
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
        let count=0;
        var pickerArr = [];
        var scores = this.state.scores;
        var keys = Object.keys(scores);
        console.log(keys);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            console.log('pregna',keys[i]);
            var gender=scores[k].sex;
            if(gender === 'Female')
            {
                var PregnantName = scores[k].HHName;
                pickerArr.push(<Picker.Item label={PregnantName} value={k} />);
                    count++;
            }    
        }
        if(count==0)
        pickerArr.push(<Picker.Item label={"No Data"} value={"NoData"} />);
        
        return pickerArr;
    }
    calFun(text) {
        this.props.pregnancyUpdate({ prop: 'HHNumber', value: text });
        this.search(text);
    }
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        placeholder="Enter The HouseHold Number"
                        
                        autoCorrect={false}
                        label="HouseHoldNumber"
                        value={this.props.HHNumber}
                        onChangeText={this.calFun.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <CardItem><Text style={{ fontSize: 18 }}>Pregnant Name</Text></CardItem>
                    <CardItem>
                        <Picker
                            selectedValue={this.props.PregnantName}
                            style={[{ width: 290, height: 50, color: 'black' }]}
                            onValueChange={(value) => this.props.pregnancyUpdate({ prop: 'PregnantName', value })}>
                            <Picker.Item label='Select Pregnant Name' value='default' />
                            {this.getPickerElements()}
                        </Picker>
                    </CardItem>
                </CardSection>
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
                        <Text>{ " \t\t\t\t\t\t\t\t\t"}</Text>
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
            </View>
        )

    }
}

const mapStateToProps = (state) => {
 const { HHNumber, PregnantName, NPregnant, LPerioddate, EDeliveryplace, FirstDose, SecondDose, DeliveryDate, Dplace, FirstWeightDate, Nchild } = state.PregnancyForm;
 return { HHNumber, PregnantName, NPregnant, LPerioddate, EDeliveryplace, FirstDose, SecondDose, DeliveryDate, Dplace, FirstWeightDate, Nchild };
};

export default connect(mapStateToProps, { pregnancyUpdate })(PregnancyForm);
