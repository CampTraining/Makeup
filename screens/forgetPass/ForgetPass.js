/* IMPORT */
import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {RFValue} from 'react-native-responsive-fontsize';
import {StylesForgetPass} from './styles';
import {StylesLogSign} from '../loginSignup';
import {COLOR, FONTS, ICONS} from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {BackArrowHeader} from '../../components';
/* ******************************************************************************************** */

/* DESINE OF COMPONANTS */

export default class ForgetPass extends React.Component {
  constructor() {
    super();

    this.state = {
      modalVisible1: false,
      email_err: '',
      user_email: '',
    };
  }

  validation() {
    let email = this.state.user_email;

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/; // asdsadsad@sadjkjshd.skldjlskjd
    if (reg.test(email.trim()) == false || email.trim().length == 0) {
      this.setState({email_err: 'Please Enter correct Emial!'});
    } else {
      this.setState({email_err: ''});
      this.setState({modalVisible1: true});
    }
  }

  render() {
    return (
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{backgroundColor: COLOR.White}}>
          <View style={[StylesForgetPass.container]}>
            <BackArrowHeader navigation={this.props.navigation} />

            <Text style={StylesForgetPass.forgotPassText}>Forgot Password</Text>

            <View style={[StylesForgetPass.forgotPassContainer]}>
              <Text style={StylesForgetPass.forgotPassCaption}>
                Please enter the email associated with your acount and we'll
                send an email with instructions to reset your password
              </Text>
            </View>

            <View
              style={{
                //backgroundColor: "#dbb",

                height: RFValue(200),
                // marginTop: RFValue(20),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={StylesLogSign.email_passView}>
                <Icon
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
                  placeholder="Email"
                  style={StylesLogSign.email_passTextInput}
                  keyboardType="email-address"
                  placeholderTextColor={COLOR.dark_gray}
                />
              </View>
              <Text
                style={{
                  fontSize: FONTS.h5,
                  color: COLOR.dark_red,
                  marginTop: 5,
                }}>
                {this.state.email_err}
              </Text>
              {/* </View> */}

              <TouchableOpacity
                onPress={() => {
                  this.validation();
                }}
                style={StylesForgetPass.resetView}>
                <View>
                  <Text style={StylesForgetPass.resetText}>Reset Password</Text>
                </View>
              </TouchableOpacity>
            </View>

            <Modal
              visible={this.state.modalVisible1}
              onRequestClose={() => {
                this.setState({modalVisible1: false});
              }}
              animationType="slide"
              transparent={true}>
              <View style={StylesForgetPass.modelBackContainer}>
                <TouchableWithoutFeedback
                  style={{flex: 1}}
                  onPress={() => {
                    this.setState({modalVisible1: false});
                  }}>
                  <View style={StylesForgetPass.modelBackContainer2} />
                </TouchableWithoutFeedback>

                <View style={StylesForgetPass.modelBackContainer3}>
                  <View style={StylesForgetPass.modelContainer}>
                    <View style={StylesForgetPass.modelIconView}>
                      <MaterialCommunityIcons
                        name="lock-reset"
                        size={RFValue(80)}
                        color={COLOR.gray}></MaterialCommunityIcons>
                    </View>

                    <View style={StylesForgetPass.modelTextViwe}>
                      <Text style={StylesForgetPass.modelBoldText}>
                        Your Password has{' '}
                      </Text>
                      <Text style={StylesForgetPass.modelBoldText}>
                        {' '}
                        been reset
                      </Text>
                    </View>

                    <View style={StylesForgetPass.modelCaptionView}>
                      <Text style={StylesForgetPass.modelCaptionText}>
                        You'll shortly receive an email with a{' '}
                      </Text>
                      <Text style={StylesForgetPass.modelCaptionText}>
                        {' '}
                        code to setup a new password
                      </Text>
                    </View>

                    <View style={StylesForgetPass.modelButtonView}>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({modalVisible1: false, user_email: ''});
                          this.props.navigation.navigate('PhoneVerification');
                        }}
                        style={StylesForgetPass.modelButton}>
                        <Text style={StylesForgetPass.modelButtonText}>
                          Done
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <TouchableWithoutFeedback style={{flex: 1}}>
                  <View
                    style={{
                      width: '100%',
                    }}
                  />
                </TouchableWithoutFeedback>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </>
    );
  }
}

/* ******************************************************************************************** */
/* STYLE SHEET  ( color - size)*/

// const StylesForgetPass = StylesForgetPassheet.create({
//     // container: {
//     //     flex: 1,
//     //     alignItems: "center",
//     //     // justifyContent: "center",
//     //     backgroundColor: COLOR.White
//     // },
//     // arrowContainer: {
//     //     // backgroundColor: "#ddac",
//     //     width: "100%",
//     //     height: 73,
//     //     justifyContent: "center",
//     //     padding: 20,
//     // },
//     // forgotPassContainer: {
//     //     // backgroundColor: "#daa",
//     //     width: "100%",
//     //     height: 150,
//     //     // justifyContent: "center",
//     //     alignItems: "center",
//     //     padding: 15,
//     //     alignSelf: "center",

//     // },
//     // forgotPassText: {
//     //     fontSize: FONTS.h1,
//     //     color: COLOR.black,
//     //     fontWeight: "900",
//     //     marginBottom: 5

//     // },
//     // forgotPassCaption: {
//     //     fontSize: RFValue(15),
//     //     color: COLOR.black,
//     //     alignSelf: "center",
//     //     justifyContent: "center",
//     //     alignItems: "center",

//     // },
//     // inputContainer: {
//     //     width: "100%",
//     //     height: 100,
//     //     justifyContent: "center",
//     //     alignItems: "center",
//     //     // backgroundColor: "#a4a",
//     //     marginTop: 40
//     // },
//     // input: {
//     //     width: "88%",
//     //     height: "50%",
//     //     backgroundColor: COLOR.dark_gray,
//     //     borderRadius: 22,
//     //     fontSize: FONTS.h5,
//     //     color: COLOR.White,

//     // },
//     // resetContainer: {
//     //     width: "100%",
//     //     height: 100,
//     //     // justifyContent: "center",
//     //     alignItems: "center",
//     //     // backgroundColor: "#ad4a",
//     //     marginTop: 20

//     // },
//     // reset: {
//     //     width: "88%",
//     //     height: "50%",
//     //     backgroundColor: COLOR.PrimaryColor,
//     //     borderRadius: 22,
//     //     justifyContent: "center",
//     //     alignItems: "center",

//     // }

// })
