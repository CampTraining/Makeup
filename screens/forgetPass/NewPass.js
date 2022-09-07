import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

import {BackArrowHeader} from '../../components';

import {COLOR, FONTS, ICONS, MARGIN} from '../../constants';

import {StylesLogSign} from '../loginSignup';

import {StylesForgetPass} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

import axios from 'axios';

export default class NewPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirm_password: '',
      passSecureTextEntry: true,
      confirmPassSecureTextEntry: true,
      pass_err: '',
      confirm_pass_err: '',
      loading: false,
    };
  }

  showPass = passShown => {
    this.setState({passSecureTextEntry: !passShown});
  };

  showConfirmPass = confirmPassShown => {
    this.setState({confirmPassSecureTextEntry: !confirmPassShown});
  };

  onChangePassText = value => {
    // password
    if (value.trim().length < 6 && value.trim().length != 0) {
      this.setState({
        pass_err: 'Pass should be more than 6 digits!',
        confirm_pass_err: '',
      });
    } else if (
      value.trim() != this.state.confirm_password.trim() &&
      value.trim().length >= 6 &&
      this.state.confirm_password.trim().length >= 1
    ) {
      this.setState({
        confirm_pass_err: 'two passwords are different!',
        pass_err: '',
      });
    } else {
      this.setState({pass_err: '', password: value, confirm_pass_err: ''});
    }
  };

  onChangeConfirmPassText = value => {
    // confirm password
    // if (value.trim().length < 6 && value.trim().length != 0) {
    //   this.setState({confirm_pass_err: 'Pass should be more than 6 digits!'});
    //   return 1;
    // } else
    if (
      value.trim() != this.state.password.trim() &&
      value.trim().length >= 1 &&
      this.state.password.trim().length >= 6
    ) {
      this.setState({confirm_pass_err: 'two passwords are different!'});
    } else {
      this.setState({confirm_pass_err: '', confirm_password: value});
    }
  };

  validation = () => {
    if (this.state.password.trim().length == 0) {
      this.setState({pass_err: 'This field is required!'});
    }

    if (this.state.confirm_password.trim().length == 0) {
      this.setState({confirm_pass_err: 'This field is required!'});
      return;
    }

    if (
      this.state.pass_err == '' &&
      this.state.confirm_pass_err == '' &&
      this.state.password.trim() == this.state.confirm_password.trim()
    ) {
      this.updatePass();
      this.setState({pass_err: '', confirm_pass_err: ''});
    }
  };

  updatePass = () => {
    this.setState({loading: true});
    const data_to_send = {
      user_email: this.props.route.params.user_email,
      user_type: this.props.route.params.user_type,
      new_password: this.state.password,
    };

    axios
      .post(
        'https://generation3.000webhostapp.com/project/Training/Auth/ForgetPass/new_pass.php',
        data_to_send,
      )
      .then(res => {
        if (res.status == 200) {
          console.log(res.data);

          if (res.data == 'successful') {
            alert('Your password has been updated successfully🎉');
          } else if (res.data == 'error happen') {
            alert('Oops, please enter another password and try again!');
          } else {
            alert('Something went wrong! please try again later');
          }
        }
      })
      .catch(err => {
        console.log(err.message);
        if (err.message == 'Network Error') {
          alert(
            'Oops, there is no internet connection!\nPlease reconnect to the network and try again.',
          );
        } else {
          alert('Something went wrong! please try again later');
        }
      })
      .finally(() => {
        this.setState({loading: false});
      });
  };

  render() {
    return (
      <View style={StylesForgetPass.container}>
        <BackArrowHeader onPress={() => this.props.navigation.goBack()} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <Text style={StylesForgetPass.forgotPassText}>New Password</Text>

          <View style={[StylesForgetPass.forgotPassContainer]}>
            <Text style={StylesForgetPass.forgotPassCaption}>
              Please enter New password and confirm it to update your password.
            </Text>
          </View>

          <View style={[StylesLogSign.email_passView]}>
            <TextInput
              value={this.state.password}
              onChangeText={value => {
                this.setState({password: value});
                this.onChangePassText(value);
              }}
              placeholder="Password"
              style={[StylesLogSign.email_passTextInput, {alignSelf: 'auto'}]}
              keyboardType="name-phone-pad"
              placeholderTextColor={COLOR.gray}
              secureTextEntry={this.state.passSecureTextEntry}
              textAlign="left"
            />
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => this.showPass(this.state.passSecureTextEntry)}>
              <Icon
                name={this.state.passSecureTextEntry ? 'eye-slash' : 'eye'}
                size={ICONS.mdIcon}
                color={
                  this.state.passSecureTextEntry
                    ? COLOR.gray
                    : COLOR.PrimaryColor
                }
                style={{marginRight: RFValue(10)}}
              />
            </TouchableOpacity>
          </View>
          {this.state.pass_err != '' ? (
            <Text
              style={{
                fontSize: FONTS.h6,
                color: COLOR.dark_red,
                marginLeft: RFValue(30),
                marginTop: 5,
              }}>
              {this.state.pass_err}
            </Text>
          ) : null}

          <View
            style={[
              StylesLogSign.email_passView,
              {marginTop: MARGIN.mdMargin},
            ]}>
            <TextInput
              value={this.state.confirm_password}
              onChangeText={value => {
                this.setState({confirm_password: value});
                this.onChangeConfirmPassText(value);
              }}
              placeholder="confirm password"
              style={[StylesLogSign.email_passTextInput, {alignSelf: 'auto'}]}
              keyboardType="name-phone-pad"
              placeholderTextColor={COLOR.gray}
              secureTextEntry={this.state.confirmPassSecureTextEntry}
              textAlign="left"
            />
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() =>
                this.showConfirmPass(this.state.confirmPassSecureTextEntry)
              }>
              <Icon
                name={
                  this.state.confirmPassSecureTextEntry ? 'eye-slash' : 'eye'
                }
                size={ICONS.mdIcon}
                color={
                  this.state.confirmPassSecureTextEntry
                    ? COLOR.gray
                    : COLOR.PrimaryColor
                }
                style={{marginRight: RFValue(10)}}
              />
            </TouchableOpacity>
          </View>
          {this.state.confirm_pass_err != '' ? (
            <Text
              style={{
                fontSize: FONTS.h6,
                color: COLOR.dark_red,
                marginLeft: RFValue(30),
                marginTop: 5,
              }}>
              {this.state.confirm_pass_err}
            </Text>
          ) : null}

          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => {
              this.validation();
            }}
            style={[
              StylesForgetPass.resetView,
              {
                alignSelf: 'center',
                width: RFValue(320) - RFValue(30),
                marginBottom: MARGIN.mdMargin,
              },
            ]}>
            {this.state.loading ? (
              <ActivityIndicator size={'large'} color={COLOR.White} />
            ) : (
              <Text style={StylesForgetPass.resetText}>Update Password</Text>
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // inputContianer: {
  //   height: RFValue(45) >= 40 ? RFValue(45) : 40,
  //   width: '90%',
  //   // backgroundColor: '#f0f',
  //   alignSelf: 'center',
  //   marginBottom: MARGIN.mdMargin,
  // },
});
