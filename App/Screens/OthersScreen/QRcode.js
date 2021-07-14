import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Linking } from 'react-native';
import { withNavigation, } from 'react-navigation';
import g from '../global';
import { RNCamera } from 'react-native-camera';
import { Icon } from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';



class QRcode extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onSuccess = e => {
        console.log(e);
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
    };

    render() {
        const lang = g.lang == 'ar' ? g.ar : g.en
        return (
            <>
                <View style={{position:'absolute',height:'100%',backgroundColor:'transparent',width:'100%',zIndex: 1,}}/>
                <QRCodeScanner
                    onRead={this.onSuccess}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    showMarker
                    cameraStyle={{ height: '100%' }}
                    markerStyle={{borderColor:g.moveOpacity}}
                    reactivate
                    />
                    
            </>
        );
    };
}
const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
});

export default withNavigation(QRcode);
