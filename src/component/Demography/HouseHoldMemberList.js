import React, { Component } from 'React';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
//import console = require('console');

class HouseHoldMemberList extends Component {
    state={
        a:[],
        Nodata: '',
    }
    componentWillMount()
    {
        const { HHName, uid } = this.props.HouseHoldName;
        if (HHName !== '') {
            console.log('value of a here 1', HHName);
            this.setState({ a: HHName });
           
        } else {
            console.log('value of a here 2', HHName);
            
            this.setState({Nodata:'No Record Found'});
        }
    }

    render() {
      console.log('State',this.state.Nodata);
         return (
            this.state.Nodata !== '' ?
            <View style={styles.projectRow} >
                <View style={styles.projectText} >
                    <Text style={styles.itemName}>
                        {this.state.Nodata}
                    </Text>
                </View>
            </View>
            :
            <View style={styles.projectRow} >
                <View style={styles.projectText} >
                    <Text style={styles.itemName}> {"\t"} {this.state.a}</Text>

                    <Text style={styles.itemDetails}>Last edited {"\t"}
                        {`${Moment(this.props.HouseHold).fromNow()}`}
                    </Text>
                    
                </View>

                <View style={styles.projectTextchild1}>
                    <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('HouseHoldEdit', { Houseno: this.props.HouseHoldName }) }}>
                        <View>
                            <Icon
                                name="eye"
                                size={30}
                                style={styles.moreIcon}
                            />
                            <Text style={styles.moreIcon}  >Edit</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <View style={styles.projectTextchild2}>
                    <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('HouseholdView', { HouseHold: this.props.HouseHoldName }) }}>
                        <View>
                            <Icon
                                name="edit"
                                size={30}
                                style={styles.moreIcon}
                            />
                            <Text style={styles.moreIcon} >View</Text>
                        </View>
                    </TouchableWithoutFeedback>

                </View>

            </View>
        );
    }
}

const
    styles = StyleSheet.create({
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

export default withNavigation(HouseHoldMemberList);
