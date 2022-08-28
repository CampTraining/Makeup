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

import axios from 'axios';

export class Login extends React.Component {
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
    if (value.trim().length < 3 && value.trim().length != 0) {
      this.setState({pass_err: 'Pass should be more than 6 digits!'});
      return false;
    } else {
      this.setState({pass_err: '', user_password: value});
      return true;
    }
  };

  validation() {
    let email = this.state.user_email;
    let pass = this.state.user_password;
    let errors = 0;

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/; // asdsadsad@sadjkjshd.skldjlskjd
    if (reg.test(email.trim()) == false || email.trim().length == 0) {
      this.setState({email_err: 'Please Enter correct Emial!'});
      errors++;
    } else {
      this.setState({email_err: ''});
    }

    // password
    if (pass.trim().length < 3 || pass.trim().length == 0) {
      this.setState({pass_err: 'Pass should be more than 6 digits!'});
      errors++;
    } else {
      this.setState({pass_err: ''});
    }

    if (errors == 0) {
      alert('success');
      this.login();
    }
  }

  // axios
  login = () => {
    const data_to_send = {
      email: this.state.user_email,
      pass: this.state.user_password,
      token: 's;djafklsadjf;lksdajfdsafds987f98sd7fdfjdslkfjdsf89798dsf', // firebase
    };

    // axios.get('').then(res => {
    //   if (res.status == 200) {
    //     console.log(res.data);
    //     this.setState({user_data: res.data})
    //   }
    // }).catch(err => {
    //   console.log(err)
    // })

    axios
      .post(
        'https://generation3.000webhostapp.com/project/Training/Auth/user.php',
        data_to_send,
      )
      .then(res => {
        if (res.status == 200) {
          // console.log(res.data);
          if (res.data == 'user not found') {
            alert('user not found');
          } else if (res.data == 'error happen') {
            alert('Error');
          } else {
            console.log(res.data);
            this.props.navigation.navigate('HomeTabs');
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <View
          style={{
            backgroundColor: COLOR.White,
            flex: 1,
          }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">
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
                placeholder=" Phone number or Email"
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
                  // width: RFValue(30),
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
              style={{
                width: RFValue(170),
                height: RFValue(50),
                alignSelf: 'flex-end',
              }}
              onPress={() => {
                this.props.navigation.navigate('ForgetPass');
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'serif',
                  textAlign: 'center',
                  marginTop: RFValue(15),
                  color: COLOR.blue,
                }}>
                {' '}
                Forget password?{' '}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={StylesLogSign.view_sign}
              onPress={() => {
                // this.state.logInCorrect
                //   ? this.props.navigation.navigate('HomeTabs')
                //   : null;
                this.validation();
              }}>
              <Text style={StylesLogSign.textstyle4}> Log in </Text>
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
                Dont have an account?
              </Text>
              <TouchableOpacity
                style={{
                  width: RFValue(60),
                  height: RFValue(50),
                  justifyContent: 'center',
                }}
                onPress={() => {
                  this.props.navigation.navigate('SignUp');
                }}>
                <Text style={{fontSize: FONTS.h5, color: COLOR.PrimaryColor}}>
                  {' '}
                  Sign Up{' '}
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
