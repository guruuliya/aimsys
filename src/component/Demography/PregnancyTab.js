import React, { Component } from 'react';
import { Container, Tab, Tabs, Icon, TabHeading, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import Pregnancy from './Pregnancy';
import PregnancyList from './PregnancyList';

class PregnancyTab extends Component {
  static navigationOptions = {
    title: 'Expectant Women',
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
            <PregnancyList />
          </Tab>
          <Tab style={styles.tabstyle} heading={<TabHeading style={styles.tabstyle}><Icon name="contact" /><Text>create</Text></TabHeading>}>
            <Pregnancy />
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

export default PregnancyTab;
