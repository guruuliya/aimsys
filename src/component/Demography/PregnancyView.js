import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Icon, Button, Text, Card, Form } from 'native-base';
import firebase from 'firebase';

let i = 0;

class PregnancyView extends Component {
  state = {
    a: [],
    aa: '',
    PhoneNumber: ''
  }

  static navigationOptions = {
    title: 'Pregnancy Report',
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
  componentWillMount() {

    const { HHNumber, PregnantName } = this.props.navigation.state.params.Pregnancy;
    this.search(HHNumber, PregnantName);
  }
  search(h, k) {
    console.log('inside search', h, k);
    const { currentUser } = firebase.auth();
    const db = firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseholdMember/${h}`);
    const query = db.orderByKey().equalTo(k);
    query.on('value', snapshot => {
      snapshot.forEach(_child => {
        this.setState({ a: _child.val().HHName });
        this.setState({ PhoneNumber: _child.val().Phonenumber });
      });
    });
  }
  render() {
    console.log('inside render', this.state.PhoneNumber);
    const { PhoneNumber, NPregnant, LPerioddate, EDeliveryplace, option, FirstDose, SecondDose, DeliveryDate, Dplace, FirstWeightDate, Nchild } = this.props.navigation.state.params.Pregnancy;
    return (
      <Container style={styles.back} >
        <Content padder>
          <Form>
            <Card>
              <Text style={{ marginLeft: 95, fontSize: 24 }}>Pregnancy Report </Text>
            </Card>
            <Card>
              <Text>{"\n"}</Text>
              <Text style={styles.contentview}>Expectant  Name :{"\t"}{this.state.a} </Text>
              <Text style={styles.contentview} >PhoneNumber :{"\t"}{this.state.PhoneNumber} </Text>
              <Text style={styles.contentview} >Number of Pregnant :{"\t"}{NPregnant} </Text>
              <Text style={styles.contentview}>Last Period:{"\t"}{LPerioddate} </Text>
             <Text style={styles.contentview}>FirstDose:{"\t"}{FirstDose} </Text>
              <Text style={styles.contentview}>SecondDose :{"\t"}{SecondDose} </Text>
              <Text style={styles.contentview}>Expected DeliveryDate:{"\t"}{DeliveryDate} </Text>
              <Text>{"\n"}</Text>
            </Card>
            {(this.state.show) ? <Card style={styles.develop}><Text> Currently under development!!</Text></Card> : null
            }
            <Text>{"\n"}</Text>
            {/* <Button block danger onPress={this.handleOnPress} >
              <Icon name="md-save" />
              <Text>EXPORT TO PDF</Text>
            </Button> */}
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

export default PregnancyView;
