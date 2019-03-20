import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Container, Content, ListItem, Icon, InputGroup, Button, CheckBox, Text, List, Body, Card, Form, Input, Label } from 'native-base';
import { dailyUsageUpdate, dailyUsageCreate } from '../../actions';
import DatePicker from 'react-native-datepicker';

class DailyUsagePeople extends Component {

  static navigationOptions = {
    title: 'Timeline',
    headerStyle: {
      backgroundColor: '#355870',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  onButtonPress() {
    const { six_months_to_one_year, one_year_to_three_year, three_year_to_six_year, pw_prenatal, pw_postnatal, pw_3rdgrade, pw_4thgrade, DPickdob, total1, total2, totalfinal } = this.props;
    // console.log(this.props.navigation);
    console.log('inside onButtonPress');
    // const navigate = this.props.navigation;
    const navigate = this.props.navigation;

    this.props.dailyUsageCreate({
      six_months_to_one_year: six_months_to_one_year || 'No data entered for six_months_to_one_year',
      one_year_to_three_year: one_year_to_three_year || 'No data entered for one_year_to_three_year',
      three_year_to_six_year: three_year_to_six_year || 'No data entered for three_year_to_six_year',
      pw_prenatal: pw_prenatal || 'No data entered for pw_prenatal',
      pw_postnatal: pw_postnatal || 'No data entered for pw_postnatal',
      pw_3rdgrade: pw_3rdgrade || 'No data entered for pw_3rdgrade',
      pw_4thgrade: pw_4thgrade || 'No data entered for pw_4thgrade',
      DPickdob: DPickdob || 'No data entered for DPickdob',
      total1: total1 || 'No data entered for total1',
      total2: total2 || 'No data entered for total2',
      totalfinal: totalfinal || 'No data entered for totalfinal',
      navigate
    });

  }




  constructor(props) {
    super(props);
    this.state = { f1: '', f2: '', f3: '', f4: '', f5: '', f6: '', f7: '', result1: '', result2: '', result3: '', };
    this.state = { chosenDate: new Date() };
    // this.onRowPress = this.onRowPress.bind(this); 
    this.setDate = this.setDate.bind(this);
  }

  onRowPress() {
    console.log('inside rowpress');
    // console.log(this.props.navigation);
    //this.props.navigation;
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    //Dailyusage after insertion
    // console.log("Darshan-------------------------->");
    // console.log(this.props.child);
    // console.log("Darshan-------------------------->");

    var f1 = this.state.f1;
    var f2 = this.state.f2;
    var f3 = this.state.f3;
    var f4 = this.state.f4;
    var f5 = this.state.f5;
    var f6 = this.state.f6;
    var f7 = this.state.f7;
    //var total1 = this.state.total1;



    //  var total2 = this.state.total2;

    //  var totalfinal = this.state.totalfinal;

    const result1 = f1 && f2 && f3 ? f3 + f2 + f1 : null;
    const result2 = f4 && f5 && f6 && f7 ? f7 + f6 + f5 + f4 : null;
    const result3 = result1 && result2 ? result1 + result2 : null;

    console.log(this.props.one_year_to_three_year);
    this.props.six_months_to_one_year != '' && this.props.one_year_to_three_year != '' && this.props.three_year_to_six_year != '' ?
      this.props.dailyUsageUpdate({ name: 'total1', value: parseInt(this.props.six_months_to_one_year) + parseInt(this.props.one_year_to_three_year) + parseInt(this.props.three_year_to_six_year) }) : null;

    this.props.pw_prenatal != '' && this.props.pw_postnatal != '' && this.props.pw_3rdgrade != '' && this.props.pw_4thgrade != '' ?
      this.props.dailyUsageUpdate({ name: 'total2', value: parseInt(this.props.pw_prenatal) + parseInt(this.props.pw_postnatal) + parseInt(this.props.pw_3rdgrade) + parseInt(this.props.pw_4thgrade) }) : null;

    this.props.total1 != '' && this.props.total2 != '' ?
      this.props.dailyUsageUpdate({ name: 'totalfinal', value: parseInt(this.props.total1) + parseInt(this.props.total2) }) : null;


    return (

      <Container style={styles.back} >
        <Content padder>
          <Text>{"\n"}</Text>
          <Label>Fill the form for number of people who used the resources</Label>
          <Text>{"\n"}</Text>
          <Form>
            {/********************** Children****************************/}
            <Card>

              <Label style={styles.cardtitle}>Children</Label>

              {/**********************Food Quantity 1****************************/}
              <ListItem>
                <InputGroup >
                  <Label>Food Quantity 1 </Label>
                  <Input
                   // keyboardType='numeric'
                    //onChangeText= {(text) => this.setState({f1:parseInt(text)})} 
                    style={styles.input} placeholder="6 Months to 1 Year"
                    value={parseInt(this.props.six_months_to_one_year)}
                    placeholderTextColor="#FFFFFF" 
                    onChangeText={value => this.props.dailyUsageUpdate({ name: 'six_months_to_one_year', value })}

                  />
                </InputGroup>
              </ListItem>

              {/**********************Food Quantity 1****************************/}
              <ListItem>
                <InputGroup >
                  <Label >Food Quantity 1 </Label>
                  <Input
                 //   keyboardType='numeric'
                    // onChangeText={(text) => this.setState({ f2: parseInt(text) })}
                    style={styles.input} placeholder="1 Year to 3 Year"
                    value={parseInt(this.props.one_year_to_three_year)}
                    placeholderTextColor="#FFFFFF" 
                    onChangeText={value => this.props.dailyUsageUpdate({ name: 'one_year_to_three_year', value })}
                  />

                </InputGroup>
              </ListItem>

              {/**********************Food Quantity 1****************************/}
              <ListItem>
                <InputGroup >
                  <Label >Food Quantity 1 </Label>
                  <Input
                  //  keyboardType='numeric'
                    // onChangeText={(text) => this.setState({ f3: parseInt(text) })}
                    style={styles.input} placeholder="3 Year to 6 Year"
                    value={parseInt(this.props.three_year_to_six_year)}
                    placeholderTextColor="#FFFFFF" 
                    onChangeText={value => this.props.dailyUsageUpdate({ name: 'three_year_to_six_year', value })}
                  />
                </InputGroup>
              </ListItem>

              {/**********************Total****************************/}
              {this.props.six_months_to_one_year != '' && this.props.one_year_to_three_year != '' && this.props.three_year_to_six_year != '' ?
                <ListItem>
                  <InputGroup >
                    <Label >Total(1)<Text>{"\t\t\t\t\t\t\t\t\t\t\t\t"}</Text> </Label>
                    <Input style={styles.input}
                       placeholderTextColor="#FFFFFF" 
                      // onChangeText={(value) => parseInt(this.props.total1)}
                      editable={false} selectTextOnFocus={false}
                    >{this.props.total1}</Input>
                    {/* <Label ><Text style={styles.input}>{ result }</Text></Label> */}

                  </InputGroup>
                </ListItem> : null}

            </Card>




            {/**********************pregnant woman****************************/}
            <Card>

              <Label style={styles.cardtitle}>Pregnant Woman</Label>
              {/**********************Food Quantity 2****************************/}

              <ListItem>
                <InputGroup >
                  <Label>Food Quantity 2 </Label>
                  <Input
                    keyboardType='numeric'
                    placeholderTextColor="#FFFFFF" 
                    value={parseInt(this.props.pw_prenatal)}
                    onChangeText={value => this.props.dailyUsageUpdate({ name: 'pw_prenatal', value })}
                    style={styles.input} placeholder="Pregnant Woman (Prenatal)" />
                </InputGroup>
              </ListItem>
              {/* pw_prenatal,pw_postnatal,pw_3rdgrade,pw_4thgrade  */}
              {/**********************Food Quantity 2****************************/}
              <ListItem>
                <InputGroup >
                  <Label >Food Quantity 2 </Label>
                  <Input
                    keyboardType='numeric'
                    placeholderTextColor="#FFFFFF" 
                    value={parseInt(this.props.pw_postnatal)}
                    onChangeText={value => this.props.dailyUsageUpdate({ name: 'pw_postnatal', value })}
                    style={styles.input} placeholder="Pregnant Woman (Postnatal)" />
                </InputGroup>
              </ListItem>

              {/**********************Food Quantity 2****************************/}
              <ListItem>
                <InputGroup >
                  <Label >Food Quantity 2 </Label>
                  <Input
                    keyboardType='numeric'
                    placeholderTextColor="#FFFFFF" 
                    value={parseInt(this.props.pw_3rdgrade)}
                    onChangeText={value => this.props.dailyUsageUpdate({ name: 'pw_3rdgrade', value })}
                    style={styles.input} placeholder="3rd Grade" />
                </InputGroup>
              </ListItem>

              {/**********************Food Quantity 2****************************/}
              <ListItem>
                <InputGroup >
                  <Label >Food Quantity 2 </Label>
                  <Input
                    keyboardType='numeric'
                    placeholderTextColor="#FFFFFF" 
                    value={parseInt(this.props.pw_4thgrade)}
                    onChangeText={value => this.props.dailyUsageUpdate({ name: 'pw_4thgrade', value })}
                    style={styles.input} placeholder="4th Grade" />
                </InputGroup>
              </ListItem>
              {/**********************Total 2****************************/}

              {this.props.six_months_to_one_year != '' && this.props.one_year_to_three_year != '' && this.props.three_year_to_six_year != '' ?
                <ListItem>
                  <InputGroup >
                    <Label >Total(2)<Text>{"\t\t\t\t\t\t\t\t\t\t\t\t"}</Text> </Label>
                    <Input style={styles.input}
                    placeholderTextColor="#FFFFFF" 
                      // onChangeText={(value) => parseInt(this.props.total1)}
                      editable={false} selectTextOnFocus={false}
                    >{this.props.total2}</Input>
                    {/* <Label ><Text style={styles.input}>{ result }</Text></Label> */}

                  </InputGroup>
                </ListItem> : null}


            </Card>
            {/* 1.not displaying in textbox 2.conversion error  */}
            <Card>


              {/**********************Total****************************/}
              {this.props.total1 != '' && this.props.total2 != '' ?
                <ListItem>
                  <InputGroup >
                    <Label >Total(1)<Text>{"\t\t\t\t\t\t\t\t\t\t\t\t"}</Text> </Label>
                    <Input style={styles.input}
                    placeholderTextColor="#FFFFFF" 
                      // onChangeText={(value) => parseInt(this.props.total1)}
                      editable={false} selectTextOnFocus={false}
                    >{this.props.totalfinal}</Input>
                    {/* <Label ><Text style={styles.input}>{ result }</Text></Label> */}

                  </InputGroup>
                </ListItem> : null}


            </Card>

            <Card>
              <Text>{"\n"}</Text>
              <Label style={styles.dateblockalign}>Select the date for the above data</Label>
              <ListItem style={styles.dateblockalign}>
                {/* <Icon name="md-calendar" color="#4F8EF7" /> */}
                <DatePicker
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  onDateChange={value => this.props.dailyUsageUpdate({ name: 'DPickdob', value })}
                  date={this.props.DPickdob}
                  // defaultDate={new Date()}
                  // defaultDate={new Date()}
                  // minimumDate={new Date(2018, 1, 1)}
                  // // maximumDate={new Date(2050, 12, 31)}
                  // locale={"en"}
                  // timeZoneOffsetInMinutes={undefined}
                  // modalTransparent={false}
                  animationType={"fade"}
                  // androidMode={"default"}
                  placeHolderText="Click here to select date"
                  textStyle={{ color: "green" }}
                  placeHolderTextStyle={{ color: "#275DAD" }}
                // //onDateChange={this.setDate}
                // onDateChange={value => this.props.dailyUsageUpdate({ name: 'DPickdob', value })}
                // date={this.props.DPickdob}
                // disabled={false}
                />

              </ListItem>
              <Text>{"\n"}</Text>
            </Card>



            <Text>{"\n"}</Text>
            <Button block success onPress={this.onButtonPress.bind(this)}  >
              <Text>PROCEED</Text>
            </Button>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
          </Form>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#275DAD',
    opacity: 1,
    borderWidth: 1,
    color: '#FFFFFF',
    borderColor: 'white',
    textAlign: 'center',
    margin: 10,

  },
  back: {
    borderWidth: 1,
    borderColor: '#275DAD',
    //backgroundColor:'#203546',
  },

  cardtitle: {
    textAlign: "center",
    borderWidth: 1,
    borderColor: '#275DAD',
    paddingTop: 10,
    paddingBottom: 10,
    //backgroundColor:'#203546',
  },
  dateblockalign: {
    textAlign: 'center',
    justifyContent: 'center',

  }
});

const mapStateToProps = (state) => {
  console.log(state);
  const { six_months_to_one_year, one_year_to_three_year, three_year_to_six_year, pw_prenatal, pw_postnatal, pw_3rdgrade, pw_4thgrade, DPickdob, total1, total2, totalfinal } = state.DailyUsagePeopleKey;
  return { six_months_to_one_year, one_year_to_three_year, three_year_to_six_year, pw_prenatal, pw_postnatal, pw_3rdgrade, pw_4thgrade, DPickdob, total1, total2, totalfinal };
};
export default connect(mapStateToProps, { dailyUsageUpdate, dailyUsageCreate })(DailyUsagePeople);
