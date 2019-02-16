 import React, {Component} from 'react';
 import {Text} from 'react-native';
 import {CardSection} from '../Common';

 class ListChild extends Component{
render() {
    const{ CName,HNumber }=this.props.child;
    return (
        <CardSection>
            <Text style={styles.titleStyle}>
               {CName}{'               '}{HNumber} 
               
            </Text>
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

 export default ListChild;