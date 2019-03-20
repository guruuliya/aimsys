import _ from 'lodash';

import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { HouseholdFetch } from '../../actions/HouseholdActions';
import { Container, Header, Item, Input, Button, ListItem } from 'native-base';
import HouseHoldListItem from './HouseHoldListItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';


const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class HouseHoldFetch extends Component {
  state = {};
  componentWillMount() {
    this.props.HouseholdFetch();
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }
  createDataSource({ HouseHold }) {
    var values = Object.values(HouseHold);
    this.state = {
      "resultset": values,
      searchName: ''
    };
  }
  renderRow(HouseHold) {
    return <HouseHoldListItem HouseHold={HouseHold} />

  }
  onSearchValueChange = (value, index) => {
    this.setState({
      "searchName": value
    });
  }
  render() {
    const json = this.state.resultset;
    var name = this.state.searchName;
    if (name !== '') {
      var jsonsearch = json.filter(function (item) {
        const itemData = `${item.HHNumber} `;
        const textData = name;
        return itemData.indexOf(textData) > -1;
      });

      if (jsonsearch === '') {
        jsonsearch = this.state.resultset;
      }
    } else {
      jsonsearch = json;
    }
    if (Object.keys(jsonsearch).length === 0) {
      jsonsearch = { 0: { HHName: 'No Record Found', HHNumber: '', PregnantName: '' } };
    }
    const dataSource = ds.cloneWithRows(jsonsearch);
   
    return (
      <Container>
      <SearchBar
          placeholder="Type Here..."
          lightTheme
          round
          onChangeText={this.onSearchValueChange}
          //value={this.state.searchName}
        />
      
        <ListView
        enableEmptySections
        dataSource={dataSource}
        renderRow={this.renderRow}
      />

      </Container>
      
    );
  }
}

const mapStateToProps = state => {
  const HouseHold = _.map(state.HouseHold, (val, uid) => {
  
    return { ...val, uid };

  });
  return { HouseHold };
};
export default connect(mapStateToProps, { HouseholdFetch })(HouseHoldFetch);
