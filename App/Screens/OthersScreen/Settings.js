import React, { Component, createRef } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import styles from './styles';
import { withNavigation, StackActions, NavigationActions } from 'react-navigation';
import g from '../global';
import { Icon } from 'native-base';
import Footer from '../../Navigation/Footer';
import Input from '../Components/Input';
import CustomText from '../Components/CustomText';
import SimpleCard from '../Components/SimpleCard';
import Button from '../Components/Button';
import HeadNav from '../Components/HeadNav';
import AsyncStorage from '@react-native-community/async-storage';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'
import { ColorPicker, fromHsv, toHsv } from 'react-native-color-picker'
import ActionSheet2 from "react-native-actions-sheet";



class Settings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            color: g.move
        }
    }

    showActionSheet = () => {
        this.ActionSheet.show()
    }

    showActionSheetCamera = () => {
        this.ActionSheetCamera.show()
    }

    _changeLang(index) {
        if (index == 2) {
            AsyncStorage.setItem('lang', 'en')
            g.lang = 'en'
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
            });
            this.props.navigation.dispatch(resetAction);
        }
        if (index == 1) {
            AsyncStorage.setItem('lang', 'ar')
            g.lang = 'ar'
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
            });
            this.props.navigation.dispatch(resetAction);
        }
        else return false


    }
    render() {
        const lang = g.lang == 'ar' ? g.ar : g.en
        const options = [
            'Cancel',
            <CustomText txt={'العربية'}
                header={true}
                color={g.move}
            />,
            <CustomText txt={'English'}
                header={true}
                color={g.move}
            />,
        ]
        
        const options2 = [
            'Cancel',
            <CustomText txt={'Camera'}
                header={true}
                color={g.move}
            />,
            <CustomText txt={'QR-Code'}
                header={true}
                color={g.move}
            />,
        
        ]
        return (
            <>
                <View style={{ flex: 1 }}>
                    <HeadNav txt={'Settings'} />
                    <ScrollView>
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    this.showActionSheet()
                                }}>
                                <SimpleCard
                                    txt={lang.CHANGE_LANG}
                                    name='world-o'
                                    type='Fontisto' />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this.showActionSheetCamera() }}>
                                <SimpleCard
                                    txt={lang.CAMERA}
                                    name='camerao'
                                    type='AntDesign' />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                this.setState({ modalVisible: true })
                            }}>
                                <SimpleCard
                                    txt={lang.CHANGE_COLOR}
                                    name='color-palette-outline'
                                    type='Ionicons' />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <ActionSheet
                        ref={o => this.ActionSheet = o}
                        // title={<Text style={{ color: '#000', fontSize: 18 }}>Which one do you like?</Text>}
                        options={options}
                        cancelButtonIndex={0}
                        destructiveButtonIndex={0}
                        onPress={(index) => { /* do something */
                            console.log(index);
                            this._changeLang(index)
                        }}
                    />

                    <ActionSheet
                        ref={o => this.ActionSheetCamera = o}
                        // title={<Text style={{ color: '#000', fontSize: 18 }}>Which one do you like?</Text>}
                        options={options2}
                        cancelButtonIndex={0}
                        destructiveButtonIndex={0}
                        onPress={(index) => { /* do something */
                            console.log(index);
                            if (index == 1) {
                                this.props.navigation.navigate('CameraScreen')
                            }
                            if (index == 2) {
                                this.props.navigation.navigate('QRcodeScreen')
                            }
                        }}
                    />
                </View>



                <Modal
                    animationType="slide"
                    //  style={{ alignItems: 'center', justifyContent: 'center' }}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({
                            modalVisible: false
                        })
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => { this.setState({ modalVisible: false }) }}
                        style={{ position: 'absolute', width: "100%", height: '100%' }}
                    />
                    <View style={{
                        height: 250, width: '80%', justifyContent: 'center',
                        elevation: 4, backgroundColor: '#fff', marginLeft: 'auto', marginRight: 'auto',
                        marginTop: 'auto', marginBottom: 'auto', borderRadius: 7
                    }}>
                        <ColorPicker
                            //   onColorSelected={color => alert(`Color selected: ${color}`)}
                            nestedScrollEnabled={true}

                            onColorChange={color => {
                                this.setState({ color: fromHsv(color) })
                                //     console.log(`Color selected: ${JSON.stringify(fromHsv(color))}`)
                            }}
                            style={{ flex: .9 }}
                            hideSliders
                            gestureEnabled
                            keyboardShouldPersistTaps
                            defaultColor={g.move}	
                        />
                        <View style={{ marginTop: 'auto' }}>
                            <Text style={styles.resetColor}
                                onPress={() => {
                                    AsyncStorage.setItem('myColor', '#6a27b3')
                                    g.move = '#6a27b3'
                                    g.moveOpacity = '#eedeff'

                                    const resetAction = StackActions.reset({
                                        index: 0,
                                        actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
                                    });
                                    this.props.navigation.dispatch(resetAction);
                            }}
                            >Reset Color</Text>
                            <Button
                                key={this.state.color}
                                txt={'Choose Your color'}
                                color={this.state.color}
                                colorOpacity={this.state.color + '20'}
                                onPress={() => {
                                    this.setState({ modalVisible: false })

                                    AsyncStorage.setItem('myColor', this.state.color)
                                    g.move = this.state.color
                                    g.moveOpacity = this.state.color + '20'

                                    const resetAction = StackActions.reset({
                                        index: 0,
                                        actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
                                    });
                                    this.props.navigation.dispatch(resetAction);
                                }}
                            />
                        </View>
                    </View>
                </Modal>
            </>
        );
    };
}


export default withNavigation(Settings);
