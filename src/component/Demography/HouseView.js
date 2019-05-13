import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Confirm } from '../Common';
import { View, StyleSheet } from 'react-native';
import { HouseDelete } from '../../actions';
import { Container, Content, Button, Text, Form } from 'native-base';
import { withNavigation } from 'react-navigation';

class HouseView extends Component {

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
      showModal: false
    }
  }



  onAccept() {
    const { HHNumber } = this.props.navigation.state.params.HouseHold;
    console.log('HNUmber', HHNumber);
    const navigate = this.props.navigation;
    this.props.HouseDelete(this.props.navigation.state.params.HouseHold.uid, navigate, HHNumber);
    this.setState({ showModal: false });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    const { HHNumber, Address } = this.props.navigation.state.params.HouseHold;
    return (
      <Container style={styles.back} >
        <Content padder>
          <Form>
            <Card>
              <Text style={{ marginLeft: 95, fontSize: 24 }}>Household Report </Text>
            </Card>
            <Card>
              <Text>{"\n"}</Text>
              <Text style={styles.contentview}>Household Number :{"\t"}{HHNumber} </Text>
              <Text style={styles.contentview}>Location:{"\t"}{Address} </Text>
            </Card>
            {(this.state.show) ? <Card style={styles.develop}><Text> Currently under development!!</Text></Card> : null
            }
            <View style={styles.projectText} >
              <View style={styles.projectTextchild1}>
                <Button onPress={() => { this.props.navigation.navigate('HouseHoldNumberEdit', { HouseHold: this.props.navigation.state.params.HouseHold }) }}><Text>Edit</Text></Button>
              <Button style={styles.Buttons}onPress={() => this.setState({ showModal: !this.state.showModal })}><Text>Delete</Text></Button>
        </View>
              <Confirm 
              visible={this.state.showModal}
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}
              >
                Are you sure you want to delete this?
                </Confirm>

            </View>
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
  projectText: {
    flex: 3.0,
    flexDirection: 'column'
  },
  projectTextchild1:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  Buttons:{
    justifyContent: 'center',
    alignItems: 'center',
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
export default connect(null, { HouseDelete })(withNavigation(HouseView));

