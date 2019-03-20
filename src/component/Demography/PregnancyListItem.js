import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import Moment from 'moment';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import { SearchBar } from 'react-native-elements';


class PregnancyListItem extends Component {
    state = {
        a: [],
        aa: ''
    }

    componentWillMount() {

        const { HHNumber, PregnantName } = this.props.PregnancyFetchName;

        this.search(HHNumber, PregnantName);
    }

    search(k, h) {
        console.log('inside search', h, k);
        const { currentUser } = firebase.auth();
        const db = firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseholdMember/${k}/${h}`);
        db.once('value', snapshot => {
            console.log('i prnnn', snapshot.val().HHName);
            this.setState({ a: snapshot.val().HHName });
        });
    }


    render() {
        const { PregnantName, HHNumber } = this.props.PregnancyFetchName;
        //console.log('inside render',PregnantName,HHNumber);


        return (
            <View style={styles.projectRow} >
                <View style={styles.projectText} >
                    <Text style={styles.itemName}>
                        PregnantName {"\t"} {this.state.a}
                    </Text>
                    <Text style={styles.itemDetails}>Last edited {"\t"}
                        {`${Moment(this.props.HouseHold).fromNow()}`}
                    </Text>
                </View>
                <View style={styles.projectTextchild1}>
                    <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('PregnancyView', { Pregnancy: this.props.PregnancyFetchName }) }}>
                        <View>
                            <Icon
                                name="eye"
                                size={30}
                                style={styles.moreIcon}
                            />
                            <Text style={styles.moreIcon}  >View</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.projectTextchild2}>
                    <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('PregnancyEdit', { Pregnancy: this.props.PregnancyFetchName }) }}>
                        <View>
                            <Icon
                                name="edit"
                                size={30}
                                style={styles.moreIcon}
                            />
                            <Text style={styles.moreIcon} >Edit</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
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

export default withNavigation(PregnancyListItem);