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

class PersonalData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            birth: '',
            edit: false,
            radio: true
        }
    }


    render() {
        const lang = g.lang == 'ar' ? g.ar : g.en
        return (
            <>
                <View style={{ flex: 1 }}>
                    <HeadNav txt={lang.PERSONAL_DATA} />
                    <ScrollView>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ edit: !this.state.edit })
                            }}
                            style={g.lang == 'ar' ? styles.editIconAr : styles.editIconEn}>
                            <Icon
                                name={'edit'}
                                type={'AntDesign'}
                                style={{
                                    fontSize: 25,
                                    color: g.move,
                                }}
                            />
                        </TouchableOpacity>

                        <View>
                            {/**Profile Picture*/}
                            <View style={styles.center}>
                                <TouchableOpacity style={[styles.imageView, { backgroundColor: g.moveOpacity }]}>
                                    <Image
                                        style={styles.imageSize}
                                        source={require('../../Images/man.png')}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity style={[styles.borderCamera, { backgroundColor: g.moveOpacity }]}>
                                    <Icon
                                        name={'camera'}
                                        type={'EvilIcons'}
                                        style={{
                                            fontSize: 25, color: g.move,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>

                            {/**Name */}

                            <CustomText
                                top={15}
                                left={35}
                                txt={lang.YOUR_NAME}
                                regular={true}
                                color={g.move} />

                            <Input
                                key={this.state.edit}
                                foucs={this.state.edit}
                                name='user'
                                type='AntDesign'
                                onchange={val => this.setState({ name: val })}
                                value={'Hussein Alaa'}
                                editable={this.state.edit}
                            />

                            <CustomText
                                top={35}
                                left={35}
                                txt={lang.BIRTH}
                                regular={true}
                                color={g.move} />

                            <Input
                                name='date'
                                type='Fontisto'
                                size={18}
                                onchange={val => this.setState({ birth: val })}
                                value={'1-1-1990'}
                                editable={this.state.edit}
                            />

                            <CustomText
                                top={35}
                                left={35}
                                txt={lang.JOB}
                                regular={true}
                                color={g.move} />

                            <Input
                                name='subtitles-outline'
                                type='MaterialCommunityIcons'
                                onchange={val => this.setState({ birth: val })}
                                value={'React Native Developer'}
                                editable={this.state.edit}
                            />

                            <CustomText
                                top={35}
                                left={35}
                                txt={lang.INCOME}
                                regular={true}
                                color={g.move} />

                            <Input
                                name='attach-money'
                                type='MaterialIcons'
                                onchange={val => this.setState({ birth: val })}
                                value={'500$-3000 / year'}
                                editable={this.state.edit}
                            />

                            <CustomText
                                top={35}
                                left={35}
                                txt={lang.GENDER}
                                regular={true}
                                color={g.move} />

                            <View style={[styles.RadiosView, {
                                flexDirection: g.lang == 'ar' ? 'row-reverse' : 'row',

                            }]}>
                                <TouchableOpacity style={[styles.singleRadioView, {
                                    backgroundColor: g.moveOpacity,
                                    flexDirection: g.lang == 'ar' ? 'row-reverse' : 'row',
                                }]}
                                    onPress={() => { this.setState({ radio: !this.state.radio }) }}
                                >
                                    <View style={[styles.outer, { borderColor: g.move }]}>
                                        <View style={this.state.radio ? [styles.innerActive, { backgroundColor: g.move }] : styles.innerdeAtive} />
                                    </View>
                                    <CustomText
                                        txt={lang.MALE}
                                        regular={true}
                                        color={g.move} />
                                </TouchableOpacity>

                                <TouchableOpacity style={[styles.singleRadioView, {
                                    backgroundColor: g.moveOpacity,
                                    flexDirection: g.lang == 'ar' ? 'row-reverse' : 'row',
                                }]}
                                    onPress={() => { this.setState({ radio: !this.state.radio }) }}
                                >
                                    <View style={[styles.outer, { borderColor: g.move }]}>
                                        <View style={!this.state.radio ? [styles.innerActive, { backgroundColor: g.move }] : styles.innerdeAtive} />
                                    </View>
                                    <CustomText
                                        txt={lang.FEMALE}
                                        regular={true}
                                        color={g.move} />
                                </TouchableOpacity>

                            </View>

                            <Button
                                onPress={() => { this.props.navigation.navigate('ChangePasswordScreen') }}
                                txt={'    ' + lang.CHANGE_PASS + '    '}
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

export default withNavigation(PersonalData);
