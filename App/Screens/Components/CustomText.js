import React, { Component } from 'react';
import { View, Text } from 'react-native';
import g from '../global';
class CustomText extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <Text style={{
                    marginLeft: g.lang == 'ar' ? 0 : this.props.left ? this.props.left : 5,
                    marginRight: g.lang == 'ar' ? this.props.left ? this.props.left : 5 : 0,
                    marginTop: this.props.top ? this.props.top : null,
                    marginBottom: this.props.bottom ? this.props.bottom : null,
                    textAlign: g.lang == 'ar' ? 'right' : 'left',
                    color: this.props.color ? this.props.color : '#000',
                    fontSize: this.props.header ? 16 : 14,
                    fontFamily: this.props.header ? 'Poppins-SemiBold' :
                        this.props.regular ? 'Poppins-Regular' : 'Poppins-Light'
                }}>
                    {this.props.txt}
                </Text>
            </>
        );
    }
}

export default CustomText;
