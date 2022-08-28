import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLOR, ICONS, FONTS} from '../../constants';
import {StylesLogSign} from '../loginSignup';
import {SocialMediaIcon} from '../../components';
export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // text: '',
      showPass: true,
      logInCorrect: true,
      email_err: '',
      user_email: '',
      pass_err: '',
      user_password: '',
      phone_err: '',
      user_phone: '',
    };
  }

  onEndEditingEmail = value => {
    // eamil
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/; // asdsadsad@sadjkjshd.skldjlskjd
    if (reg.test(value.trim()) == false && value.trim().length != 0) {
      this.setState({email_err: 'Please Enter correct Emial!'});
      return false;
    } else {
      this.setState({email_err: '', user_email: value});
      return true;
    }
  };

  onEndEditingPass = value => {
    // password
    if (value.trim().length < 6 && value.trim().length != 0) {
      this.setState({pass_err: 'Pass should be more than 6 digits!'});
      return false;
    } else {
      this.setState({pass_err: '', user_password: value});
      return true;
    }
  };

  onEndEditingMobile = value => {
    // mobile
    let reg = /^(\+201|01){1}[0-2,5][0-9]{8}$/;
    if (reg.test(value.trim()) == false && value.trim().length != 0) {
      this.setState({phone_err: 'Wrong phone number!'});
      return false;
    } else {
      this.setState({phone_err: ''});
      return true;
    }
  };

  validation() {
    let email = this.state.user_email;
    let pass = this.state.user_password;
    let phone = this.state.user_phone;
    let errors = 0;

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/; // asdsadsad@sadjkjshd.skldjlskjd
    if (reg.test(email.trim()) == false || email.trim().length == 0) {
      this.setState({email_err: 'Please Enter correct Emial!'});
      errors++;
    } else {
      this.setState({email_err: ''});
    }

    // password
    if (pass.trim().length < 6 || pass.trim().length == 0) {
      this.setState({pass_err: 'Pass should be more than 6 digits!'});
      errors++;
    } else {
      this.setState({pass_err: ''});
    }

    let regPhone = /^(\+201|01){1}[0-2,5][0-9]{8}$/;
    if (regPhone.test(phone.trim()) == false || phone.trim().length == 0) {
      this.setState({phone_err: 'Wrong phone number!'});
      errors++;
    } else {
      this.setState({phone_err: ''});
    }

    if (errors == 0) {
      alert('success');
      // axios
    }
  }

  render() {
    return (
      <>
        <View
          style={{
            backgroundColor: COLOR.White,
            flex: 1,
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={[StylesLogSign.view_logo, {marginBottom: RFValue(50)}]}>
              <Text style={StylesLogSign.textstyle1}> Make Beauty </Text>
              <Text style={StylesLogSign.textstyle2}> Makeup artist </Text>
            </View>

            <View style={StylesLogSign.email_passView}>
              <Icons
                name="user"
                size={ICONS.mdIcon}
                color={COLOR.PrimaryColor}
                style={{marginLeft: RFValue(10)}}
              />

              <TextInput
                value={this.state.user_email}
                onChangeText={value => {
                  this.setState({user_email: value});
                }}
                placeholder=" Email"
                style={StylesLogSign.email_passTextInput}
                keyboardType="email-address"
                onEndEditing={e => this.onEndEditingEmail(e.nativeEvent.text)}
              />
            </View>
            <Text
              style={{
                fontSize: FONTS.h5,
                color: COLOR.dark_red,
                marginLeft: RFValue(30),
                marginTop: 5,
              }}>
              {this.state.email_err}
            </Text>

            <View
              style={[StylesLogSign.email_passView, {marginTop: RFValue(20)}]}>
              <Icons
                name="phone"
                size={ICONS.mdIcon}
                color={COLOR.PrimaryColor}
                style={{marginLeft: RFValue(10)}}
              />

              <TextInput
                value={this.state.user_phone}
                onChangeText={value => {
                  this.setState({user_phone: value});
                }}
                placeholder=" Phone number "
                style={StylesLogSign.email_passTextInput}
                keyboardType="phone-pad"
                maxLength={this.state.user_phone.startsWith('+2') ? 13 : 11}
                onEndEditing={e => this.onEndEditingMobile(e.nativeEvent.text)}
              />
            </View>
            <Text
              style={{
                fontSize: FONTS.h5,
                color: COLOR.dark_red,
                marginLeft: RFValue(30),
                marginTop: 5,
              }}>
              {this.state.phone_err}
            </Text>

            <View
              style={[StylesLogSign.email_passView, {marginTop: RFValue(25)}]}>
              <Icons
                name="lock"
                size={ICONS.mdIcon}
                color={COLOR.PrimaryColor}
                style={{marginLeft: RFValue(10)}}
              />

              <TextInput
                value={this.state.user_password}
                onChangeText={value => {
                  this.setState({user_password: value});
                }}
                placeholder="  Password"
                style={StylesLogSign.email_passTextInput}
                secureTextEntry={this.state.showPass}
                onEndEditing={e => this.onEndEditingPass(e.nativeEvent.text)}
              />

              <TouchableOpacity
                onPress={() => {
                  this.setState({showPass: !this.state.showPass});
                }}
                style={{
                  alignSelf: 'stretch',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: RFValue(120),
                }}>
                <Icons
                  name={this.state.showPass ? 'eye-slash' : 'eye'}
                  size={ICONS.mdIcon}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: FONTS.h5,
                color: COLOR.dark_red,
                marginLeft: RFValue(30),
                marginTop: 5,
              }}>
              {this.state.pass_err}
            </Text>

            <TouchableOpacity
              style={StylesLogSign.view_sign}
              onPress={() => {
                // this.state.logInCorrect
                //   ? this.props.navigation.navigate('HomeTabs')
                //   : null;
                this.validation();
              }}>
              <Text style={StylesLogSign.textstyle4}> Sign Up </Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: RFValue(50),
              }}>
              <Text style={{fontSize: FONTS.h5, color: COLOR.dark_gray}}>
                {' '}
                Already have an account?
              </Text>
              <TouchableOpacity
                style={{
                  width: RFValue(60),
                  height: RFValue(50),
                  justifyContent: 'center',
                }}
                onPress={() => {
                  this.props.navigation.navigate('Login');
                }}>
                <Text style={{fontSize: FONTS.h5, color: COLOR.PrimaryColor}}>
                  {' '}
                  Log In{' '}
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: RFValue(18),
                flexDirection: 'row',
                width: RFValue(320),
              }}>
              <View
                style={{
                  width: RFValue(140),
                  height: RFValue(1),
                  borderBottomWidth: RFValue(1),
                  borderBottomColor: COLOR.gray,
                }}></View>

              <Text style={{fontSize: FONTS.h5}}> OR </Text>

              <View
                style={{
                  width: RFValue(140),
                  height: RFValue(1),
                  borderBottomWidth: RFValue(1),
                  borderBottomColor: COLOR.gray,
                }}></View>
            </View>

            <SocialMediaIcon />
          </ScrollView>
        </View>
      </>
    );
  }
}

// import React, { useState } from "react";
// import { Button, Text, View } from "react-native"
// import { SocialMediaIcon } from "../../components";

// export function SignUp(props) {
//     const { navigation } = props
//     // const [hasOldData,setOldData]=useState(true)
//     return (
//         <>
//             <View style={{ flex: 1, backgroundColor: '#ccc', alignItems: 'center' }}>
//                 <Text style={{ fontSize: 27, fontWeight: 'bold' }}>SignUp Page</Text>
//                 <Button title="SignUp" onPress={() => {
//                 //   ! hasOldData?
//                    navigation.navigate("HomeTabs")
//                 }} />
//             </View>
//         </>
//     )
// }
