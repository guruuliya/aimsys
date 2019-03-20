import _ from 'lodash';
import React, { Component } from 'react';
import firebase from 'firebase';
import { Alert, TextInput, Picker,View,StyleSheet } from 'react-native';
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
            'Yes',
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
                
            <View style={styles.container}>
                <View style={styles.mainview}>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputs}
                            placeholder="Enter The HouseHold Number"
                            underlineColorAndroid='transparent'
                            autoCorrect={false}
                            placeholderTextColor='#355870'
                            value={this.props.HHNumber}
                            onChangeText={this.calFun.bind(this)}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Picker
                            style={styles.picker} itemStyle={styles.pickerItem}
                            selectedValue={this.props.PregnantName}
                            onValueChange={(value) => this.props.pregnancyUpdate({ prop: 'PregnantName', value })}
                        >
                            <Picker.Item label='Select Pregnant Name' value='default' />
                            {this.getPickerElements()}
                        </Picker>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputs}
                            placeholder="Enter Number of Pregnancies"
                            autoCorrect={false}
                            value={this.props.NPregnant}
                            onChangeText={value => this.props.pregnancyUpdate({ prop: 'NPregnant', value })}
                        />
                    </View>

                    <View style={styles.inputContainer}>

                        <Datepicker style={styles.dateblock}
                            placeholder="select date"
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            date={this.props.LPerioddate}
                            onDateChange={value => this.props.pregnancyUpdate({ prop: 'LPerioddate', value })}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Datepicker style={styles.dateblock}
                            placeholder="select date"
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            date={this.props.EDeliveryplace}
                            onDateChange={value => this.props.pregnancyUpdate({ prop: 'EDeliveryplace', value })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Datepicker style={styles.dateblock}
                            placeholder="select first dose"
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            date={this.props.FirstDose}
                            onDateChange={value => this.props.pregnancyUpdate({ prop: 'FirstDose', value })}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Datepicker style={styles.dateblock}
                            label=" 2nd Dose"
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            date={this.props.SecondDose}
                            onDateChange={value => this.props.pregnancyUpdate({ prop: 'SecondDose', value })}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Datepicker style={styles.dateblock}
                            label=" Delivery Date"
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            date={this.props.DeliveryDate}
                            onDateChange={value => this.props.pregnancyUpdate({ prop: 'DeliveryDate', value })}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Datepicker style={styles.dateblock}
                            label=" First weight Taken Date"
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            date={this.props.FirstWeightDate}
                            onDateChange={value => this.props.pregnancyUpdate({ prop: 'FirstWeightDate', value })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputs}
                            placeholder={"\t\t\t\t\t Enter Delivery Place"}
                            autoCorrect={false}
                            label={" Enter DeliveryPlace"}
                            value={this.props.Dplace}
                            onChangeText={value => this.props.pregnancyUpdate({ prop: 'Dplace', value })}
                        />
                    </View>

                </View>
        
                
                    {/* Update Buttons */}
                    <CardSection>
                        < Button onPress={this.onButtonPress.bind(this)}>
                            Save changes
                    </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>Delete</Button>
                    </CardSection>
                    <Confirm 
                    visible={this.state.showModal}
                        onAccept={this.onAccept.bind(this)}
                        onDecline={this.onDecline.bind(this)}
                    >
                        Are you sure you want to delete this?
                </Confirm>
                </View>              
            </ScrollView>
        );
    }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //
        // '#DCDCDC
        backgroundColor: '#275DAD',
    },

    mainview: {
        margin: 18
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        width: 350,
        height: 45,
        alignItems: 'center',
    },
    childtitle: {
        width: 350,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#275DAD',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputContainer: {

        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 350,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',

    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
        color: '#275DAD'
    },
    dateblock: {
        width: '40%',
        height: 45,
        marginLeft: 30,
        borderWidth: 0,
        // marginLeft: 16,
        // borderBottomColor: '#FFFFFF',
        flex: 1,
        color: '#355870',
        alignItems: 'center',
        justifyContent: 'center',
    },
    picker: {
        width: 200,
        borderColor: 'black',
        borderWidth: 1,
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    pickerItem: {
        color: '#1F1F1F'
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginRight: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 300,
        borderRadius: 30,
        backgroundColor: 'transparent'
    },
    btnByRegister: {
        height: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        width: 300,
        backgroundColor: 'transparent'
    },
    loginButton: {
        backgroundColor: '#00b5ec',

        shadowColor: '#808080',
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    },
    loginText: {
        color: 'white',
    },
    bgImage: {
        flex: 1,
        resizeMode,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    textByRegister: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    }
});
const mapStateToProps = (state) => {
    const { HHNumber, PregnantName, PhoneNumber, NPregnant, LPerioddate, EDeliveryplace, FirstDose, SecondDose, DeliveryDate, option, Dplace, FirstWeightDate, uid } = state.PregnancyForm;
    //console.log('inside edit',PregnantName);
    return { HHNumber, PregnantName, PhoneNumber, NPregnant, LPerioddate, EDeliveryplace, FirstDose, SecondDose, DeliveryDate, option, Dplace, FirstWeightDate, uid };
};
export default connect(mapStateToProps, { PregnancySave, pregnancyUpdate, PregnancyDelete })(PregnancyEdit);