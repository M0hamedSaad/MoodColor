import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { withNavigation } from 'react-navigation';
import g from '../global';
import { Icon } from 'native-base';
import Footer from '../../Navigation/Footer';
import Input from '../Components/Input';
import CustomText from '../Components/CustomText';
import SimpleCard from '../Components/SimpleCard';
import Button from '../Components/Button';
import HeadNav from '../Components/HeadNav';

class ChangePassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            oldPass: '',
            password: '',
            confirmPass: '',
            showPassOldPass: true,
            showPass: true,
            showPassConfirm: true

        }
    }


    render() {
        const lang = g.lang == 'ar' ? g.ar : g.en
        return (
            <>
                <View style={{ flex: 1 }}>
                    <HeadNav txt={lang.CHANGE_PASS} />
                    <ScrollView>


                        <View>

                            <CustomText
                                top={15}
                                left={35}
                                txt={lang.OLD_PASS}
                                regular={true}
                                color={g.move} />

                            <Input
                                onPressIcon={() => this.setState({ showPassOldPass: !this.state.showPassOldPass })}
                                eye={this.state.showPassOldPass ? 'eyeo' : 'eye'}
                                type='AntDesign'
                                secure={this.state.showPassOldPass}
                                onchange={val => this.setState({ name: val })}
                                placeholder={lang.OLD_PASS}

                            />

                            <CustomText
                                top={15}
                                left={35}
                                txt={lang.NEW_PASS}
                                regular={true}
                                color={g.move} />

                            <Input
                                onPressIcon={() => this.setState({ showPass: !this.state.showPass })}
                                eye={this.state.showPass ? 'eyeo' : 'eye'}
                                type='AntDesign'
                                secure={this.state.showPass}
                                onchange={val => this.setState({ name: val })}
                                placeholder={lang.NEW_PASS}

                            />

                            <CustomText
                                top={15}
                                left={35}
                                txt={lang.CONFIRM_NEW_PASS}
                                regular={true}
                                color={g.move} />

                            <Input
                                onPressIcon={() => this.setState({ showPassConfirm: !this.state.showPassConfirm })}
                                eye={this.state.showPassConfirm ? 'eyeo' : 'eye'}
                                type='AntDesign'
                                secure={this.state.showPassConfirm}
                                onchange={val => this.setState({ name: val })}
                                placeholder={lang.CONFIRM_NEW_PASS}

                            />


                            <Button
                                onPress={() => { this.props.navigation.navigate('ChangePasswordScreen') }}
                                txt={'    ' + lang.CONFIRM + '    '}
                                top={50}
                                bottom={25}
                            />
                        </View>
                    </ScrollView>
                </View>
            </>
        );
    };
}

export default withNavigation(ChangePassword);
