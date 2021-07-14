import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Platform } from 'react-native';
import g from '../global';
export default {
    contain: {
        height: hp('100%'), flex: 1,
    },
    logo: {
        width: wp('25'),
        height: hp('5'),
        margin: 20,
        marginTop: Platform.OS == "ios" ? 30 : 10,
        marginBottom: 10
    },
    containWelcome: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    WelcomeTest: {
        fontSize: 24,
        color: '#000',
        fontWeight: Platform.OS == "ios" ? "700" : 'bold',
        fontFamily: 'Poppins-SemiBold'

    },
    ImageIcon: {
        width: wp('60'),
        height: hp('30'),
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    containInput: {
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    viewInput: {
        borderBottomColor: '#000',
        borderBottomWidth: 0.5,
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        width: wp('80%'),
        textAlign: 'left',
        alignItems: 'center'
    },
    input: {
        textAlign: 'left',
        fontSize: 16,
        padding: 7,
        paddingTop: 16,
        fontFamily: 'Poppins-Regular',
        width: wp('65%'),
        color: '#000'

    },
    forget: {
        fontSize: 13,
        fontWeight: Platform.OS == "ios" ? "500" : '600',
        marginTop: hp('3%'),
        textAlign: 'right',
        fontFamily: 'Poppins-Light'
    },
    btn: {
        marginTop: hp('3%'),
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        height: hp('6%'),
        width: wp('50%'),
        backgroundColor: g.move
    },
    lang: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row-reverse',
    },
    btnView: {
        marginTop: hp('3%'),
        marginRight: wp('4'),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: g.move,
        // padding: 10,
        borderRadius: wp('50%'),
        width: 40,
        height: 40
    },
    langTxt: {
        color: g.move,
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold'
    },
    langTxtAr: {
        color: g.move,
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold'
    },
    IconLang: {
        width: 30,
        height: 30
    },
    txt_btn: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold'

    },
    row: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: wp('80')

    },
    toggleIcon: {
        fontSize: 30,
        color: g.move,
        marginTop: 19,
    }

};