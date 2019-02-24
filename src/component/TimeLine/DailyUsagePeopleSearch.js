import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, ListView, ScrollView,Picker,Alert,ActivityIndicator } from 'react-native';
import { View } from 'native-base';
import firebase from 'firebase';
import { Container, Header, Item, Input, Button } from 'native-base';
import { dailyUsageFetch } from '../../actions/DailyUsagePeopleAction';
import DailyUsagePeopleListItem from './DailyUsagePeopleListItem';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/FontAwesome';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class DailyUsagePeopleSearch extends Component {
  state = {};
 constructor(props) {
    super(props);
    this.state = {
      resultset: '',
      isLoading: true,
      pickerValue1:'',
      pickerValue2:'',
      pickerValue3:''
    }
  }

	componentWillMount() {
    this.props.dailyUsageFetch();
    this.createDataSource(this.props);
  }
	componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }
  createDataSource({ DailyUsagePeopleFetchKey }) {
	  var values=Object.values(DailyUsagePeopleFetchKey);
	  this.state = {
  "resultset": values
} 
  }
  
   renderRow(child) {
    return <DailyUsagePeopleListItem child={child} />;
  }

  //picker methods
  onPickerValueChange1 = (value, index) => {
    this.setState(
      {
        "pickerValue1": value
      },
      () => {
        console.log(this.state.pickerValue1);    
     //   Alert.alert("pickerValue1", this.state.pickerValue1);
      }
    );
    console.log(this.state.pickerValue1);
  }

  onPickerValueChange2 = (value, index) => {
    this.setState(
      {
        "pickerValue2": value
      },
      () => {
        console.log(this.state.pickerValue2);
      //  Alert.alert("pickerValue2", this.state.pickerValue2);
      }
    );
    console.log(this.state.pickerValue2);
  }

  onPickerValueChange3 = (value, index) => {

    this.setState(
      {
        "pickerValue3": value
      },
      () => {
        console.log(this.state.pickerValue3);
      //  Alert.alert("pickerValue3", this.state.pickerValue3);
      }
    );
    console.log(this.state.pickerValue3);
  }
  
  

  render() {
	  
    var json=this.state.resultset;
    
    console.log("before Filter");
    console.log(json);


	  var frombuttonyear = this.state.pickerValue1;
    var frombuttonmonth =this.state.pickerValue2;
    var frombuttondate=this.state.pickerValue3;


	      if ((frombuttonyear !== '')&&(frombuttonmonth !== '')&&(frombuttondate !== '')) {
      var jsonyear = json.filter(function (item) {

        if (((new Date(item.DPickdob).getFullYear() == frombuttonyear))&&((new Date(item.DPickdob).getMonth() == frombuttonmonth))&&((new Date(item.DPickdob).getDate() == frombuttondate))) return item;
      })

	  if(jsonyear==='')
	  {
		  jsonyear=this.state.resultset;
    }
      console.log("After Filter");
      console.log(jsonyear);
    }
    const dataSource = ds.cloneWithRows(jsonyear);
    return (
 <Container >
        <ScrollView>
          <Header searchBar rounded style={styles.searchtab}>
            <Picker
              style={styles.pickerstyle1}
              selectedValue={this.state.pickerValue1}
              onValueChange={this.onPickerValueChange1}
              itemStyle={styles.itemStyle}>
                   
              <Picker.Item label="Year" style={styles.pkitems} />
              <Picker.Item label="2014" style={styles.pkitems} value="2014" />
              <Picker.Item label="2015" style={styles.pkitems} value="2015" />
              <Picker.Item label="2016" style={styles.pkitems} value="2016" />
              <Picker.Item label="2017" style={styles.pkitems} value="2017" />
              <Picker.Item label="2018" style={styles.pkitems} value="2018" />
              <Picker.Item label="2019" style={styles.pkitems} value="2019" />
            </Picker>
            <Picker
             style={styles.pickerstyle2}
             selectedValue={this.state.pickerValue2}
            onValueChange={this.onPickerValueChange2}
                >
              <Picker.Item label="Month" />
              <Picker.Item label="Jan" value="0" />
              <Picker.Item label="Feb" value="1" />
              <Picker.Item label="March" value="2" />
              <Picker.Item label="April" value="3" />
              <Picker.Item label="May" value="4" />
              <Picker.Item label="June" value="5" />
              <Picker.Item label="July" value="6" />
              <Picker.Item label="August" value="7" />
              <Picker.Item label="Sept" value="8" />
              <Picker.Item label="Oct" value="9" />
              <Picker.Item label="Nov" value="10" />
              <Picker.Item label="Dec" value="11" />
            </Picker>
            <Picker
             style={styles.pickerstyle3}
             selectedValue={this.state.pickerValue3}
             onValueChange={this.onPickerValueChange3}  >
              <Picker.Item label="Day" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
              <Picker.Item label="12" value="12" />
              <Picker.Item label="13" value="13" />
              <Picker.Item label="14" value="14" />
              <Picker.Item label="15" value="15" />
              <Picker.Item label="16" value="16" />
              <Picker.Item label="17" value="17" />
              <Picker.Item label="18" value="18" />
              <Picker.Item label="19" value="19" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="21" value="21" />
              <Picker.Item label="22" value="22" />
              <Picker.Item label="23" value="23" />
              <Picker.Item label="24" value="24" />
              <Picker.Item label="25" value="25" />
              <Picker.Item label="26" value="26" />
              <Picker.Item label="27" value="27" />
              <Picker.Item label="28" value="28" />
              <Picker.Item label="29" value="29" />
              <Picker.Item label="30" value="30" />
              <Picker.Item label="31" value="31" />
            </Picker>
            {  (this.state.pickerValue1)&&(this.state.pickerValue2)&&(this.state.pickerValue3)? <Icon name="check" size={30} style={styles.pickertick} />:<ActivityIndicator size="large" color="#ffff" style={styles.pickertick2} /> } 
          </Header>
          <View >
           {(this.state.pickerValue1)&&(this.state.pickerValue2)&&(this.state.pickerValue3)? <ListView
              enableEmptySections
            dataSource={dataSource}
          renderRow={this.renderRow}
            >
            </ListView>:<ActivityIndicator size="large" color="#f7c744" style={styles.aistyle}/>}
          </View>
        </ScrollView>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  searchtab: {
    backgroundColor: '#f7c744',
    // borderColor: '#f7c744',
    // color:'#355870'
    flex:1,
    height:70
  },
  pickerstyle1: {
    height: 50, width: 100,
    backgroundColor: '#ffff',
    marginTop:10,
    marginRight:8,
    flex:0.3,
    paddingLeft:10,
    textAlign: 'center',
    alignItems: 'center'
  },
  pickerstyle2: {
    height: 50, width: 100,
    backgroundColor: '#ffff',
    marginTop:10,
    marginRight:8,
    flex:0.3,
    textAlign: 'center'
  },
  pickerstyle3: {
    height: 50, width: 100,
    backgroundColor: '#ffff',
    marginTop:10,
    marginRight:2,
    flex:0.3,
    paddingRight:10,
    textAlign: 'center'
  },
  aistyle:{

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
  
  ,
  pickertick:{
    flex:0.1,
   // backgroundColor: '#ffff',
    color: "#7CFC00",
    marginTop:19,
    marginLeft:6,
    //textAlign: 'center'
  },
  pickertick2:{
    flex:0.1,
   // backgroundColor: '#ffff',
    color: "#7CFC00",
    marginTop:6,
    marginLeft:6,
   // textAlign: 'center'
  },
  pkitems:{
    textAlign: 'center'
  },
  itemStyle: {
    fontSize: 15,
    height: 75,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
const mapStateToProps = state => {
  const DailyUsagePeopleFetchKey = _.map(state.DailyUsagePeopleFetchKey, (val, uid) => {
    return { ...val, uid };
  });
  return { DailyUsagePeopleFetchKey };
};

export default connect(mapStateToProps, { dailyUsageFetch })(DailyUsagePeopleSearch);