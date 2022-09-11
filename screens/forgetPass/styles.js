import React, {useEffect, useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLOR, FONTS, ICONS} from '../../constants';
export const StylesForgetPass = StyleSheet.create({
  //ForgetPass style

  container: {
    flex: 1,
    //alignItems: "center",
    // justifyContent: "center",
    backgroundColor: COLOR.White,
  },

  arrowContainer: {
    // backgroundColor: "#ddac",
    // width: "100%",
    height: RFValue(73),
    justifyContent: 'center',
    padding: RFValue(20),
  },
  forgotPassContainer: {
    // backgroundColor: "#daa",
    width: '100%',
    height: RFValue(190),
    // justifyContent: "center",
    alignItems: 'center',
    padding: RFValue(15),
    alignSelf: 'center',
  },
  forgotPassText: {
    fontSize: FONTS.h1,
    color: COLOR.black,
    // fontWeight: "400",
    marginTop: RFValue(40),
    fontFamily: 'serif',
    textAlign: 'center',
  },
  forgotPassCaption: {
    fontSize: FONTS.h5,
    color: COLOR.black,
    alignSelf: 'center',
    fontFamily: 'serif',
    paddingHorizontal: RFValue(35),
    marginTop: RFValue(15),
  },

  emailInput: {
    width: '88%',
    height: RFValue(50),
    //backgroundColor: COLOR.dark_gray,
    borderRadius: RFValue(20),
    fontSize: FONTS.h5,
    color: COLOR.White,
    padding: RFValue(15),
    // marginTop: RFValue(100)
    borderBottomWidth: RFValue(2),
    borderBottomColor: COLOR.PrimaryColor,
  },

  resetView: {
    width: '88%',
    height: RFValue(50),
    backgroundColor: COLOR.PrimaryColor,
    borderRadius: RFValue(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(50),
  },
  resetText: {
    fontSize: FONTS.h4,
    fontWeight: '900',
    color: COLOR.White,
    fontFamily: 'serif',
  },

  modelBackContainer: {
    // opacity:0.7,
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'flex-end',
  },

  modelBackContainer2: {
    // backgroundColor: "#000",
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  modelBackContainer3: {
    height: '100%',
    // width: width,
    flex: 1,
    // alignContent: 'center',
    justifyContent: 'space-around',
    // backgroundColor: "#000"
  },
  modelContainer: {
    // height:height,
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: '85%',
    backgroundColor: COLOR.White,
    borderRadius: RFValue(15),
    elevation: 5,
    paddingVertical: RFValue(15),
    marginBottom: RFValue(20),
    height: '50%',
  },
  modelIconView: {
    height: RFValue(100),
    width: '100%',
    // backgroundColor: '#525',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFValue(10),
  },
  modelTextViwe: {
    height: RFValue(70),
    width: '95%',
    // backgroundColor: '#f00',
    borderRadius: RFValue(20),
    alignSelf: 'center',
    padding: RFValue(10),
    justifyContent: 'space-around',
    alignItems: 'center',
    // flexDirection: 'row',
  },
  modelBoldText: {
    fontSize: FONTS.h4,
    fontWeight: 'bold',
    color: COLOR.black,
  },

  modelCaptionView: {
    height: RFValue(60),
    width: '95%',
    // backgroundColor: '#f00',
    borderRadius: RFValue(20),
    alignSelf: 'center',
    padding: RFValue(10),
    justifyContent: 'space-around',
    alignItems: 'center',
    // marginBottom:30
    // flexDirection: 'row',
  },

  modelCaptionText: {
    color: COLOR.dark_gray,
    fontSize: FONTS.h6,
  },
  modelButtonView: {
    height: RFValue(80),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: "#000",
    alignItems: 'center',
    // marginBottom:50
  },
  modelButton: {
    height: RFValue(40),
    width: '60%',
    backgroundColor: COLOR.PrimaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(25),
  },

  modelButtonText: {
    color: COLOR.White,
    fontWeight: 'bold',
    fontSize: FONTS.h4,
  },

  // // //PhooneVerification Style

  // container: {
  //     flex: 1,
  //     alignItems: "center",
  //     // justifyContent: "center",
  //     // backgroundColor: "#44a"
  // },

  VerficationContainer: {
    // backgroundColor: "#daa",

    height: RFValue(190),
    // justifyContent: "center",
    alignItems: 'center',
    padding: RFValue(15),
    alignSelf: 'center',
  },
  VerficationText: {
    fontSize: RFValue(40),
    fontSize: FONTS.h2,
    color: COLOR.black,
    fontWeight: '900',
    marginBottom: RFValue(5),
    width: RFValue(220),
    lineHeight: 45,
    textAlign: 'center',
    fontFamily: 'serif',
  },
  VerficationCaption: {
    fontSize: FONTS.h4,
    // fontSize: FONTS.h5,
    color: COLOR.black,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'serif',
    marginTop: RFValue(40),
    paddingHorizontal: RFValue(50),
    //backgroundColor:'#F0F'
  },
  circleInputContainer: {
    width: '100%',
    height: RFValue(100),
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: "#a4a",
    marginTop: RFValue(40),
    flexDirection: 'row',
    padding: RFValue(30),
  },
  circleInputView: {
    width: RFValue(60),
    height: RFValue(60),
    // backgroundColor: COLOR.dark_gray,
    borderRadius: RFValue(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderColor: COLOR.PrimaryColor,
    borderWidth: 1.5,
    color: COLOR.dark_gray,
  },

  resendContainer: {
    width: '100%',
    height: RFValue(100),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#adaa4a",
    marginTop: RFValue(30),
  },

  resendText: {
    fontSize: FONTS.h5,
    color: COLOR.black,
  },

  //VerifyPass style

  // container: {
  //     flex: 1,
  //     alignItems: "center",
  //     // justifyContent: "center",
  //     // backgroundColor: "#44a"
  // },
  // arrowContainer: {
  //     // backgroundColor: "#ddac",
  //     width: "100%",
  //     height: RFValue(73),
  //     justifyContent: "center",
  //     padding: RFValue(20),
  // },
  // VerficationContainer: {
  //     // backgroundColor: "#daa",
  //     width: "100%",
  //     height: RFValue(150),
  //     // justifyContent: "center",
  //     alignItems: "center",
  //     padding: RFValue(15),
  //     alignSelf: "center",
  // },

  // VerficationText: {
  //     fontSize: FONTS.h1,
  //     color: COLOR.black,
  //     fontWeight: "900",
  //     marginBottom: RFValue(5)
  // },
  // VerficationCaption: {
  //     fontSize: FONTS.h5,
  //     color: COLOR.black,
  //     alignSelf: "center",
  //     justifyContent: "center",
  //     alignItems: "center",
  // },

  inputContainer: {
    width: RFValue(230),
    height: RFValue(50),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    //  backgroundColor: "#a4a",
    marginTop: RFValue(120),
    alignSelf: 'center',
    borderBottomColor: COLOR.dark_gray,
    borderBottomWidth: RFValue(1.5),
    flexDirection: 'row',
  },
  // input: {
  //     width: "88%",
  //     height: "50%",
  //      backgroundColor: COLOR.dark_gray,
  //     borderRadius: RFValue(22),
  //     flexDirection: "row",
  //     alignItems: "center",
  //     justifyContent: "space-around",
  //     // padding: RFValue(20)

  // },
  countryCodeText: {
    fontSize: FONTS.h5,
    fontWeight: '900',
    // paddingTop: -5,
    //marginLeft: 10,
    marginBottom: RFValue(3),
    color: COLOR.dark_gray,
  },
  PhoneInput: {
    flex: 1,
    color: COLOR.dark_gray,
    // backgroundColor: COLOR.red,
    fontSize: FONTS.h5,
    paddingBottom: RFValue(-14),
    paddingRight: RFValue(8),
  },
  logwithContainer: {
    width: '100%',
    height: RFValue(100),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#adaa4a",
    // marginTop: 40,
    textAlign: 'center',
    flexDirection: 'row',
  },

  logWithText: {
    fontSize: FONTS.h5,
    color: COLOR.black,
  },
  nextViwe: {
    width: '100%',
    height: RFValue(50),
    backgroundColor: COLOR.PrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.PrimaryColor,
  },
  nextText: {
    fontSize: FONTS.h5,
    fontWeight: '900',
  },

  // NewPass screen



  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    // backgroundColor:"#f0f"
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },





















});
