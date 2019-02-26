import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, ListItem, Icon, InputGroup, Button, CheckBox, Text, List, Body, Card, Form, Input, Label } from 'native-base';
class HouseholdView extends Component {
  static navigationOptions = {
    title: 'Household Information',
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
    this.state = {
      show: '',
    }
  }
  render() {
    const { HHNumber, HHName, sex, DOB, Status, Relationship, Phonenumber, Caste } = this.props.navigation.state.params.HouseHold;
    handleOnPress = () => this.setState({ "show": 1 })
    return (
      <Container style={styles.back} >
        <Content padder>
          <Form>
            <Card>
              <Text style={{ marginLeft: 95, fontSize: 24 }}>HouseHold Report </Text>
            </Card>
            <Card>
              <Text>{"\n"}</Text>
              <Text style={styles.contentview}>Household Number :{"\t"}{HHNumber} </Text>
              <Text style={styles.contentview}>Member Name :{"\t"}{HHName} </Text>
              <Text style={styles.contentview} >Gender :{"\t"}{sex} </Text>
              <Text style={styles.contentview} >DOB :{"\t"}{DOB} </Text>
              <Text style={styles.contentview}>Status:{"\t"}{Status} </Text>
              <Text style={styles.contentview}>Relationship :{"\t"}{Relationship} </Text>
              <Text style={styles.contentview} >Phonenumber:{"\t"}{Phonenumber} </Text>
              <Text style={styles.contentview}>Caste:{"\t"}{Caste} </Text>
              <Text>{"\n"}</Text>
            </Card>
            {(this.state.show) ? <Card style={styles.develop}><Text> Currently under development!!</Text></Card> : null
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

  contentview: {
    marginLeft: 10,
    fontSize: 18
  },
  develop: {
    backgroundColor: "#FFFF33",
  },
  cardtitle: {
    textAlign: "left",
    marginLeft: 10,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },

});

export default HouseholdView;
