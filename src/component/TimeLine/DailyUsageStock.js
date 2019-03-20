import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, ListItem, InputGroup, Button, CheckBox, Text, List, Body, Icon, Card, Form, Input, Label } from 'native-base';
import { dailyUsageStockUpdate, dailyUsageStockCreate } from '../../actions/DailyUsageStockAction';
import DatePicker from 'react-native-datepicker';


class DailyUsageStock extends Component {

  static navigationOptions = {
    title: 'Timeline',
    headerStyle: {
      backgroundColor: '#355870',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  onButtonPress() {
    const { food_received,
      food_provided,
      food_remaining,
      nutritious_food,
      protien_food,
      oil,
      jaggery,
      chilli,
      egg,
      salt,
      grams,
      mustard_seeds,
      amalice_rich,
      green_gram,
      food_provided_today,
      Extra,
      DPickdobStock } = this.props;
    // console.log(this.props.navigation);
    console.log('inside onButtonPress');
    // const navigate = this.props.navigation;
    const navigate = this.props.navigation;

    this.props.dailyUsageStockCreate({
      food_received,
      food_provided,
      food_remaining,
      nutritious_food,
      protien_food,
      oil,
      jaggery,
      chilli,
      egg,
      salt,
      grams,
      mustard_seeds,
      amalice_rich,
      green_gram,
      food_provided_today,
      Extra,
      DPickdobStock,
      navigate
    });

  }

  render() {
    return (
      <Container style={styles.back} >
        <Content padder>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <Label>Fill the form for number of people who used the resources</Label>
          <Text>{"\n"}</Text>
          <Form>
            {/* Card one */}
            <Card>
              <Label style={styles.cardtitle}>Daily Stock Usage</Label>
            </Card>

            {/* Card two */}
            <Card>
              <View style={styles.block}>


                {/**********************Food Received****************************/}
                <ListItem style={styles.block_row}>
                  <InputGroup >
                    <Label style={styles.block_row_left_element}>Food Received </Label>
                    <Input style={styles.block_row_right_element} placeholder="Food Received"
                    placeholderTextColor="#FFFFFF" 
                      value={parseInt(this.props.food_received)
                      }
                      onChangeText={value => this.props.dailyUsageStockUpdate({ name: 'food_received', value })}
                    />
                  </InputGroup>
                </ListItem>


                {/**********************Food Provided****************************/}
                <ListItem style={styles.block_row} >
                  <InputGroup >
                    <Label style={styles.block_row_left_element}>Food Provided </Label>
                    <Input style={styles.block_row_right_element} placeholder="Food Provided"
                      value={parseInt(this.props.food_provided)}
                      placeholderTextColor="#FFFFFF" 
                      onChangeText={value => this.props.dailyUsageStockUpdate({ name: 'food_provided', value })}
                    />
                  </InputGroup>
                </ListItem>


                {/**********************Food Remaining****************************/}
                <ListItem style={styles.block_row}>
                  <InputGroup >
                    <Label style={styles.block_row_left_element}>Food Remaining </Label>
                    <Input style={styles.block_row_right_element} placeholder="Food Remaining"
                      value={parseInt(this.props.food_remaining)}
                      placeholderTextColor="#FFFFFF" 
                      onChangeText={value => this.props.dailyUsageStockUpdate({ name: 'food_remaining', value })}
                    />
                  </InputGroup>
                </ListItem>


              </View>
            </Card>

            {/* Card Three */}
            <Card>
              {/**********************Nutritious****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup >
                  <Label style={styles.block_row_left_element}>Nutritious </Label>
                  <Input style={styles.block_row_right_element} placeholder="Nutritious Food"
                    value={parseInt(this.props.food_remaining)}
                    placeholderTextColor="#FFFFFF" 
                    onChangeText={value => this.props.dailyUsageStockUpdate({ name: 'nutritious_food', value })}

                  />
                </InputGroup>
              </ListItem>

              {/**********************Nutritious Food****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup >
                  <Label style={styles.block_row_left_element}>Protien Food</Label>
                  <Input style={styles.block_row_right_element} placeholder="Protien Food"
                    value={parseInt(this.props.food_remaining)}
                    placeholderTextColor="#FFFFFF" 
                    onChangeText={value => this.props.dailyUsageStockUpdate({ name: 'protien_food', value })}
                  />
                </InputGroup>
              </ListItem>

              {/**********************Oil****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup >
                  <Label style={styles.block_row_left_element}>Oil</Label>
                  <Input style={styles.block_row_right_element} placeholder="Oil"
                    value={parseInt(this.props.food_remaining)}
                    placeholderTextColor="#FFFFFF" 
                    onChangeText={value => this.props.dailyUsageStockUpdate({ name: 'oil', value })}
                  />
                </InputGroup>
              </ListItem>

              {/**********************Jaggery****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup >
                  <Label style={styles.block_row_left_element}>Jaggery</Label>
                  <Input style={styles.block_row_right_element} placeholder="Jaggery"
                    value={parseInt(this.props.food_remaining)}
                    placeholderTextColor="#FFFFFF" 
                    onChangeText={value => this.props.dailyUsageStockUpdate({ name: 'jaggery', value })}
                  />
                </InputGroup>
              </ListItem>

              {/**********************Chilli****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup >
                  <Label style={styles.block_row_left_element}>Chilli</Label>
                  <Input style={styles.block_row_right_element} placeholder="Chilli"
                    value={parseInt(this.props.food_remaining)}
                    placeholderTextColor="#FFFFFF" 
                    onChangeText={value => this.props.dailyUsageStockUpdate({ name: 'chilli', value })}
                  />
                </InputGroup>
              </ListItem>

              {/**********************Egg****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup >
                  <Label style={styles.block_row_left_element}>Egg</Label>
                  <Input style={styles.block_row_right_element} placeholder="Egg"
                    value={parseInt(this.props.food_remaining)}
                    placeholderTextColor="#FFFFFF" 
                    onChangeText={value => this.props.dailyUsageStockUpdate({ name: 'egg', value })}
                  />
                </InputGroup>
              </ListItem>

              {/**********************Salt****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup >
                  <Label style={styles.block_row_left_element}>Salt</Label>
                  <Input style={styles.block_row_right_element} placeholder="Salt"
                    value={parseInt(this.props.food_remaining)}
                    placeholderTextColor="#FFFFFF" 
                    onChangeText={value => this.props.dailyUsageStockUpdate({ name: 'salt', value })}
                  />
                </InputGroup>
              </ListItem>

              {/**********************Grams****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup >
                  <Label style={styles.block_row_left_element}>Grams</Label>
                  <Input style={styles.block_row_right_element} placeholder="Grams"
                    value={parseInt(this.props.food_remaining)}
                    placeholderTextColor="#FFFFFF" 
                    onChangeText={value => this.props.dailyUsageStockUpdate({ name: 'grams', value })}
                  />
                </InputGroup>
              </ListItem>

              {/**********************Mustard Seeds****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup >
                  <Label style={styles.block_row_left_element}>Mustard Seeds</Label>
                  <Input style={styles.block_row_right_element}
                    placeholderTextColor="#FFFFFF" 
                    placeholder="Mustard Seeds"
                    value={parseInt(this.props.food_remaining)
                    }
                    onChangeText={value => this.props.dailyUsageStockUpdate({ name: 'mustard_seeds', value })}
                  />
                </InputGroup>
              </ListItem>

              {/**********************Amalice Rich****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup >
                  <Label style={styles.block_row_left_element}>Amalice Rich</Label>
                  <Input style={styles.block_row_right_element} placeholder="Amalice Rich"
                    value={parseInt(this.props.food_remaining)}
                    placeholderTextColor="#FFFFFF" 
                    onChangeText={value => this.props.dailyUsageStockUpdate({ name: 'amalice_rich', value })}
                  />
                </InputGroup>
              </ListItem>


              {/**********************Green gram****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup >
                  <Label style={styles.block_row_left_element}>Green gram</Label>
                  <Input style={styles.block_row_right_element} placeholder="Green gram"
                    value={parseInt(this.props.food_remaining)}
                    placeholderTextColor="#FFFFFF" 
                    onChangeText={value => this.props.dailyUsageStockUpdate({ name: 'green_gram', value })}
                  />
                </InputGroup>
              </ListItem>


              {/**********************Food provided today****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup >
                  <Label style={styles.block_row_left_element}>Food provided today</Label>
                  <Input style={styles.block_row_right_element} placeholder="Food provided today"
                    placeholderTextColor="#FFFFFF" 
                    value={parseInt(this.props.food_remaining)}
                    onChangeText={value => this.props.dailyUsageStockUpdate({ name: 'food_provided_today', value })}
                  />
                </InputGroup>
              </ListItem>

              {/**********************Extra****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup >
                  <Label style={styles.block_row_left_element}>Extra</Label>
                  <Input style={styles.block_row_right_element} placeholder="Extra"
                    placeholderTextColor="#FFFFFF" 
                    value={parseInt(this.props.food_remaining)}
                    onChangeText={value => this.props.dailyUsageStockUpdate({ name: 'Extra', value })}
                  />
                </InputGroup>
              </ListItem>

              {/**********************Signature****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup >
                  <Label style={styles.block_row_left_element}>Signature</Label>
                  {/* <Input style={styles.block_row_right_element} placeholder="Signature" 
                   value={parseInt(this.props.food_remaining)}
                   onChangeText={value => this.props.dailyUsageStockUpdate({ name: 'food_remaining', value })}
                  /> */}
                </InputGroup>
              </ListItem>
            </Card>

            {/* Card Four */}
            <Card>
              <Text>{"\n"}</Text>
              <Label style={styles.dateblockalign}>Select the date for the above data</Label>
              <ListItem style={styles.dateblockalign}>
                <DatePicker
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  onDateChange={value => this.props.dailyUsageStockUpdate({ name: 'DPickdobStock', value })}
                  date={this.props.DPickdobStock}
                  animationType={"fade"}
                  // androidMode={"default"}
                  placeHolderText="Click here to select date"
                  textStyle={{ color: "green" }}
                  placeHolderTextStyle={{ color: "#275DAD" }}
                />
              </ListItem>
              <Text>{"\n"}</Text>
            </Card>



            <Text>{"\n"}</Text>
            <Button block success onPress={this.onButtonPress.bind(this)} >
              <Text>PROCEED</Text>
            </Button>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>

          </Form>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  // main block container
  block: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',

  },
  block_row: {
    flexDirection: 'row',
  },
  block_row_left_element: {
    textAlign: 'center',
    justifyContent: 'center',
    flex: 0.5,
    textAlignVertical: "center",
    height: 50,
  },
  block_row_right_element: {
    textAlign: 'center',
    flex: 0.5,
    height: 50,
    backgroundColor: '#275DAD'

  },
  cardtitle: {
    textAlign: "center",
    borderWidth: 1,
    borderColor: '#275DAD',
    paddingTop: 10,
    paddingBottom: 10,
  },
  dateblockalign: {
    textAlign: 'center',
    justifyContent: 'center',

  }
});

const mapStateToProps = (state) => {
  console.log(state);
  const { food_received,
    food_provided,
    food_remaining,
    nutritious_food,
    protien_food,
    oil,
    jaggery,
    chilli,
    egg,
    salt,
    grams,
    mustard_seeds,
    amalice_rich,
    green_gram,
    food_provided_today,
    Extra,
    DPickdobStock } = state.DailyUsageStockKey;
  return {
    food_received, food_provided, food_remaining, nutritious_food, protien_food, oil, jaggery, chilli, egg, salt, grams, mustard_seeds, amalice_rich, green_gram, food_provided_today, Extra, DPickdobStock
  };
};

export default connect(mapStateToProps, { dailyUsageStockUpdate, dailyUsageStockCreate })(DailyUsageStock);
