import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import Splash from './Splash';

class Home extends Component {
  
    constructor(props) {
      super(props)
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('LoginScreen')
    }, 2000);
  }
  render() {
   
    return (
      <Splash/>
    );
  }
}
export default withNavigation(Home);
