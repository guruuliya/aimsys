import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs,Icon,TabHeading,Text } from 'native-base';
import { StyleSheet,  View, TouchableOpacity } from 'react-native';
import InjectionSearch from './InjectionSearch';
import InjectionRecords from './InjectionRecords';


class InjectionTab extends Component {
  static navigationOptions = {
    title: 'Injection Records',
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
          <Tab style={styles.tabstyle} heading={ <TabHeading style={styles.tabstyle}><Icon name="list" /><Text>List</Text></TabHeading>}>
            <InjectionSearch />
          </Tab>
          <Tab style={styles.tabstyle} heading={ <TabHeading style={styles.tabstyle}><Icon name="contact" /><Text>Create</Text></TabHeading>}>
            <InjectionRecords />
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

export default InjectionTab ;
