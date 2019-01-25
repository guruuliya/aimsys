import React, { Component } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Input, Card, CardSection, Radio1, Button, MyDatepicker } from '../Common/';

class HouseHold extends Component {
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
                            placeholder="Enter The HouseHold Name"
                            autoCorrect={false}
                            label="Name"


                        />

                    </CardSection>


                    <CardSection>

                        <MyDatepicker label="Date of Birth" />

                    </CardSection>


                    <CardSection>

                        <Radio1 labelTitle="Gender"
                            label1="Male"
                            label2="female"

                        />

                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Enter The Caste"
                            autoCorrect={false}
                            label="Caste"

                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder="Enter The Relationship"
                            autoCorrect={false}
                            label="Relationship"

                        />
                    </CardSection>
                    <CardSection>
                        <Radio1 labelTitle="Status"
                            label1="Mareried"
                            label2="female"

                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Enter The Designation"
                            autoCorrect={false}
                            label="Designation"

                        />

                    </CardSection>



                    <CardSection>
                        <Input
                            placeholder="Address"
                            autoCorrect={false}
                            multiline
                            label="Name"


                        />

                    </CardSection>
                    <CardSection>
                        <Button children="Add" />
                    </CardSection>

                </Card>            

            </View>
            </ScrollView>
        );
    }
}

export { HouseHold };
