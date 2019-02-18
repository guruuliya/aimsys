import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs,Icon,TabHeading,Text } from 'native-base';
import { StyleSheet,  View, TouchableOpacity } from 'react-native';
 import ChildSearch  from './ChildSearch';
 import ChildRegistration from './ChildRegistration';

class ChildTab extends Component {
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
        {/* <Header hasTabs /> */}
        <Tabs style={styles.tabstyle}>
          <Tab style={styles.tabstyle} heading={ <TabHeading style={styles.tabstyle}><Icon name="list" /><Text>Search</Text></TabHeading>}>
            <ChildSearch />
          </Tab>
          <Tab style={styles.tabstyle} heading={ <TabHeading style={styles.tabstyle}><Icon name="contact" /><Text>Create</Text></TabHeading>}>
            <ChildRegistration />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tabstyle: {
   // backgroundColor: '',
  }
});

export default ChildTab ;
