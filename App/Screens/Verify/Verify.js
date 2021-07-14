import React, { Component } from 'react';
import { Image, Text, View, BackHandler } from 'react-native';
import { Icon } from 'native-base';
import styles from './verifyStyle';
import SMSVerifyCode from 'react-native-sms-verifycode'
import { withNavigation } from 'react-navigation';
import g from '../global';




let lang

class Verify extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    reset = () => {
        this.verifycode.reset()
    }

    
    render() {
         lang = this.props.navigation.getParam('lang')
        return (
            <>
                <View style={styles.ViewContainer}>
                    <Icon
                        name='arrowdown'
                        type='AntDesign'
                        style={styles.iconStyle}
                        onPress={() => this.props.navigation.replace('ResetPasswordScreen',{'lang':lang})
                        }
                    />
                    <Image style={styles.icon}
                        source={require('../../assets/images/succSign.png')} />
                    <Text style={styles.Title}>{lang.RESENT_CODE_SENT}</Text>
                    <View style={styles.notSend}>
                        <Text style={styles.subTitle}>
                            {lang.ENTER_RESENT_CODE}
                        </Text>
                    </View>

                    <SMSVerifyCode
                        ref={ref => (this.verifycode = ref)}
                        autoFocus={true}
                        onInputCompleted={(text) => {
                            this.props.navigation.navigate('CreatePasswordScreen',{'lang':lang})
                        }}
                        verifyCodeLength={5}
                        containerPaddingVertical={5}
                        containerPaddingHorizontal={10}
                        containerPaddingRight={60}
                        codeViewWidth={50}
                        codeViewBorderColor="#000000"
                        codeFontSize={24}
                        focusedCodeViewBorderColor={g.move}
                        codeViewBorderWidth={1.5}
                        codeViewBorderRadius={5}
                    />

                    <Text style={styles.subTitle}>{lang.SEND_AGAIN}</Text>
                </View>
            </>
        );
    };
}

export default withNavigation(Verify);
