import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation, StackActions, NavigationActions } from 'react-navigation';
import g from '../global';
import { RNCamera } from 'react-native-camera';
import { Icon } from 'native-base';


const PendingView = () => (
    <View>
    </View>
);

class Camera extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    takePicture = async function (camera) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        console.log(data.uri);
    };


    render() {
        const lang = g.lang == 'ar' ? g.ar : g.en
        return (
            <>

                <View style={styles.container}>

                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        // onTap={(x)=>console.log(x)}
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        // flashMode={RNCamera.Constants.FlashMode.on}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permission to use audio recording',
                            message: 'We need your permission to use your audio',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        // onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        //     console.log(barcodes);
                        // }}
                    >
                        {({ camera, status, recordAudioPermissionStatus }) => {
                            if (status !== 'READY') return <PendingView />;
                            return (

                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => this.takePicture(camera)}
                                    style={{
                                    position: 'absolute',
                                    backgroundColor: 'transparent',
                                    width: '100%', height: '100%'
                                }} >

                                    <Icon
                                        onPress={() => { this.props.navigation.pop() }}
                                        name='keyboard-backspace'
                                        type='MaterialCommunityIcons'
                                        style={{ margin: 20, color: '#fff', fontSize: 22 }} />
                                    
                                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', marginTop:'130%' }}>
                                        <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                                            <Icon name='camera' type='AntDesign' style={{ fontSize: 25, }} />
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>


                            );
                        }}
                    </RNCamera>
                </View>
            </>
        );
    };
}
const styles = StyleSheet.create({
    container: {
        //        flex: 1,
        //   flexDirection: 'column',
        height: '100%',
        backgroundColor: 'transparent',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});

export default withNavigation(Camera);
