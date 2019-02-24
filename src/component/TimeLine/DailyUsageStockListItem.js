import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { Container, Content, InputGroup, Button, CheckBox, List, Body, Card, Form, Input, Label, ActionSheet } from 'native-base';
import { withNavigation } from 'react-navigation';
import Moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome';
//import { ScrollView } from 'react-native-gesture-handler';

class DailyUsageStockListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  // constructor(){
  //     super();
  //     this.onRowPress = this.onRowPress.bind(this);
  //  }
  // onRowPress(){
  //    // console.log('onRowPress');
  //     console.log("----------START---------DailyUsageStockListItem----START---------------");
  //     const navigateAction = NavigationActions.navigate({
  //         routeName: 'DailyUsageStockView',

  //         params: {user: 'Lucy'},

  //       });
  //       console.log(routeName);
  //       console.log('______________');
  //       this.props.navigation.dispatch(navigateAction); 
  //    // const navigate = this.props.navigation;
  //    // console.log(navigate);
  //    //  console.log(this.props.navigation.navigate('DailyUsageStock',this.props.child));
  //     console.log("-----------END--------DailyUsageStockListItem-----END--------------");
  //     //this.props.navigation.navigate('DailyUsageStock');
  //     //console.log(this.props.navigation.navigate('DailyUsageStock'));
  // }
  render() {
    // const { }= this.props.child;
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
      DPickdobStock } = this.props.child;

    //const { navigate } = this.props.navigation;
    return (

      <View style={styles.projectRow} >
         <View style={styles.projectText} >

            <Text style={styles.itemName}  >Report of {"\t"}
              {DPickdobStock}
            </Text>
            <Text style={styles.itemDetails}>Last edited  {"\t"}
              {`${Moment(this.props.child).fromNow()}`}
            </Text>
          </View>
        
        
        <View style={styles.projectTextchild1}>

          <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('DailyUsageStockViewOption', { child: this.props.child }) }}>
        <View>
        <Icon name="eye" size={30} style={styles.moreIcon} />
              <Text style={styles.moreIcon} >View</Text>
       </View>
       </TouchableWithoutFeedback>
       </View>

       <View style={styles.projectTextchild2}>

          <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('DailyUsageStockView', { child: this.props.child }) }}>
        <View>
        <Icon name="edit" size={30} style={styles.moreIcon} />
              <Text style={styles.moreIcon} >Edit</Text>
       </View>
       </TouchableWithoutFeedback>
       </View>



       {/* <View style={styles.moreContainer}>
       <View>
        <Icon name="eye" size={30} style={styles.moreIcon} />
              <Text style={styles.moreIcon} >View</Text>
       </View>
       </View> */}
       {/* <View>
        <Icon name="eye" size={30} style={styles.moreIcon} />
              <Text style={styles.moreIcon} >View</Text>
       </View> */}
      

        {/* <View style={styles.moreContainer}>

          <Icon name="chevron-right" size={15} style={styles.moreIcon} />
        </View> */}

      </View>

    );
  }
}
const styles = StyleSheet.create({

  projectText: {
    flex: 0.7,
    flexDirection: 'column'
  },
  projectTextchild1: {
    flex: 0.2,
    flexDirection: 'column'
  },
  projectTextchild2: {
    flex: 0.1,
    flexDirection: 'column'
  },

  projectRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15,
  },

  itemName: {
    fontSize: 18,
    color: '#4A90E2',
  },

  itemDetails: {
    fontSize: 12,
    color: '#BBBBBB',
  },

  moreContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  moreIcon: {
    color: "#f7c744"
  }

});


export default withNavigation(DailyUsageStockListItem);
//export default DailyUsageStockListItem;