import React, { Component } from 'react';
import { Image, Text, Dimensions } from 'react-native';
import {
    Container,
    Content,
    Button,
    Card,
    CardItem,
    ListItem
} from 'native-base';
import ImagePicker from 'react-native-image-picker';

const options = {
    takePhotoButtonTitle: 'Take photo'
};

class BuildingPicture extends Component {
    static navigationOptions = {
        title: 'Infrastructure',
        headerStyle: {
            backgroundColor: '#203546',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null,
            isHidden: true
        };
    }

    myFun = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
                if (this.state.avatarSource !== null) {
                    this.setState({ isHidden: false });
                }
            }
        });
    }

    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Text>Upload Buliding Image?</Text>
                        </CardItem>
                        <CardItem>
                            <Button
                                block info
                                onPress={this.myFun}
                                style={{
                                    width: Dimensions.get('window').width - 40,
                                    marginLeft: 0,
                                    marginRight: 0
                                }}
                            >
                                <Text>
                                    Select Images
                             </Text>
                            </Button>
                        </CardItem>
                        <CardItem>
                            {
                                this.state.isHidden ?
                                    <Text >
                                        Please Select a Image/select from Gallery</Text> :
                                    <Image
                                        source={this.state.avatarSource}
                                        style={{ width: '100%', height: 200 }}
                                    />
                            }
                        </CardItem>
                        <ListItem>
                            <Button
                                block success
                                style={{
                                    width: Dimensions.get('window').width - 40,
                                    marginLeft: 0,
                                    marginRight: 0
                                }}
                            >
                                <Text>Add</Text>
                            </Button>
                        </ListItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export { BuildingPicture };
