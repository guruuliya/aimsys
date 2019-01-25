import React from 'react';
import { View, Text } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';


const Radio1 = ({ labelTitle, label1, label2, value }) => (
    <View style={styles.containerStyle} >
      <Text style={styles.labelStyle}> {labelTitle} </Text>
      <RadioGroup 
      style={{ flexDirection: 'row' }}
      >
        <RadioButton value={value} >
          <Text style={styles.labelStyle}>{label1}</Text>
        </RadioButton>

        <RadioButton value={value}>
          <Text style={styles.labelStyle}>{label2}</Text>
        </RadioButton>
      </RadioGroup>

    </View>
  );

const styles = {

  labelStyle: {
    fontSize: 14,
    paddingLeft: 20,
    flex: 1

  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Radio1 };
