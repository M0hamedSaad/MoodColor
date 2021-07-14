import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Platform, Image } from "react-native";
import { Text, } from "native-base";
import { withNavigation } from "react-navigation"
import g from '../Screens/global';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'native-base';


function Footer({ navigation, tab
}) {
//  const [tab, setTab] = useState(3)
  const [lang] = useState(g.lang == 'ar' ? g.ar : g.en)

  const complete = () => {
    navigation.navigate('');
   // setTab(1)
  }
  const pickUP = () => {
    //setTab(2);
    navigation.navigate('');

  }
  const orders = () => {
    navigation.navigate('OrdersScreen');
    //setTab(3);
  }
  const bells = () => {
    //setTab(4);
    navigation.navigate('');

  }
  const profile = () => {
  //  setTab(5);
    navigation.navigate('OthersScreen');
  }

  return (

    <View
      style={styles.containrer}>

      <TouchableOpacity style={styles.btn}
        onPress={complete}>
        <Icon
          name='ticket'
          type='Foundation'
          style={{ fontSize: 30, color: tab == 1 ? g.move : '#000' }}
        />

        <Text style={[styles.Txt, { color: tab == 1 ? g.move : 'black' }]}
        >{lang.COMPLETED}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}
        onPress={pickUP}>
        <Icon
          name='handbag'
          type='SimpleLineIcons'
          style={{ fontSize: 30, color: tab == 2 ? g.move : '#000' }}
        />

        <Text style={[styles.Txt, { color: tab == 2 ? g.move : 'black' }]}
        >{lang.PICK_UP}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        position: 'absolute', alignItems: 'center',
        zIndex: 1, backgroundColor: '#fff',
        top: -30, elevation: 0,
        left: g.windowWidth / 2 - 30,
        borderRadius: wp('50'),
        elevation: 2,
        height: 50,
        width:50


      }}
        onPress={orders}>
        <View style={{
          shadowColor: "#fff",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          padding: 7,
          shadowOpacity: 0.25,
        }}>
          <Icon
          name='truck-delivery-outline'
          type='MaterialCommunityIcons'
          style={{ fontSize: 30, color: tab == 3? g.move : '#000' }}
        />
        </View>


      </TouchableOpacity>

      <View style={styles.btn} >
        <Text style={[styles.Txt, { color: tab == 3 ? g.move : 'black', marginTop: 10 }]}>
          {lang.ORDERS}
        </Text>
      </View>



      <TouchableOpacity style={styles.btn}
        onPress={bells}>
        <Icon
          name='carryout'
          type='AntDesign'
          style={{ fontSize: 30, color: tab == 4 ? g.move : '#000' }}
        />
        <Text style={[styles.Txt, { color: tab == 4 ? g.move : 'black' }]}
        >{lang.SHIFTS}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}
        onPress={profile}>
        <Icon
          name='more-horiz'
          type='MaterialIcons'
          style={{ fontSize: 30, color: tab == 5? g.move : '#000' }}
        />
        <Text style={[styles.Txt, { color: tab == 5 ? g.move : 'black' }]}
        >{lang.PROFILE}</Text>
      </TouchableOpacity>


    </View>
  )
}
const styles = StyleSheet.create({
  containrer: {
    backgroundColor:'#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-around',
    borderColor: 'transparent',
    width: '100%',
    paddingHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingVertical: 7,
    elevation:5
    
  },
  btn:
  {

    justifyContent: 'center',
    alignContent: 'center', alignItems: 'center', width: g.windowWidth / 5
  },
  Txt: {
    marginTop: hp('.5%'),
    marginLeft: 0, textAlign: 'center', fontSize: 13,
    fontFamily: g.Regular
  }




});

export default withNavigation(Footer)