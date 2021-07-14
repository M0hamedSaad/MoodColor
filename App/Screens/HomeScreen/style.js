
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import g from '../global';
export default {
        container: {
                flex: 1,
                backgroundColor: '#fff',
        },
        containerLogo: {
                paddingLeft: 20,
                paddingTop: 20
        },
        logo: {
                width: '35%',
                height: 50,
                paddingRight: 20,
                paddingBottom: 20
        },
        containerImage: {
                flex: 1,
                alignItems: 'center',
                marginBottom: hp('12%')
        },
        ImageView: {
                width: '95%',
                height: '75%'
        },
        TextTitle: {
                color: '#000',
                fontWeight: 'bold',
                fontSize: 28,
                paddingBottom: 10,
                fontFamily: g.semiBold

        },
        Text: {
                color: '#000',
                fontSize: 15,
                fontWeight: '200',
                fontFamily: g.Regular,
                textAlign:'center'

        }

}