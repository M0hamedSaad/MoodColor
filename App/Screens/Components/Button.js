import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import g from '../global';
import { Icon } from 'native-base';
import CustomText from './CustomText';
class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <TouchableOpacity style={{
                    backgroundColor: this.props.colorOpacity ? this.props.colorOpacity : g.moveOpacity,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: g.lang == 'ar' ? 'row-reverse' : 'row',
                    width: wp('80'),
                    paddingVertical: 15,
                    borderRadius: 7,
                    marginTop: this.props.top ? this.props.top : null,
                    marginBottom: this.props.bottom ? this.props.bottom : null,

                }}
                    onPress={this.props.onPress}>
                    <CustomText
                        txt={this.props.txt}
                        header={true}
                        color={this.props.color ? this.props.color : g.move}
                    />
                    {this.props.name ?
                        <Icon
                            name={this.props.name}
                            type={this.props.type}
                            style={{
                                fontSize: 25, color: g.move,
                                transform: [{ rotateY: g.lang == 'ar' ? '180deg' : '0deg' }],

                            }}

                        />
                        : null}
                </TouchableOpacity>
            </>
        );
    }
}

export default Button;
