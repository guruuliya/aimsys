import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { HouseholdFetch } from '../../actions/HouseholdActions';
import { Container, Header, Item, Input, Icon, Button, ListItem } from 'native-base';
import HouseHoldListItem from './HouseHoldListItem';

class HouseHoldFetch extends Component {
  componentWillMount() {
    this.props.HouseholdFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ HouseHold }) {
   
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(HouseHold);   
  }

  renderRow(HouseHold)
  {
    return <HouseHoldListItem HouseHold={HouseHold}/>
  }

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="Search" />
            <Input placeholder="Search" />
            <Icon name="people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      
        <ListView
        enableEmptySections
        dataSource={this.dataSource}
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
