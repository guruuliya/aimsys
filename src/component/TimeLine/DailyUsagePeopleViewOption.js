import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, ListItem, Icon, InputGroup, Button, CheckBox, Text, List, Body, Card, Form, Input, Label } from 'native-base';
import { dailyUsageUpdate,dailyUsageSaveChanges } from '../../actions';
import DatePicker from 'react-native-datepicker';

class DailyUsagePeopleViewOption extends Component {

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
  constructor(props) {
    super(props);
    this.state={
      show: '',
    }
  }





  render() {
    console.log("six_months_to_one_year")
     console.log(this.props.navigation.state.params)
    //console.log(this.props.navigation.state.params)
   const { six_months_to_one_year, one_year_to_three_year, three_year_to_six_year, pw_prenatal, pw_postnatal, pw_3rdgrade, pw_4thgrade, DPickdob, total1, total2, totalfinal } = this.props.navigation.state.params.child;
   handleOnPress = () => this.setState({ "show": 1 })
    return (
      <Container style={styles.back} >
        <Content padder>
         
          <Form>
            {/********************** Children****************************/}
            <Card>
            <Text>{"\n"}</Text>
            <Text style={styles.contentview}>Date :{"\t"}{DPickdob} </Text>
              <Label style={styles.cardtitle}>Children</Label>

              <Text style={styles.contentview}>Food Quantity 1 :{"\t"}{six_months_to_one_year} </Text>

              <Text style={styles.contentview} >Food Quantity 1 :{"\t"}{one_year_to_three_year} </Text>

              <Text style={styles.contentview} >Food Quantity 1 :{"\t"}{three_year_to_six_year} </Text>

              <Text style={styles.contentview}>Total(1) :{"\t"}{total1} </Text>


              <Label style={styles.cardtitle}>Pregnent woman</Label>
              <Text style={styles.contentview}>Food Quantity 2 :{"\t"}{pw_prenatal} </Text>

              <Text style={styles.contentview} >Food Quantity 2 :{"\t"}{pw_postnatal} </Text>

              <Text style={styles.contentview} >Food Quantity 2 :{"\t"}{pw_3rdgrade} </Text>

              <Text style={styles.contentview}>Food Quantity 2 :{"\t"}{pw_4thgrade} </Text>

              <Text style={styles.contentview}>Total(2) :{"\t"}{total2} </Text>



              <Text style={styles.contentview} >Total(Final) :{"\t"}{totalfinal} </Text>

              <Text>{"\n"}</Text>
             
            </Card>

            {(this.state.show)?<Card style={styles.develop}><Text> Currently under development!!</Text></Card>:null

            }

            <Text>{"\n"}</Text>
            <Button block danger onPress={this.handleOnPress} >
            <Icon name="md-save" />
              <Text>EXPORT TO PDF</Text>
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
  // main block container

  contentview:{
    marginLeft:10,
  },
  develop:{
    backgroundColor:"#FFFF33",
  },
  cardtitle: {
    textAlign: "left",
    marginLeft:10,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },

});

export default DailyUsagePeopleViewOption;


