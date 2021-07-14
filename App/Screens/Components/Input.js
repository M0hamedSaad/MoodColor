import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import g from '../global';
import { Icon } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <View style=
                    {[styles.viewInput, {
                        flexDirection: g.lang == 'en' ? 'row' : 'row-reverse',
                        marginTop: this.props.top ? this.props.top : null,
                        marginBottom: this.props.bottom ? this.props.bottom : null,
                        justifyContent: this.props.eye  ? 'space-between' : null
                    }]}>
                    {this.props.name ?
                        <Icon name={this.props.name}
                            type={this.props.type}
                            style={{
                                fontSize: this.props.size ? this.props.size : 22,
                                color: g.move
                            }} />
                        : null}
                    <TextInput
                        ref={this.props.ref}
                        autoFocus={this.props.foucs == true ? true : false}
                        onChangeText={this.props.onchange}
                        keyboardType={this.props.keyboardType ? this.props.keyboardType : null}
                        autoCapitalize='none'
                        editable={this.props.editable == false ? false : true}
                        secureTextEntry={this.props.secure ? this.props.secure : false}
                        autoCorrect={false}
                        placeholder={this.props.placeholder ? this.props.placeholder : null}
                        placeholderTextColor={'#000'}
                        style={[styles.input, {
                            textAlign: g.lang == 'ar' ? 'right' : 'left'
                        }]}
                        defaultValue={this.props.value}
                        blurOnSubmit={false}
                    />
                    {this.props.eye ?
                        <Icon
                            onPress={this.props.onPressIcon}
                            name={this.props.eye}
                            type={this.props.type}
                            style={{
                                fontSize: this.props.size ? this.props.size : 22,
                                color: g.move
                            }} /> : null}
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        textAlign: 'left',
        fontSize: 16,
        padding: 4,
        paddingTop: 10,
        fontFamily: 'Poppins-Regular',
        width: wp('70%'),
        color: '#000'

    },
    viewInput: {
        borderBottomColor: g.moveOpacity,
        borderBottomWidth: .7,
        //justifyContent: 'space-between',
        paddingHorizontal: 5,
        width: wp('80%'),
        textAlign: 'left',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});

export default Input;
