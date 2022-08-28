import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import {BackArrowHeader} from '../../components';

import {StylesForgetPass} from './styles';

export default class NewPass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={StylesForgetPass.container}>
        {/* <BackArrowHeader navigation={this.props.navigation.navigate('')} /> */}
        <Text style={StylesForgetPass.forgotPassText}>New Password</Text>

        <View style={[StylesForgetPass.forgotPassContainer]}>
          <Text style={StylesForgetPass.forgotPassCaption}>
            Please enter New password and confirm it to update your password.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
