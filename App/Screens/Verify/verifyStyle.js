import { StyleSheet, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import g from '../global';
const styles = StyleSheet.create({
    icon: {
        width: 83,
        height: 83,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    Title: {
        paddingTop: 30,
        color: '#000',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: g.semiBold

    },
    subTitle: {
        paddingTop: 30,
        color: '#000',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: g.Regular

    },
    ViewContainer: {
        flex: 1, padding: 24,
        height: hp('100%'),
        marginTop: Platform.OS == "ios" ? hp('5%') : null
    },
    spinner: {
        marginTop: 50,
    },
    notSend: {
        flexDirection: 'row-reverse',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    trySend: {
        fontWeight: Platform.OS == "ios" ? "800" : null,
        color: '#000', fontFamily: g.Regular

    },
    iconStyle: {
        fontSize: 25,
        marginLeft: 'auto',
    }

});
export default styles;