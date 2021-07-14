
import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, BackHandler, Alert } from 'react-native';
import { Icon } from 'native-base';
import styles from './style';
import { withNavigation } from 'react-navigation';
import g from '../global';
import Button from '../Components/Button';
let lang

class ResetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    render() {
        lang = this.props.navigation.getParam('lang')
        return (
            <>
                <View style={styles.Container} >
                    <Icon
                        name="arrowleft"
                        type="AntDesign"
                        style={[styles.arrow,]}
                        onPress={() => this.props.navigation.replace('LoginScreen')}

                    />

                    <View style={styles.ViewContainer}>
                        <Text style={[styles.change]}>{lang.RESET_PASSWORD}</Text>
                        <Text style={styles.subTitle}>{lang.RESET_PASSWORD_INSTRUCTIONS}</Text>
                    </View>

                    <View style={styles.ContainerInput}>
                        <View style={styles.viewInput}>
                            <TextInput
                                onChangeText={(email) => this.setState({ email })}
                                keyboardType="email-address"
                                autoCapitalize='none'
                                autoCorrect={false}
                                placeholder={lang.USERNAME}
                                placeholderTextColor={'#000'}
                                style={[styles.input, {
                                    textAlign: g.lang == 'ar' ? 'right' : 'left'
                                }]} />
                        </View>
                    </View>

                    
                    <Button
                        txt={lang.SEND_INSTRUCTIONS}
                        onPress={() => {
                            this.props.navigation.navigate('VerifyScreen', { 'lang': lang })
                        }}
                    />
                 

                </View>
            </>
        );

    }
}

export default withNavigation(ResetPassword);
