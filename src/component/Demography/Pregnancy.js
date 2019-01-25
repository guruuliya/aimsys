import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Input, Card, CardSection, Button, MyDatepicker, Radio1 } from '../Common';

class Pregnancy extends Component {
    static navigationOptions = {
        title: 'Demography',
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
            <ScrollView>
            <View>
                <Card>
                    <CardSection>
                        <Input
                            placeholder="Enter The HouseHold Number"
                            autoCorrect={false}
                            label="HouseHoldNumber"
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Enter Pregnant Name"
                            autoCorrect={false}
                            label="Pregnant Name"
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Enter The Phone Number"
                            autoCorrect={false}
                            label="Phone Number"

                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Enter Number of Pregnant"
                            autoCorrect={false}
                            label="Number of Pregnant"

                        />
                    </CardSection>

                    <CardSection>
                        <MyDatepicker label=" Last Period Date" />
                    </CardSection>

                    <CardSection>
                        <MyDatepicker label=" Expected Delivery Date" />
                    </CardSection>

                    <CardSection>
                        <Text>T T date</Text>
                    </CardSection>
                    <CardSection>
                        <MyDatepicker label=" 1st Dose" />
                    </CardSection>

                    <CardSection>
                        <MyDatepicker label=" 2nd Dose" />
                    </CardSection>

                    <CardSection>
                        <MyDatepicker label=" Delivery Date" />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Enter Delivery Place"
                            autoCorrect={false}
                            label="Delivery Place"

                        />
                    </CardSection>


                    <CardSection>
                        <Radio1 labelTitle="Born or Died"
                            label1="Born"
                            label2="Died"
                        />
                    </CardSection>

                    <CardSection>
                        <Radio1 labelTitle="Gender"
                            label1="Male"
                            label2="female"
                        />
                    </CardSection>

                    <CardSection>
                        <MyDatepicker label=" First weight Taken Date" />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Enter Number of Child Registered in Family Book "
                            autoCorrect={false}
                            label="Number of Child Registered Family Book"

                        />
                    </CardSection>

                    <CardSection>
                        <Button children="Add" />
                        <Button children="update" />
                    </CardSection>

                </Card>
            </View>
            </ScrollView>
        );
    }
}

export { Pregnancy }; 