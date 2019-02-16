
import React, { Component } from 'react';
import { ListView } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { childFetch } from '../../actions/ChildAction';
import { Container, Header, Item, Input, Icon, Button, Text, ListItem } from 'native-base';
import ListChild from './ListChild';
import { Card, CardSection } from '../Common';

class ChildSearch extends Component {
  componentWillMount() {
    this.props.childFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ childF }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(childF);

  }
  renderRow(child) {

    return <ListChild child={child} />;
  }

  render() {
    console.log(this.props);
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="search" />
            <Input placeholder="Search" />
            <Icon name="people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Card>
          <CardSection>
            <ListView
              enableEmptySections
              dataSource={this.dataSource}
              renderRow={this.renderRow}
            />
          </CardSection>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const childF = _.map(state.childF, (val, uid) => {
    return { ...val, uid };

  });
  return { childF };
};



export default connect(mapStateToProps, { childFetch })(ChildSearch); 