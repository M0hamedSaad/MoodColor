import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StatusBar ,LogBox} from 'react-native';
import RootNavigator from './Navigation/RootNavigator';
import AsyncStorage from '@react-native-community/async-storage';
import g from './Screens/global';

LogBox.ignoreAllLogs();
export default class App extends Component {
  constructor() {
    super()
    AsyncStorage.getItem('lang').then(val => {
      if (val == 'ar')
        g.lang = 'ar'
      else
        g.lang = 'en'
    })   }
  componentDidMount() {
   
  }
  render() {
    return (
      <>
        <RootNavigator />
        <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      </>
    )
  }
}



