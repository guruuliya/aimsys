
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, ListItem, Icon, InputGroup, Button, CheckBox, Text, List, Body, Card, Form, Input, Label } from 'native-base';

class NutritionView extends Component {

  static navigationOptions = {
    title: 'Child Registration',
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
    console.log("HNumber");
     console.log(this.props.navigation.state.params)
   const {  HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli } = this.props.navigation.state.params.nutrition;
   handleOnPress = () => this.setState({ "show": 1 })
    return (
      <Container style={styles.back} >
        <Content padder>
         
          <Form>
            {/********************** Children****************************/}
            <Card>
            <Text>{"\n"}</Text>
            <Text style={styles.contentview}>Household Number :{"\t"}{HNumber} </Text>

              <Text style={styles.contentview}>Child Name :{"\t"}{ CName} </Text>

              <Text style={styles.contentview} >Age :{"\t"}{Age} </Text>

              <Text style={styles.contentview} >Hieght :{"\t"}{height} </Text>

              <Text style={styles.contentview}>Weight:{"\t"}{weight} </Text>

              <Text style={styles.contentview}>Underweight? :{"\t"}{under} </Text>

              <Text style={styles.contentview}>Wasting? :{"\t"}{wast} </Text>
              <Text style={styles.contentview}>Stunting? :{"\t"}{stunt} </Text>
              <Text style={styles.contentview}>New born with low birth weight less then 2500 grams? :{"\t"}{ lowbirth} </Text>
              <Text style={styles.contentview}>Early iniation of Breastfeeding? :{"\t"}{breastfeed} </Text>
              <Text style={styles.contentview}>Exclusive Breastfeeding? :{"\t"}{ exfeed} </Text>
              <Text style={styles.contentview}>Children inititaed appropriate complementary feeding? :{"\t"}{cfeed} </Text>
              <Text style={styles.contentview}>Institutional deliveries? :{"\t"}{ideli} </Text>

              <Text>{"\n"}</Text>
             
            </Card>

            {(this.state.show)?<Card style={styles.develop}><Text> Currently under development!!</Text></Card>:null

            }

            <Text>{"\n"}</Text>
           
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

export default NutritionView;
