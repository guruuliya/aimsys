import firebase from 'firebase';
import { Alert } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';
import {
    BPICTURE_FRORM, BPICTURE_CREATE,
    BPICTURE_FETCH, BPICTURE_REMOVE, BPFETCH_LOADING_START, BPFETCH_LOADING_END
} from './types';

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;


export const bPictureForm = ({ name, value }) => {
    return {
        type: BPICTURE_FRORM,
        payload: { name, value }
    };
};


export const bPictureCreate = ({ BPicture }) => {
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        const imageFile = RNFetchBlob.wrap(BPicture);
        const imageRef = firebase.storage().ref('.../');
        let uploadBlob = null;

        Blob.build(imageFile, { type: 'image/jpg' })
            .then((imageBlob) => {
                uploadBlob = imageBlob;
                return imageRef.put(imageBlob, { contentType: 'image/jpg' });
            })
            .then(() => {
                uploadBlob.close();
                return imageRef.getDownloadURL();
            })
            .then((url) => {
                database.ref(`/users/${currentUser.uid}/Infrastructure/`)
                    .once('value', snapshot => {
                        if (snapshot.hasChild('buildingImage')) {
                            Alert.alert(
                                'Oops...!',
                                'Data Already Exists...',
                                [
                                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                                ],
                                { cancelable: true }
                            );
                        } else {
                            database.ref(`/users/${currentUser.uid}/Infrastructure/buildingImage`)
                                .push({ BPicture: url })
                                .then(() => {
                                    dispatch({
                                        type: BPICTURE_CREATE,
                                        payload: ''
                                    });
                                    Alert.alert(
                                        'Successfull....!',
                                        'Image Uploaded Successfully..',
                                        [
                                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                                        ],
                                        { cancelable: false },
                                    );
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        }
                    });
            })
            .catch((error) => { console.log(error); });
    };
};

export const bPictureFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        fetchLoad(dispatch);
        firebase.database().ref(`/users/${currentUser.uid}/Infrastructure/buildingImage`)
            .on('value', snapshot => {
                dispatch({
                    type: BPICTURE_FETCH,
                    payload: snapshot.val() || ''
                });
                dispatch({
                    type: BPFETCH_LOADING_END,
                    payload: false
                });
            });
    };
};

export const bPictureRemove = (key) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        Alert.alert(
            'Need Attention...!',
            'Do you want delete this record?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () =>
                        firebase.database().ref(`/users/${currentUser.uid}/Infrastructure/buildingImage/${key}`)
                            .remove()
                            .then(() => {
                                dispatch({
                                    type: BPICTURE_REMOVE,
                                    payload: ''
                                });
                            })
                },
            ],
            { cancelable: false },
        );
    };
};

export const bPictureUpdate = ({ BPicture }, key, navigate) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        const imageFile = RNFetchBlob.wrap(BPicture);
        const imageRef = firebase.storage().ref('.../');
        let uploadBlob = null;

        Blob.build(imageFile, { type: 'image/jpg' })
            .then((imageBlob) => {
                uploadBlob = imageBlob;
                return imageRef.put(imageBlob, { contentType: 'image/jpg' });
            })
            .then(() => {
                uploadBlob.close();
                return imageRef.getDownloadURL();
            })
            .then((url) => {
                console.log(url);
                firebase.database().ref(`/users/${currentUser.uid}/Infrastructure/buildingImage/${key}`)
                    .set({ BPicture: url })
                    .then(() => {
                        dispatch({
                            type: BPICTURE_CREATE,
                            payload: ''
                        });
                        Alert.alert(
                            'Successfull....!',
                            'Image Uploaded Successfully..',
                            [
                                { text: 'OK', onPress: () => console.log('OK Pressed') },
                            ],
                            { cancelable: false },
                        );
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => { console.log(error); });
        navigate.navigate('buildingPicture');
    };
};

const fetchLoad = (dispatch) => {
    dispatch({ type: BPFETCH_LOADING_START, payload: true });
};

