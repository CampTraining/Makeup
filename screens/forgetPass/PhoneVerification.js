import * as React from 'react';
import {
  Text,
  Stylesheet,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {RFValue} from 'react-native-responsive-fontsize';
import {StylesForgetPass} from './styles';
import {COLOR, FONTS, ICONS} from '../../constants';

export default class PhoneVerification extends React.Component {
  render() {
    return (
      <>
        <View style={StylesForgetPass.container}>
          <View
            style={[
              StylesForgetPass.arrowContainer,
              {backgroundColor: COLOR.White},
            ]}>
            <TouchableOpacity
              onPress={() => {
                // this.props.navigation.navigate('ForgetPass');
                this.props.navigation.goBack();
              }}>
              <Icon
                name="arrow-left"
                color={COLOR.dark_gray}
                size={ICONS.xlIcon}
                style={{marginRight: RFValue(15), opacity: 0.9}}></Icon>
            </TouchableOpacity>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{backgroundColor: COLOR.White}}>
            <View style={StylesForgetPass.VerficationContainer}>
              <Text
                style={[
                  StylesForgetPass.VerficationText,
                  {marginBottom: RFValue(-15)},
                ]}>
                OTP
              </Text>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 25,
                }}>
                <Text style={StylesForgetPass.VerficationCaption}>
                  Enter your OTP code here
                </Text>
              </View>
            </View>

            <View style={StylesForgetPass.circleInputContainer}>
              <TextInput
                maxLength={1}
                color={COLOR.White}
                fontSize={FONTS.h5}
                keyboardType="numeric"
                style={StylesForgetPass.circleInputView}
              />

              <TextInput
                maxLength={1}
                color={COLOR.White}
                fontSize={FONTS.h5}
                keyboardType="numeric"
                style={StylesForgetPass.circleInputView}
              />

              <TextInput
                maxLength={1}
                color={COLOR.White}
                fontSize={FONTS.h5}
                keyboardType="numeric"
                style={StylesForgetPass.circleInputView}
              />

              <TextInput
                maxLength={1}
                color={COLOR.White}
                fontSize={FONTS.h5}
                keyboardType="numeric"
                style={StylesForgetPass.circleInputView}
              />
            </View>

            <View style={StylesForgetPass.resendContainer}>
              <Text style={StylesForgetPass.resendText}>
                Didn't you receive any code?
              </Text>
              <TouchableOpacity>
                <Text
                  style={[
                    StylesForgetPass.resendText,
                    {color: COLOR.PrimaryColor},
                  ]}>
                  Resend a new code.
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('NewPass');
              }}
              style={[
                StylesForgetPass.resetView,
                {alignSelf: 'center', marginTop: RFValue(12)},
              ]}>
              <View>
                <Text style={StylesForgetPass.resetText}>Next</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </>
    );
  }
}

/* ******************************************************************************************** */
/* STYLE SHEET  ( color - size)*/

// const StylesForgetPass = Stylesheet.create({
//   // container: {
//   //   flex: 1,
//   //   alignItems: "center",
//   //   // justifyContent: "center",
//   //   // backgroundColor: "#44a"
//   // },
//   // arrowContainer: {
//   //   // backgroundColor: "#ddac",
//   //   width: "100%",
//   //   height: RFValue(73),
//   //   justifyContent: "center",
//   //   padding: RFValue(20),
//   // },
//   // VerficationContainer: {
//   //   // backgroundColor: "#daa",
//   //   width: "100%",
//   //   height: RFValue(150),
//   //   // justifyContent: "center",
//   //   alignItems: "center",
//   //   padding: RFValue(15),
//   //   alignSelf: "center",

//   // },
//   // VerficationText: {
//   //   fontSize: RFValue(40),
//   //   color: COLOR.black,
//   //   fontWeight: "900",
//   //   marginBottom: RFValue(5)

//   // },
//   // VerficationCaption: {
//   //   fontSize: FONTS.h4,
//   //   color: COLOR.black,
//   //   alignSelf: "center",
//   //   justifyContent: "center",
//   //   alignItems: "center",
//   // },
//   // inputContainer: {
//   //   width: "100%",
//   //   height: RFValue(100),
//   //   justifyContent: "space-around",
//   //   alignItems: "center",
//   //   // backgroundColor: "#a4a",
//   //   marginTop: RFValue(40),
//   //   flexDirection: "row",
//   //   padding: RFValue(30)
//   // },
//   // inputViwe: {
//   //   width: RFValue(60),
//   //   height: RFValue(60),
//   //   backgroundColor: COLOR.dark_gray,
//   //   borderRadius: RFValue(30),
//   //   flexDirection: "row",
//   //   alignItems: "center",
//   //   alignItems: "center",
//   //   justifyContent: "center",

//   // },
//   // input: {
//   //   width: RFValue(60),
//   //   height: RFValue(60),
//   //   backgroundColor: COLOR.dark_gray,
//   //   borderRadius: RFValue(30),
//   //   flexDirection: "row",
//   //   alignItems: "center",
//   //   alignItems: "center",
//   //   justifyContent: "center",

//   // },
//   // resendContainer: {
//   //   width: "100%",
//   //   height: RFValue(100),
//   //   justifyContent: "center",
//   //   alignItems: "center",
//   //   // backgroundColor: "#adaa4a",
//   //   marginTop: RFValue(60)

//   // },

//   // resendText: {
//   //   fontSize: FONTS.h5,
//   //   color: COLOR.black

//   // },

// })
