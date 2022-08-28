import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLOR, ICONS, images} from '../../constants';
import {StylesLogSign} from '../loginSignup';

export class SplashScreen extends React.Component {
  render() {
    return (
      <>
        {/* <StatusBar hidden={true} /> */}
        <ImageBackground
          source={images.splash}
          style={{flex: 1, justifyContent: 'flex-end'}}
          resizeMode="cover">
          <View style={[StylesLogSign.textBtnContainer]}>
            <Text style={StylesLogSign.SplashSrceen_text}>
              Book for Appointment MakeUp artist And Photogragher
            </Text>

            <TouchableOpacity
              style={[StylesLogSign.makeUp_Photo_Btn]}
              onPress={() => {
                this.props.navigation.navigate('LogOrSign');
              }}>
              <Text
                style={[StylesLogSign.makeUp_photo_text, {color: COLOR.White}]}>
                Make Up{' '}
              </Text>

              <Image
                source={images.makeupIcon}
                style={{width: 60, height: 60, marginRight: RFValue(-18)}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                StylesLogSign.makeUp_Photo_Btn,
                {marginBottom: RFValue(0), backgroundColor: COLOR.White},
              ]}>
              <Text style={StylesLogSign.makeUp_photo_text}>Photogragher</Text>
              <FontAwesome5
                name="camera"
                size={ICONS.lgIcon}
                color={COLOR.black}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </>
    );
  }
}
