import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity,
  TextInput, ScrollView, BackHandler
} from 'react-native';
import styles from './style'
import { withNavigation, StackActions, NavigationActions } from 'react-navigation';
import g from '../global';
import AsyncStorage from '@react-native-community/async-storage';
import { Icon } from 'native-base';
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: g.lang == 'ar' ? g.ar : g.en,
      email: '',
      password: '',
      toggle: false,
      showPass: true
    }
  }

  render() {
    return (
      <>
        <View
          style={styles.contain}
        >

          <Image resizeMode='contain'
            style={[styles.logo]}
            source={require('../../assets/images/Logo.png')}
          />

          <View style={styles.containWelcome}>
            <Text style={styles.WelcomeTest}>{this.state.lang.WELCOME}</Text>
          </View>

          <Image
            source={require('../../assets/images/lohinNew.png')}
            resizeMode='contain'
            style={styles.ImageIcon}
          />

          <View style={styles.containInput}>
            <View style={[styles.viewInput, { flexDirection: g.lang == 'en' ? 'row' : 'row-reverse', }]}>

              <View style={{ flexDirection: g.lang == 'en' ? 'row' : 'row-reverse', alignItems: 'center' }}>
                <Icon name='user' type='AntDesign' style={{ fontSize: 22, color: g.move }} />

                <TextInput
                  onChangeText={(email) => this.setState({ email })}
                  keyboardType="email-address"
                  autoCapitalize='none'
                  autoCorrect={false}
                  placeholder={this.state.lang.USERNAME}
                  placeholderTextColor={'#000'}
                  style={[styles.input, {
                    textAlign: g.lang == 'ar' ? 'right' : 'left'
                  }]} />
              </View>
              <Icon name='ios-checkmark-circle-outline' type='Ionicons' style={{
                fontSize: 22, color: g.move
              }} />

            </View>

            <View style={[styles.viewInput, { flexDirection: g.lang == 'en' ? 'row' : 'row-reverse', }]}>
              <View style={{ flexDirection: g.lang == 'en' ? 'row' : 'row-reverse', alignItems: 'center' }}>
                <Icon name='unlock' type='AntDesign' style={{ fontSize: 22, color: g.move }} />

                <TextInput
                  autoCorrect={false}
                  onChangeText={(password) => this.setState({ password })}
                  secureTextEntry={this.state.password != '' && this.state.showPass ? true : false}
                  placeholder={this.state.lang.PASSWORD}
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

            <View style={[styles.row,
            { flexDirection: g.lang == 'en' ? 'row' : 'row-reverse', }]}>
              <TouchableOpacity activeOpacity={1}
                onPress={() => {
                  this.setState({
                    toggle: !this.state.toggle
                  })
                }}>
                <View style={{
                  flexDirection: g.lang == 'en' ? 'row' : 'row-reverse',
                  alignItems: 'center'
                }}>
                  <Icon
                    name={this.state.toggle ? 'toggle-switch-outline' : 'toggle-switch-off-outline'}
                    type='MaterialCommunityIcons'
                    style={[styles.toggleIcon, { color: g.move, }]} />

                  <Text style={[styles.forget]} >  {this.state.lang.REMEBER_ME}</Text>
                </View>
              </TouchableOpacity>


              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('ResetPasswordScreen', { 'lang': this.state.lang })
              }}>
                <Text style={[styles.forget,
                {
                  
                  textAlign: g.lang == 'ar' ? 'left' : 'right',
                }]} >
                  {this.state.lang.FORGET_PASSWORD}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('OrdersScreen')
              }}>
              <View
                style={[styles.btn,{backgroundColor: g.move,}]}
              >

                <Text style={styles.txt_btn}>{this.state.lang.LOGIN}</Text>
              </View>
            </TouchableOpacity>


            <View style={[styles.lang]}>
              <TouchableOpacity style={[styles.btnView,{borderColor:g.move}]} onPress={() => {
                AsyncStorage.setItem('lang', 'ar')
                this.setState({
                  lang: g.ar,
                })
                g.lang = 'ar'
                const resetAction = StackActions.reset({
                  index: 0,
                  actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
                });
                this.props.navigation.dispatch(resetAction);
              }}>
                <Text style={[styles.langTxtAr,{color:g.move}]}>ع</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.btnView,{borderColor:g.move}]} onPress={() => {
                AsyncStorage.setItem('lang', 'en')
                this.setState({
                  lang: g.en,
                })
                g.lang = 'en'
                const resetAction = StackActions.reset({
                  index: 0,
                  actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
                });
                this.props.navigation.dispatch(resetAction);
              }}>
                <Text style={[styles.langTxt,{color:g.move}]}>EN</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </>
    );
  }
}

export default withNavigation(Login);
