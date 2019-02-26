import _ from 'lodash';
import React, { Component } from 'react';
import {StyleSheet } from 'react-native';
import { Container, Content,Icon,Button,Text,Card, Form} from 'native-base';

class PregnancyView extends Component {
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
    this.state={
      show: '',
    }
  }
render() {
   const{PregnantName, PhoneNumber, NPregnant, LPerioddate, EDeliveryplace, option, FirstDose, SecondDose, DeliveryDate, Dplace, FirstWeightDate, Nchild} = this.props.navigation.state.params.Pregnancy;
    return (
      <Container style={styles.back} >
        <Content padder>
          <Form>
            <Card>
            <Text style={{marginLeft:95,fontSize:24}}>Pregnancy Report </Text>
            </Card>
            <Card>
              <Text>{"\n"}</Text>
            <Text style={styles.contentview}>PregnantName Name :{"\t"}{PregnantName} </Text>
               <Text style={styles.contentview} >PhoneNumber :{"\t"}{PhoneNumber} </Text>
               <Text style={styles.contentview} >No of Pregnant :{"\t"}{NPregnant} </Text>
               <Text style={styles.contentview}>Last Period:{"\t"}{LPerioddate} </Text>
               <Text style={styles.contentview}>DeliveryPlace:{"\t"}{EDeliveryplace} </Text>
               <Text style={styles.contentview} >Status:{"\t"}{option} </Text>
              <Text style={styles.contentview}>FirstDose:{"\t"}{FirstDose} </Text>
               <Text style={styles.contentview}>SecondDose :{"\t"}{SecondDose} </Text>
               <Text style={styles.contentview}>DeliveryDate:{"\t"}{DeliveryDate} </Text>
               <Text style={styles.contentview} >Dplace:{"\t"}{Dplace} </Text>
              <Text style={styles.contentview}>FirstWeight:{"\t"}{FirstWeightDate} </Text>
               <Text style={styles.contentview}>Number of child  :{"\t"}{Nchild} </Text>
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
  contentview:{
    marginLeft:10,
    fontSize:18
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

export default PregnancyView;
