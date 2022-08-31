import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {StylesForgetPass} from '../screens/forgetPass/styles';
import {COLOR, ICONS} from '../constants';
import {RFValue} from 'react-native-responsive-fontsize';
export function BackArrowHeader(props) {
  const {onPress} = props;
  return (
    <>
      <View style={[StylesForgetPass.arrowContainer]}>
        <TouchableOpacity onPress={onPress}>
          <FontAwesome5
            name="chevron-left"
            color={COLOR.black}
            size={ICONS.xlIcon}
            style={{marginRight: RFValue(15)}}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
