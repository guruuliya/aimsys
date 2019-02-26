import React, { Component } from 'react';
import { Text, View } from 'native-base';
import { CardSection, Card, Input } from '../Common';
import { Radio, CardItem } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { NutritionUpdate } from '../../actions/NutritionAction';


class ChildNutritionForm extends Component {
    render() {
        return (
            <View>

                    <CardSection>
                        <Input
                            placeholder="Household Number"
                            autoCorrect={false}
                            label="Household Number"
                            onChangeText={value => this.props.NutritionUpdate({ name: 'HNumber', value })}
                            value={this.props.HNumber}
                        />
                    </CardSection>

              

               
                    <CardSection>
                        <Input
                            placeholder="Child Name"
                            autoCorrect={false}
                            label="Child Name"
                            onChangeText={value => this.props.NutritionUpdate({ name: 'CName', value })}
                            value={this.props.CName}
                        />
                    </CardSection>
               

               
                    <CardSection>
                        <Input
                            placeholder="Age"
                            autoCorrect={false}
                            label="Age"
                            onChangeText={value => this.props.NutritionUpdate({ name: 'Age', value })}
                            value={this.props.Age}
                        />
                    </CardSection>
              

              
                    <CardSection>
                        <Input
                            placeholder="height"
                            autoCorrect={false}
                            label="Hieght"
                            onChangeText={value => this.props.NutritionUpdate({ name: 'height', value })}
                            value={this.props.height}
                        />
                    </CardSection>
               

              
                    <CardSection>
                        <Input
                            placeholder="weight"
                            autoCorrect={false}
                            label="Weight"
                            onChangeText={value => this.props.NutritionUpdate({ name: 'weight', value })}
                            value={this.props.weight}
                        />
                    </CardSection>
              

                <Card>
                    <CardItem>
                        <Text style={styles.textStyle1}>Underweight?</Text>
                    </CardItem>
                    <CardItem>
                        <Text style={{marginLeft:7,color:'grey',fontSize:16}}>Yes:</Text>
                        <Radio onPress={() => this.props.NutritionUpdate({ name: 'under', value: 'Yes' })}
                            selected={this.props.under === 'Yes'}

                        />

                        <Text style={{marginLeft:10,color:'grey',fontSize:16}}>No:</Text>
                        <Radio onPress={() => this.props.NutritionUpdate({ name: 'under', value: 'No' })}
                            selected={this.props.under === 'No'}

                        />
                    </CardItem>
                    {/* 
                    {
                        this.state.isHidden ?
                            <Card>
                                <ListItem>
                                    <Input
                                        placeholder='age'
                                        label='Age'
                                    />
                                </ListItem>
                                <ListItem>
                                    <Input
                                        placeholder='weight'
                                        label='weight'
                                    />
                                </ListItem>

                            </Card>
                            : null
                    } */}
                </Card>

                <Card>
                    <CardItem>
                        <Text style={styles.textStyle1}>Wasting?</Text>
                    </CardItem>
                    <CardItem>
                        <Text style={{marginLeft:7,color:'grey',fontSize:16}}>Yes:</Text>
                        <Radio onPress={() => this.props.NutritionUpdate({ name: 'wast', value: 'Yes' })}
                            selected={this.props.wast === 'Yes'}

                        />

                        <Text style={{marginLeft:10,color:'grey',fontSize:16}}>No:</Text>
                        <Radio onPress={() => this.props.NutritionUpdate({ name: 'wast', value: 'No' })}
                            selected={this.props.wast === 'No'}

                        />
                    </CardItem>
                    {/* {
                        this.state.isHidden1 ?
                            <Card>
                                <ListItem>
                                    <Input
                                        placeholder='age'
                                        label='Age'
                                    />
                                </ListItem>
                                <ListItem>
                                    <Input
                                        placeholder='weight'
                                        label='weight'
                                    />
                                </ListItem>
                                <ListItem>
                                    <Input
                                        placeholder='height'
                                        label='height'
                                    />
                                </ListItem>

                            </Card>
                            : null
                    } */}
                </Card>

                <Card>
                    <CardItem>
                        <Text style={styles.textStyle1}>Stunting?</Text>
                    </CardItem>
                    <CardItem>
                        <Text style={{marginLeft:7,color:'grey',fontSize:16}}>Yes:</Text>
                        <Radio onPress={() => this.props.NutritionUpdate({ name: 'stunt', value: 'Yes' })}
                            selected={this.props.stunt === 'Yes'}

                        />

                        <Text style={{marginLeft:10,color:'grey',fontSize:16}}>No:</Text>
                        <Radio onPress={() => this.props.NutritionUpdate({ name: 'stunt', value: 'No' })}
                            selected={this.props.stunt === 'No'}

                        />
                    </CardItem>
                    {/* {
                        this.state.isHidden2 ?
                            <Card>
                                <ListItem>
                                    <Input
                                        placeholder='age'
                                        label='Age'
                                    />
                                </ListItem>
                                <ListItem>
                                    <Input
                                        placeholder='height'
                                        label='height'
                                    />
                                </ListItem>

                            </Card>
                            : null
                    } */}
                </Card>

                <Card>
                    <CardItem>
                        <Text style={styles.textStyle1}>New born with low birth weight less then 2500 grams?</Text>
                    </CardItem>
                    <CardItem>
                        <Text style={{marginLeft:7,color:'grey',fontSize:16}}>Yes:</Text>
                        <Radio onPress={() => this.props.NutritionUpdate({ name: 'lowbirth', value: 'Yes' })}
                            selected={this.props.lowbirth === 'Yes'}

                        />

                        <Text style={{marginLeft:10,color:'grey',fontSize:16}}>No:</Text>
                        <Radio onPress={() => this.props.NutritionUpdate({ name: 'lowbirth', value: 'No' })}
                            selected={this.props.lowbirth === 'No'}

                        />
                    </CardItem>
                </Card>

                <Card>
                    <CardItem>
                        <Text style={styles.textStyle1}>Early iniation of Breastfeeding?</Text>
                    </CardItem>
                    <CardItem>
                        <Text style={{marginLeft:7,color:'grey',fontSize:16}}>Yes:</Text>
                        <Radio onPress={() => this.props.NutritionUpdate({ name: 'breastfeed', value: 'Yes' })}
                            selected={this.props.breastfeed === 'Yes'}

                        />

                        <Text style={{marginLeft:10,color:'grey',fontSize:16}}>No:</Text>
                        <Radio onPress={() => this.props.NutritionUpdate({ name: 'breastfeed', value: 'No' })}
                            selected={this.props.breastfeed === 'No'}

                        />
                    </CardItem>
                </Card>

                <Card>
                    <CardItem>
                        <Text style={styles.textStyle1}>Exclusive Breastfeeding?</Text>
                    </CardItem>
                    <CardItem>
                        <Text style={{marginLeft:7,color:'grey',fontSize:16}}>Yes:</Text>
                        <Radio onPress={() => this.props.NutritionUpdate({ name: 'exfeed', value: 'Yes' })}
                            selected={this.props.exfeed === 'Yes'}

                        />

                        <Text style={{marginLeft:10,color:'grey',fontSize:16}}>No:</Text>
                        <Radio onPress={() => this.props.NutritionUpdate({ name: 'exfeed', value: 'No' })}
                            selected={this.props.exfeed === 'No'}

                        />
                    </CardItem>
                </Card>

                <Card>
                    <CardItem>
                        <Text style={styles.textStyle1}>Children inititaed appropriate complementary feeding?</Text>
                    </CardItem>
                    <CardItem>
                        <Text style={{marginLeft:7,color:'grey',fontSize:16}}>Yes:</Text>
                        <Radio onPress={() => this.props.NutritionUpdate({ name: 'cfeed', value: 'Yes' })}
                            selected={this.props.cfeed === 'Yes'}

                        />

                        <Text style={{marginLeft:10,color:'grey',fontSize:16}}>No:</Text>
                        <Radio onPress={() => this.props.NutritionUpdate({ name: 'cfeed', value: 'No' })}
                            selected={this.props.cfeed === 'No'}

                        />
                    </CardItem>
                </Card>

                <Card>
                    <CardItem>
                        <Text style={styles.textStyle1}>Institutional deliveries?</Text>
                    </CardItem>
                    <CardItem>
                        <Text style={{marginLeft:7,color:'grey',fontSize:16}}>Yes:</Text>
                        <Radio onPress={() => this.props.NutritionUpdate({ name: 'ideli', value: 'Yes' })}
                            selected={this.props.ideli === 'Yes'}

                        />

                        <Text style={{marginLeft:10,color:'grey',fontSize:16}}>No:</Text>
                        <Radio onPress={() => this.props.NutritionUpdate({ name: 'ideli', value: 'No' })}
                            selected={this.props.ideli === 'No'}

                        />
                    </CardItem>
                </Card>
            </View>

        );
    }
}

const styles = {

    // textStyle: {
    //     padding: 5,
    //     fontSize: 18,
    //     color: 'grey',

    // },
    buttonStyle: {
        alignItems: 'center'
    },
    textStyle1: {
        padding: 5,
        fontSize: 18,
        color: 'blue',
    }
    
};

const mapStateToProps = (state) => {
    console.log(state);
    const {HNumber, CName, Age,height,weight,under,wast,stunt,lowbirth,breastfeed,exfeed,cfeed,ideli} = state.nutrition;
    return {HNumber, CName, Age,height,weight,under,wast,stunt,lowbirth,breastfeed,exfeed,cfeed,ideli };
};

export default connect(mapStateToProps, { NutritionUpdate })(ChildNutritionForm);