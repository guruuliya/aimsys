/* eslint-disable no-undef */
import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, Alert } from 'react-native';
import { Button, Container, Content, Card, CardItem, Input, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class AnganwadiLocation extends React.Component {
    constructor() {
        super();
        this.state = {
            ready: false,
            where: { lat: null, lng: null },
            error: null,
            HwArea: null,
            HHNumber: null
        };
    }
    // let awcid = 0;
    //     const database = firebase.database();
    //     const { currentUser } = firebase.auth();



    //         database.ref('/assignedworkerstocenters')
    //             .orderByChild('anganwadiworkerid').equalTo(currentUser.uid)
    //             .once('value', snapshot => {
    //                 if (snapshot.val()) {
    //                     const value = snapshot.val();
    //                     const keys = Object.keys(value);
    //                     for (let i = 0; i < keys.length; i++) {
    //                         const k = keys[i];
    //                         awcid = value[k].anganwadicenter_code;
    //                     }

    //                     //Put your existing code here database insertion part check another file for reference

    //                 } else {
    //                     console.log('no user data');
    //                 }
    //             });

    checkPer() {
        let geoOptions = {
            enableHighAccuracy: false,
            timeOut: 50000,
            maximumAge: 3600000
        };
        this.setState({ ready: false, error: null });
        navigator.geolocation.getCurrentPosition(this.geoSuccess,
            this.geoFailure,
            geoOptions);
    }
    geoSuccess = (position) => {
        console.log(position.coords.latitude);

        this.setState({
            ready: true,
            where: { lat: position.coords.latitude, lng: position.coords.longitude }
        });
    }
    geoFailure = (err) => {
        this.setState({ error: err.message });
    }

    insert() {
        let awcid = 0;
        const database = firebase.database();
        const { currentUser } = firebase.auth();
        database.ref('/assignedworkerstocenters')
            .orderByChild('anganwadiworkerid').equalTo(currentUser.uid)
            .once('value', snapshot => {
                if (snapshot.val()) {
                    const value = snapshot.val();
                    const keys = Object.keys(value);
                    for (let i = 0; i < keys.length; i++) {
                        const k = keys[i];
                        awcid = value[k].anganwadicenter_code;
                    }
                    const { HwArea, HHNumber } = this.state;
                    const latitude = this.state.where.lat;
                    const longitude = this.state.where.lng;
                    const Location = { latitude, longitude };
                    database.ref(`/users/${awcid}/Demographic/HouseholdLocation`)
                        .push({ HwArea, HHNumber, Location })
                        .then(() => {
                            Alert.alert(
                                'Successfull...!',
                                'Record Inserted Successfully...',
                                [
                                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                                ],
                                { cancelable: true }
                            );
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                } else {
                    console.log('no user data');
                }
            });
    }


    render() {
        return (
            <Container>
                <ScrollView>
                    <Content>
                        <Card>
                            <CardItem>
                                {!this.state.ready && (
                                    <Text style={styles.big}>Using Geolocation in React Native.</Text>
                                )}
                                {this.state.error && (
                                    <Text style={styles.big}>{this.state.error}</Text>
                                )}
                                {this.state.ready && (
                                    <Text style={styles.big}>{
                                        `Latitude: ${this.state.where.lat}
                                         Longitude: ${this.state.where.lng}`
                                    }</Text>
                                )}
                            </CardItem>
                            <CardItem>
                                <Input
                                    style={{ width: 100, borderBottomColor: 'skyblue' }}
                                    placeholder='Enter The Area'
                                    value={this.state.HwArea}
                                    onChangeText={HwArea => this.setState({ HwArea })}
                                />
                            </CardItem>
                            <CardItem>
                                <Input
                                    style={{ width: 100 }}
                                    placeholder='Enter HouseholdNumber'
                                    value={this.state.HHNumber}
                                    onChangeText={HHNumber => this.setState({ HHNumber })}
                                />
                            </CardItem>
                            <CardItem>
                                <Button onPress={this.checkPer.bind(this)}>
                                    <Text>
                                        Select Location
                                    </Text>
                                </Button>
                            </CardItem>
                            <CardItem>
                                <Button onPress={this.insert.bind(this)}>
                                    <Text>
                                        Add
                                    </Text>
                                </Button>
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    big: {
        fontSize: 28
    }
});

