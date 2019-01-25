import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>);
};

const styles = {
    textStyle: {
        fontSize: 22
    },

    viewStyle: {
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingTop: 12,
        shadowColor: 'green',
        shadowOffset: { width: 100, height: 200 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    }
};

export { Header };
