import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { withNavigation } from 'react-navigation';
import g from '../global';
import Footer from '../../Navigation/Footer';
import Input from '../Components/Input';
import CustomText from '../Components/CustomText';
import SimpleCard from '../Components/SimpleCard';
import Button from '../Components/Button';

class Others extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {
        const lang = g.lang == 'ar' ? g.ar : g.en

        return (
            <>
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        <View>
                            {/**ImageCard */}
                            <View style={styles.center}>
                                <View style={[styles.imageCard,
                                { flexDirection: g.lang == 'ar' ? 'row-reverse' : 'row' }]}>
                                    <View style={[styles.imageView,{backgroundColor:g.moveOpacity,}]}>
                                        <Image
                                            style={styles.imageSize}
                                            source={require('../../Images/man.png')}
                                        />
                                    </View>
                                    <View >
                                        <CustomText
                                            header={true}
                                            txt={'React Native Developer'}
                                        />
                                        <CustomText
                                            header={false}
                                            txt={'Hussein Alaa'}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.line} />

                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('PersonalDataScreen') }}>
                                <SimpleCard
                                    txt={lang.PERSONAL_DATA}
                                    name='user'
                                    type='AntDesign' />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('SettingsScreen') }}>
                                <SimpleCard
                                    txt={lang.SETTINGS}
                                    name='setting'
                                    type='AntDesign' />
                            </TouchableOpacity>

                            <View style={[styles.line, { marginTop: 0 }]} />

                            <TouchableOpacity onPress={() => { }}>
                                <SimpleCard
                                    txt={lang.FAQS}
                                    name='dots-horizontal'
                                    type='MaterialCommunityIcons' />
                            </TouchableOpacity>




                            <Button
                                txt={'    ' + lang.LOGOUT + '    '}
                                name='logout'
                                type='AntDesign'
                                top={100}
                            />
                        </View>
                    </ScrollView>
                    <Footer tab={5} />
                </View>
            </>
        );
    };
}

export default withNavigation(Others);
