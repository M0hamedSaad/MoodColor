
import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import styles from './style'
import g from '../global';

import AsyncStorage from '@react-native-community/async-storage';


export default class Splash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: g.lang == 'ar' ? g.ar : g.en,
    }

  }
  async componentDidMount() {
  }
  render() {
    AsyncStorage.getItem('lang').then(val => {
      if (val == 'ar') {
        this.setState({
          lang: g.ar
        })
        g.lang = 'ar'
      }
      else {
        this.setState({
          lang: g.en
        })
        g.lang = 'en'

      }
    })
    AsyncStorage.getItem('myColor').then(val => {
      if (val) {
        g.move = val
        g.moveOpacity = val + '20'
      }

    })
    return (
      <View
        key={this.props.lang}
        style={styles.container}>
        <View style={styles.containerLogo}>
          <Image resizeMode='contain'
            style={styles.logo}
            source={require('../../assets/images/Logo.png')}
          />
        </View>
        <View style={styles.containerImage} >
          <Image resizeMode='contain'
            style={styles.ImageView}
            source={require('../../assets/images/logoNow.png')}
          />
          <Text style={styles.TextTitle}>{this.state.lang.WELCOME}</Text>
          <Text style={styles.Text}>{this.state.lang.WELCOME_DETAILS}</Text>
        </View>
      </View>
    );
  }
}


