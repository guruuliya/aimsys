import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, ListItem, DatePicker, Button, CheckBox, Text, Body, Form, Input, Label } from 'native-base';

class FoodSupplies extends Component {
  constructor(props) {
    super(props)
    this.state = { saldo: '', item_Rice: false, item_Moongdaal: false, item_Jagarry: false, item_Cooking_oil: false, item_Onion: false, item_Mysore_daal: false, item_Mutter: false, item_Potato: false, item_Arrar_Daal: false, item_Turmeric: false, item_cumin_seed: false, item_red_chilly: false, item_mustard_seed: false, item_salt: false, item_Whole_moong: false, item_Detergent: false, item_Rajma: false, item_Egg: false, item_Others: false }
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }

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
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  // Rice Moong daal Jagarry Cooking oil Onion Mysore daal Mutter Potato Arrar Daal Turmeric cumin seed red chilly mustard seed salt Whole moong Detergent Rajma Egg Others
  render() {
    return (

      <Container>
        <Content padder>
          <Text>{"\n"}</Text>
          <Label>Fill the form for required goods for immediate supplies</Label>
          <Text>{"\n"}</Text>
          <Form>

            {/**********************Rice****************************/}
            <ListItem onPress={() => this.setState({ item_Rice: !this.state.item_Rice })}>
              <CheckBox checked={this.state.item_Rice} onPress={() => this.setState({ item_Rice: !this.state.item_Rice })} />
              <Body>
                <Text>Rice</Text>
              </Body>
              {this.state.item_Rice ? <View>
                <Input placeholder="Enter in Quantity" />
              </View> : null}
            </ListItem>
            {/**********************Moong daal****************************/}
            <ListItem onPress={() => this.setState({ item_Moongdaal: !this.state.item_Moongdaal })}>
              <CheckBox checked={this.state.item_Moongdaal} onPress={() => this.setState({ item_Moongdaal: !this.state.item_Moongdaal })} />
              <Body>
                <Text>Moong daal</Text>
              </Body>
              {this.state.item_Moongdaal ? <View>
                <Input placeholder="Enter in Quantity" />
              </View> : null}
            </ListItem>
            {/**********************Jagarry****************************/}
            <ListItem onPress={() => this.setState({ item_Jagarry: !this.state.item_Jagarry })}>
              <CheckBox checked={this.state.item_Jagarry} onPress={() => this.setState({ item_Jagarry: !this.state.item_Jagarry })} />
              <Body>
                <Text>Jagarry</Text>
              </Body>
              {this.state.item_Jagarry ? <View>
                <Input placeholder="Enter in Quantity" />
              </View> : null}
            </ListItem>
            {/**********************Cooking oil****************************/}
            <ListItem onPress={() => this.setState({ item_Cooking_oil: !this.state.item_Cooking_oil })}>
              <CheckBox checked={this.state.item_Cooking_oil} onPress={() => this.setState({ item_Cooking_oil: !this.state.item_Cooking_oil })} />
              <Body>
                <Text>Cooking oil</Text>
              </Body>
              {this.state.item_Cooking_oil ? <View>
                <Input placeholder="Enter in Quantity" />
              </View> : null}
            </ListItem>
            {/**********************Onion****************************/}
            <ListItem onPress={() => this.setState({ item_Onion: !this.state.item_Onion })}>
              <CheckBox checked={this.state.item_Onion} onPress={() => this.setState({ item_Onion: !this.state.item_Onion })} />
              <Body>
                <Text>Onion</Text>
              </Body>
              {this.state.item_Onion ? <View>
                <Input placeholder="Enter in Quantity" />
              </View> : null}
            </ListItem>
            {/**********************Mysore daal****************************/}
            <ListItem onPress={() => this.setState({ item_Mysore_daal: !this.state.item_Mysore_daal })}>
              <CheckBox checked={this.state.item_Mysore_daal} onPress={() => this.setState({ item_Mysore_daal: !this.state.item_Mysore_daal })} />
              <Body>
                <Text>Mysore daal</Text>
              </Body>
              {this.state.item_Mysore_daal ? <View>
                <Input placeholder="Enter Quantity" />
              </View> : null}
            </ListItem>
            {/**********************Mutter****************************/}
            <ListItem onPress={() => this.setState({ item_Mutter: !this.state.item_Mutter })}>
              <CheckBox checked={this.state.item_Mutter} onPress={() => this.setState({ item_Mutter: !this.state.item_Mutter })} />
              <Body>
                <Text>Mutter</Text>
              </Body>
              {this.state.item_Mutter ? <View>
                <Input placeholder="Enter Quantity" />
              </View> : null}
            </ListItem>

            {/**********************Potato****************************/}
            <ListItem onPress={() => this.setState({ item_Potato: !this.state.item_Potato })}>
              <CheckBox checked={this.state.item_Potato} onPress={() => this.setState({ item_Potato: !this.state.item_Potato })} />
              <Body>
                <Text>Potato</Text>
              </Body>
              {this.state.item_Potato ? <View>
                <Input placeholder="Enter Quantity" />
              </View> : null}
            </ListItem>
            {/**********************Arrar Daal****************************/}
            <ListItem onPress={() => this.setState({ item_Arrar_Daal: !this.state.item_Arrar_Daal })}>
              <CheckBox checked={this.state.item_Arrar_Daal} onPress={() => this.setState({ item_Arrar_Daal: !this.state.item_Arrar_Daal })} />
              <Body>
                <Text>Arrar Daal</Text>
              </Body>
              {this.state.item_Arrar_Daal ? <View>
                <Input placeholder="Enter Quantity" />
              </View> : null}
            </ListItem>
            {/**********************Turmeric****************************/}
            <ListItem onPress={() => this.setState({ item_Turmeric: !this.state.item_Turmeric })}>
              <CheckBox checked={this.state.item_Turmeric} onPress={() => this.setState({ item_Turmeric: !this.state.item_Turmeric })} />
              <Body>
                <Text>Turmeric</Text>
              </Body>
              {this.state.item_Turmeric ? <View>
                <Input placeholder="Enter Quantity" />
              </View> : null}
            </ListItem>
            {/**********************cumin seed****************************/}
            <ListItem onPress={() => this.setState({ item_cumin_seed: !this.state.item_cumin_seed })}>
              <CheckBox checked={this.state.item_cumin_seed} onPress={() => this.setState({ item_cumin_seed: !this.state.item_cumin_seed })} />
              <Body>
                <Text>cumin seed</Text>
              </Body>
              {this.state.item_cumin_seed ? <View>
                <Input placeholder="Enter Quantity" />
              </View> : null}
            </ListItem>
            {/**********************mustard seed****************************/}
            <ListItem onPress={() => this.setState({ item_mustard_seed: !this.state.item_mustard_seed })}>
              <CheckBox checked={this.state.item_mustard_seed} onPress={() => this.setState({ item_mustard_seed: !this.state.item_mustard_seed })} />
              <Body>
                <Text>mustard seed</Text>
              </Body>
              {this.state.item_mustard_seed ? <View>
                <Input placeholder="Enter Quantity" />
              </View> : null}
            </ListItem>
            {/**********************salt****************************/}
            <ListItem onPress={() => this.setState({ item_salt: !this.state.item_salt })}>
              <CheckBox checked={this.state.item_salt} onPress={() => this.setState({ item_salt: !this.state.item_salt })} />
              <Body>
                <Text>salt</Text>
              </Body>
              {this.state.item_salt ? <View>
                <Input placeholder="Enter Quantity" />
              </View> : null}
            </ListItem>
            {/**********************Whole moong****************************/}
            <ListItem onPress={() => this.setState({ item_salt: !this.state.item_Whole_moong })}>
              <CheckBox checked={this.state.item_Whole_moong} onPress={() => this.setState({ item_Whole_moong: !this.state.item_Whole_moong })} />
              <Body>
                <Text>Whole moong</Text>
              </Body>
              {this.state.item_Whole_moong ? <View>
                <Input placeholder="Enter Quantity" />
              </View> : null}
            </ListItem>
            {/**********************Detergent****************************/}
            <ListItem onPress={() => this.setState({ item_salt: !this.state.item_Detergent })}>
              <CheckBox checked={this.state.item_Detergent} onPress={() => this.setState({ item_Detergent: !this.state.item_Detergent })} />
              <Body>
                <Text>Detergent</Text>
              </Body>
              {this.state.item_Detergent ? <View>
                <Input placeholder="Enter Quantity" />
              </View> : null}
            </ListItem>
            {/**********************Detergent****************************/}
            <ListItem onPress={() => this.setState({ item_Rajma: !this.state.item_Rajma })}>
              <CheckBox checked={this.state.item_Rajma} onPress={() => this.setState({ item_Rajma: !this.state.item_Rajma })} />
              <Body>
                <Text>Rajma</Text>
              </Body>
              {this.state.item_Rajma ? <View>
                <Input placeholder="Enter Quantity" />
              </View> : null}
            </ListItem>
            {/**********************Egg****************************/}
            <ListItem onPress={() => this.setState({ item_Egg: !this.state.item_Egg })}>
              <CheckBox checked={this.state.item_Egg} onPress={() => this.setState({ item_Egg: !this.state.item_Egg })} />
              <Body>
                <Text>Egg</Text>
              </Body>
              {this.state.item_Egg ? <View>
                <Input placeholder="Enter Quantity" />
              </View> : null}
            </ListItem>
            {/**********************Others****************************/}
            <ListItem onPress={() => this.setState({ item_Others: !this.state.item_Others })}>
              <CheckBox checked={this.state.item_Others} onPress={() => this.setState({ item_Others: !this.state.item_Others })} />
              <Body>
                <Text>Others</Text>
              </Body>
              {this.state.item_Others ? <View>
                <Input placeholder="Enter Commodity Name" />
                <Input placeholder="Enter Quantity" />
              </View> : null}
            </ListItem>
            <Text>{"\n"}</Text>
            <Label>Enter the date by which you need the supplies</Label>
            <Text>{"\n"}</Text>
            <ListItem>
              <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select date"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setDate}
                disabled={false}
              />
              <Text>
                Date: {this.state.chosenDate.toString().substr(4, 12)}
              </Text>
            </ListItem>
            <Text>{"\n"}</Text>
            <Button block success>
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

export default FoodSupplies;