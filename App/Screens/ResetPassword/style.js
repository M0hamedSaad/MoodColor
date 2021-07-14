import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Platform } from 'react-native';
import g from '../global';

export default {
  Container: {
    height: hp('100%')
  },
  arrow: {
    color: '#000',
    fontSize: 18,
    marginTop: hp('5%'),
    marginLeft: wp('5%')
  },
  ViewContainer: {
    paddingHorizontal: 25,
  },
  change: {
    color: '#000',
    fontSize: 20,
    marginTop: hp('4%'),
    fontWeight: Platform.OS == "ios" ? "700" : null,
    fontFamily: g.semiBold

  },
  subTitle: {
    color: '#000',
    fontSize: 14,
    marginTop: hp('2%'),
    fontWeight: Platform.OS == "ios" ? "200" : '200',
    fontFamily: g.Regular

  },
  ContainerInput: {
    marginRight: 'auto',
    marginLeft: 'auto',
    margin: 40
  },
  viewInput: {
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    width: wp('80%'),
    textAlign: 'left',
    fontFamily: g.Regular

  },
  input: {
    textAlign: 'left',
    fontSize: 16,
    padding: 2,
    fontFamily: g.Regular,
    color: '#000'

  },
  btn: {
    marginTop: hp('3%'),
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    backgroundColor: g.move,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('6%'),
    width: wp('80%')
  },
  txt_btn: {
    fontSize: 16,
    color: '#fff',
    fontWeight: Platform.OS == "ios" ? "800" : null,
    textAlign: 'center',
    fontFamily: g.semiBold

  },
};