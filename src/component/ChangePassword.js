import _ from 'lodash';
import React, { Component } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Container, Content, Header, Left
} from 'native-base';

class ChangePassword extends Component {
    static navigationOptions = {
        title: 'Infrastructure'
    };

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon
                            style={{ marginLeft: 10 }}
                            name="md-menu"
                            onPress={() => this.props.navigation.navigate('DrawerOpen')}
                            size={32}
                            color="white"
                        />
                    </Left>
                </Header>


                <Content>
                    <Text>ForgotPassword</Text>
                </Content>
            </Container>
        );
    }
}

export default ChangePassword;
