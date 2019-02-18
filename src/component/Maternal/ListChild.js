 import React, {Component} from 'react';
 import {Text,TouchableOpacity,Alert} from 'react-native';
 import {CardSection} from '../Common';
 import {withNavigation} from 'react-navigation';

 class ListChild extends Component{
render() {
   
    const{ CName,HNumber }=this.props.child;
    return (
        <CardSection>
             {/* <Text style={styles.titleStyle} onPress={() => console.log('hi')}>
            {HNumber}{"\t\t\t\t\t\t\t"}{CName}
               
            </Text> 
             <Text  onPress={() => this.props.onTextPress('FoodNutri')} style={styles.red}>{HNumber}{"\t\t\t\t\t"}{CName}</Text> */}
         <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('FoodNutri')}
                        >
                            <Text>{HNumber}{"\t\t\t\t\t\t"}{CName}</Text>
                        </TouchableOpacity>
        </CardSection>
    ); 
}
 }
 const styles={
     titleStyle:{
         fontSize:18, 
         paddingLeft:15 
     }
 }

 export default withNavigation(ListChild);