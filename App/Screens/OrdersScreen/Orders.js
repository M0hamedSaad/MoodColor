import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';
import { withNavigation } from 'react-navigation';
import g from '../global';
import Footer from '../../Navigation/Footer';
import Input from '../Components/Input';



class Orders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lang: g.lang == 'ar' ? g.ar : g.en,
        }
    }
    onchange = (value) => {
    
}

    render() {
        return (
            <>
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        <View style={styles.center}>
                       
                            <Text style={[styles.soon,{color:g.move}]}>Coming Soon</Text>
                        </View>
                    </ScrollView>
                    <Footer tab={3} />
                </View>
            </>
        );
    };
}

export default withNavigation(Orders);
