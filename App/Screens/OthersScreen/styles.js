import { StyleSheet, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import g from '../global';
const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  imageCard: {
    //backgroundColor:'white',
    width: wp('80'),
    // elevation: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: hp('5'),
    alignItems: 'center',

  },
  imageView: {
    backgroundColor: g.moveOpacity,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: wp('2')
  },
  imageSize: {
    width: 50,
    height: 50
  },
  line: {
    width: wp('80'),
    backgroundColor: '#00000010',
    height: .5,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15, marginBottom: 15
  },

  borderCamera: {
    backgroundColor: g.moveOpacity,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: wp('2'),
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: -20,
    zIndex: 1,
    marginLeft: 50
  },
  RadiosView: {
    width: wp('80'),
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between',
    marginTop: 15, marginBottom: 15
  },
  singleRadioView: {
    width: wp('35'),
    height: hp('7'),
    backgroundColor: g.moveOpacity,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:3
  },
  outer: {
    width: 18,
    height: 18,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: g.move,
    backgroundColor: '#fff',
    alignItems: 'center', justifyContent: 'center'
  },
  innerActive: {
    width: 10,
    height: 10,
    borderRadius: 25,
    backgroundColor: g.move
  },
  innerdeAtive: {

  },
  editIconEn: {
    position: 'absolute',
    right:50
  },
  editIconAr: {
    position: 'absolute',
    left:50
  },
  resetColor: {
    padding: 7,
    color: '#6a27b3',
    fontWeight: 'bold',
    textDecorationLine:"underline"
  },
});
export default styles;