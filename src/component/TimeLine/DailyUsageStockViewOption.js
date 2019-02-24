import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, ListItem, Icon, InputGroup, Button, CheckBox, Text, List, Body, Card, Form, Input, Label } from 'native-base';
import { dailyUsageStockUpdate,dailyUsageStockSaveChanges } from '../../actions';
import DatePicker from 'react-native-datepicker';

class DailyUsageStockViewOption extends Component {

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
    //console.log("six_months_to_one_year")
     console.log(this.props.navigation.state.params)
    //console.log(this.props.navigation.state.params)
   const { food_received,
      food_provided,
      food_remaining,
      nutritious_food,
      protien_food,
      oil,
      jaggery,
      chilli,
      egg,
      salt,
      grams,
      mustard_seeds,
      amalice_rich,
      green_gram,
      food_provided_today,
      Extra,
      DPickdobStock } = this.props.navigation.state.params.child;
   handleOnPress = () => this.setState({ "show": 1 })
    return (
      <Container style={styles.back} >
        <Content padder>
         
          <Form>
            {/********************** Children****************************/}
            <Card>
            <Text>{"\n"}</Text>
            <Text style={styles.contentview}>Date :{"\t"}{DPickdobStock} </Text>

              <Text style={styles.contentview}>Food Received :{"\t"}{food_received} </Text>

              <Text style={styles.contentview} >Food Provided :{"\t"}{food_provided} </Text>

              <Text style={styles.contentview} >Food Remaining :{"\t"}{food_remaining} </Text>

              <Text style={styles.contentview}>Nutritious Food :{"\t"}{nutritious_food} </Text>

              <Text style={styles.contentview}>Protien Food :{"\t"}{protien_food} </Text>

              <Text style={styles.contentview} >Oil :{"\t"}{oil} </Text>

              <Text style={styles.contentview} >Jaggery :{"\t"}{jaggery} </Text>

              <Text style={styles.contentview}>Chilli :{"\t"}{chilli} </Text>

              <Text style={styles.contentview}>Egg :{"\t"}{egg} </Text>

              <Text style={styles.contentview} >Salt :{"\t"}{salt} </Text>

			  <Text style={styles.contentview} >Grams :{"\t"}{grams} </Text>
			  
			   <Text style={styles.contentview} >Mustard Seeds :{"\t"}{mustard_seeds} </Text>
			    <Text style={styles.contentview} >Amalice Rich :{"\t"}{amalice_rich} </Text>
				 <Text style={styles.contentview} >Green gram :{"\t"}{green_gram} </Text>
			       <Text style={styles.contentview} >Food provided today :{"\t"}{food_provided_today} </Text>
				  <Text style={styles.contentview} >Extra :{"\t"}{Extra} </Text>
			   <Text style={styles.contentview} >Signature :{"\t"}</Text>
			  
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

export default DailyUsageStockViewOption;


