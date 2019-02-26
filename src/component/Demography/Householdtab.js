import React, { Component } from 'react';
import { Container, Tab, Tabs, Icon, TabHeading, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import HouseHoldFetch from './HouseHoldFetch';
import HouseHoldNumber from './HouseHoldNumber';
class Householdtab extends Component {
  static navigationOptions = {
    title: 'Registration',
    headerStyle: {
      backgroundColor: '#203546',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <Container>
        <Tabs style={styles.tabstyle}>
          <Tab style={styles.tabstyle} heading={<TabHeading style={styles.tabstyle}><Icon name="" /><Text>search</Text></TabHeading>}>
            <HouseHoldFetch />
          </Tab>
          <Tab style={styles.tabstyle} heading={<TabHeading style={styles.tabstyle}><Icon name="contact" /><Text>create</Text></TabHeading>}>
            <HouseHoldNumber />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tabstyle: {
  }
});
export default Householdtab;