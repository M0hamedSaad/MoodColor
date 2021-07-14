
import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, BackHandler } from 'react-native';
import { Icon } from 'native-base';
import styles from './style'
import { withNavigation } from 'react-navigation';
import g from '../global';
import Button from '../Components/Button';

let lang
class CreatePassword extends Component {

    constructor(props) {
        super(props)
        this.state = {
            password: '',
            confirmPass: '',
            showPass: true,
            showPassConfirm: true

        }
    }
 
    render() {
         lang = this.props.navigation.getParam('lang')
        return (
            <>
                <View>
                    <Icon
                        name="arrowleft"
                        type="AntDesign"
                        style={[styles.arrow,]}
                        onPress={() => this.props.navigation.replace('VerifyScreen', { 'lang': lang })
                        }
                    />

                    <View style={styles.ViewContainer}>
                        <Text style={[styles.change]}>{lang.RESET_PASSWORD}</Text>
                        <Text style={styles.subTitle}>{lang.CREATE_PASS} </Text>
                    </View>

                    <View style={styles.ContainerInput}>
                        <View style={[styles.viewInput, { flexDirection: g.lang == 'en' ? 'row' : 'row-reverse', }]}>
                            <View style={{ flexDirection: g.lang == 'en' ? 'row' : 'row-reverse', alignItems: 'center' }}>

                                <TextInput
                                    autoCorrect={false}
                                    onChangeText={(password) => this.setState({ password })}
                                    secureTextEntry={this.state.password != '' && this.state.showPass ? true : false}
                                    placeholder={lang.PASSWORD}
                                    placeholderTextColor={'#000'}
                                    style={[styles.input, {
                                        textAlign: g.lang == 'ar' ? 'right' : 'left'
                                    }]} />
                            </View>

                            <Icon name={this.state.showPass ? 'eyeo' : 'eye'}
                                type='AntDesign'
                                onPress={() => { this.setState({ showPass: !this.state.showPass }) }}
                                style={{ fontSize: 22, color: g.move }} />

                        </View>

                        <Text style={styles.subText}>{lang.VALID_PASS}</Text>

                        <View style={[styles.viewInput, { flexDirection: g.lang == 'en' ? 'row' : 'row-reverse', }]}>
                            <View style={{ flexDirection: g.lang == 'en' ? 'row' : 'row-reverse', alignItems: 'center' }}>

                                <TextInput
                                    autoCorrect={false}
                                    onChangeText={(confirmPass) => this.setState({ confirmPass })}
                                    secureTextEntry={this.state.confirmPass != '' && this.state.showPassConfirm ? true : false}
                                    placeholder={lang.CONFIRM_PASS}
                                    placeholderTextColor={'#000'}
                                    style={[styles.input, {
                                        textAlign: g.lang == 'ar' ? 'right' : 'left'
                                    }]} />
                            </View>

                            <Icon name={this.state.showPassConfirm ? 'eyeo' : 'eye'}
                                type='AntDesign'
                                onPress={() => { this.setState({ showPassConfirm: !this.state.showPassConfirm }) }}
                                style={{ fontSize: 22, color: g.move }} />

                        </View>

                        <Text style={styles.subText}>{lang.VALID_CONFIRM_PASS}</Text>
                    </View>

                    <Button
                        txt={lang.RESET_PASSWORD}
                        onPress={() => this.props.navigation.replace('LoginScreen')}
                       />

                </View>
            </>
        );

    }
}


export default withNavigation(CreatePassword);
