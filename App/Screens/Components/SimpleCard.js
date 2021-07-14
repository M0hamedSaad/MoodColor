import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import g from '../global';
import { Icon } from 'native-base';
import CustomText from './CustomText';
class SimpleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <View style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    // backgroundColor: 'red',
                    flexDirection: g.lang == 'ar' ? 'row-reverse' : 'row',
                    width: wp('80'),
                    justifyContent: 'space-between',
                    paddingHorizontal: 7,
                    paddingVertical: 7,
                    alignItems: 'center',
                    marginBottom:15
                }}>
                    <View style={{
                        flexDirection: g.lang == 'ar' ? 'row-reverse' : 'row',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            backgroundColor: g.moveOpacity,
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 7,
                            borderRadius: wp('50')
                        }}>
                            <Icon
                                name={this.props.name}
                                type={this.props.type}
                                style={{ fontSize: 22, color: g.move }}

                            />
                        </View>
                        <View style={{
                             marginLeft: g.lang == 'ar' ? 0 : 15,
                             marginRight: g.lang == 'ar' ? 15 : 0,
                        }}>
                            <CustomText
                                txt={this.props.txt}
                                regular={true} />
                        </View>
                    </View>

                    <Icon
                        name={g.lang == 'ar' ? 'left' : 'right'}
                        type={'AntDesign'}
                        style={{ fontSize: 18, color: g.move }}

                    />

                </View>
            </>
        );
    }
}

export default SimpleCard;
