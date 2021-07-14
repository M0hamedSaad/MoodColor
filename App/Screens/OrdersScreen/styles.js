import { StyleSheet, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import g from '../global';
const styles = StyleSheet.create({
  center: {
    alignItems: 'center',    
  }
  ,
  soon: {
    fontFamily: g.Regular,
    fontSize: 30,
    color: g.move,
    marginTop:hp('40')
  
  }
});
export default styles;