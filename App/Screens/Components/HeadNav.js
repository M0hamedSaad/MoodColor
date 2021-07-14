import React, { Component } from 'react';
import { View, Text ,TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import g from '../global';
import { Icon } from 'native-base';
import CustomText from './CustomText';
class HeadNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <View style={{
                    width: wp('100'),
                    height: hp('10'),
                    backgroundColor: '#fff',
                    flexDirection: g.lang == 'ar' ? 'row-reverse' : 'row',
                    paddingHorizontal: 25,
                   // elevation: 5,
                    alignItems:'center'
                }}>
                    <TouchableOpacity
                        
                    onPress={()=>{this.props.navigation.pop()}}
                    >

                        <Icon
                            name={'keyboard-backspace'}
                            type={'MaterialCommunityIcons'}
                            style={{
                                fontSize: 25, color: g.move,
                                transform: [{ rotateY: g.lang == 'ar' ? '180deg' : '0deg' }],

                            }}
                        />
                    </TouchableOpacity>

                    <View style={{
                        marginLeft:  'auto',
                        marginRight:  'auto',
                    }}>
                        <CustomText
                            txt={this.props.txt}
                            header={true}
                            color={g.move}
                        />
                    </View>

                </View>
            </>
        );
    }
}

export default withNavigation(HeadNav);
