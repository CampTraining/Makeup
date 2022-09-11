import {RFValue} from 'react-native-responsive-fontsize';
import {COLOR, ICONS, FONTS, images} from '../../constants';
import {StyleSheet, Dimensions} from 'react-native';

export const StylesLogSign = StyleSheet.create({
  //////   SCREEN STYLEY   ///////

  view_text: {
    //    marginTop:RFValue  (100)
  },
  textStyle1: {
    fontSize: FONTS.h2,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'serif',
    color: COLOR.White,
    opacity: RFValue(0.8),
    marginHorizontal: RFValue(30),
    marginTop: RFValue('300'),
  },

  textStyle2: {
    fontSize: FONTS.h3,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'serif',
    color: COLOR.White,
    alignSelf: 'center',
  },

  textStyle3: {
    fontSize: FONTS.h3,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: COLOR.black,
    alignSelf: 'center',
  },

  // Spalsh Screen

  textBtnContainer: {
    flex: 0.6,
    // backgroundColor:'#f0f',
    paddingHorizontal: RFValue(15),
  },
  SplashSrceen_text: {
    fontSize: FONTS.h3,
    fontWeight: 'bold',
    width: '70%',
    fontFamily: 'serif',
    color: COLOR.White,
    marginBottom: RFValue(25),
  },
  makeUp_Photo_Btn: {
    height: RFValue(55),
    backgroundColor: COLOR.PrimaryColor,
    marginBottom: RFValue(25),
    borderRadius: RFValue(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(30),
  },
  makeUp_photo_text: {
    fontSize: FONTS.h4,
    color: COLOR.dark_gray,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },

  // LogInOrSignUpScreen

  hello_text: {
    fontSize: FONTS.h2,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  logSignGest_Btn: {
    backgroundColor: COLOR.PrimaryColor,
    height: RFValue(50),
    borderRadius: RFValue(17),
  },
  logSignGest_text: {
    fontSize: FONTS.h3,
    fontWeight: 'bold',
    // fontFamily: "serif",
    color: COLOR.White,
    alignSelf: 'center',
    marginTop: RFValue(5),
  },
  social_btn: {
    width: RFValue(50),
    height: RFValue(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Log In
  email_passView: {
    width: RFValue(320),
    height: RFValue(50),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: COLOR.White,
    borderBottomWidth: RFValue(1.5),
    borderRadius: RFValue(25),
    borderColor: COLOR.PrimaryColor,
    paddingHorizontal: RFValue(15),
  },
  email_passTextInput: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    padding: RFValue(10),
    fontSize: FONTS.h5,
  },

  viewStyle1: {
    backgroundColor: COLOR.PrimaryColor,
    height: RFValue(50),
    width: RFValue(320),
    borderRadius: RFValue(35),
    marginTop: RFValue(50),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
  },
  viewStyle2: {
    backgroundColor: COLOR.White,
    height: RFValue(50),
    width: RFValue(320),
    borderRadius: RFValue(35),
    marginTop: RFValue(20),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
  },

  //////////STYLE SIGNUP//////////
  view_img: {
    //justifyContent:"center",
    //width: " 100%",
    //height: RFValue (160),
    //marginTop: RFValue (0)
  },

  textStyle1: {
    fontSize: FONTS.h1,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'sans-serif',
    color: COLOR.black,
    marginTop: RFValue(25),
    alignSelf: 'center',
  },

  textStyle2: {
    fontSize: RFValue(18),
    fontStyle: 'normal',
    color: COLOR.black,
    alignSelf: 'center',
    marginHorizontal: RFValue(25),
    marginTop: RFValue(25),
  },

  textStyle2_2: {
    fontSize: FONTS.h4,
    fontStyle: 'normal',
    color: COLOR.black,
    alignSelf: 'center',
    marginHorizontal: RFValue(25),
    marginTop: RFValue(25),
  },

  viewStyle1: {
    backgroundColor: COLOR.PrimaryColor,
    height: RFValue(45),
    width: RFValue(170),
    borderRadius: RFValue(10),
    marginTop: RFValue(18),
  },

  viewStyle2: {
    backgroundColor: COLOR.White,
    height: RFValue(45),
    width: RFValue(170),
    borderRadius: RFValue(10),
    marginTop: RFValue(50),
    borderWidth: RFValue(2),
    borderColor: COLOR.PrimaryColor,
  },

  textStyle4: {
    fontSize: FONTS.h3,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: COLOR.PrimaryColor,
    alignSelf: 'center',
    marginTop: RFValue(5),
  },

  textStyle5: {
    fontSize: FONTS.h5,
    fontStyle: 'normal',
    color: COLOR.black,
    alignSelf: 'center',
    marginHorizontal: RFValue(20),
    marginTop: RFValue(40),
  },

  /////////////STYLE SIGNIN///////////

  view_logo: {
    marginTop: RFValue(40),
    fontFamily: 'bold',
  },

  textstyle1: {
    alignSelf: 'center',
    color: COLOR.PrimaryColor,
    fontSize: FONTS.h1,
    fontFamily: 'serif',
  },

  textstyle2: {
    alignSelf: 'center',
    color: COLOR.PrimaryColor,
    fontSize: FONTS.h2,
    fontFamily: 'cursive',
  },

  textstyle3: {
    color: COLOR.blue,
    fontSize: FONTS.h5,
    fontFamily: 'Gill Sans',
    marginLeft: RFValue(240),
    marginTop: RFValue(20),
  },

  view_sign: {
    backgroundColor: COLOR.PrimaryColor,
    width: RFValue(320),
    height: RFValue(55),
    borderRadius: RFValue(25),
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: RFValue(30),
    justifyContent: 'center',
  },

  textstyle4: {
    alignSelf: 'center',
    color: COLOR.White,
    fontSize: FONTS.h4,
    fontFamily: 'bold',
  },

  textstyle5: {
    color: COLOR.gray,
    fontSize: FONTS.h5,
  },

  textstyle6: {
    color: COLOR.blue,
    fontSize: FONTS.h5,
  },

  textstyle7: {
    color: COLOR.black,
    fontSize: FONTS.h6,
    fontFamily: 'sans-serif',
  },

  ////////////  Style TYPEACCOUNT ////////////

  // view_logo: {
  //     marginTop:  RFValue (45),
  //     //fontFamily: "bold",

  //   },

  //   textStyle1: {
  //     alignSelf: "center",
  //     color: COLOR.PrimaryColor,
  //     fontSize: FONTS.h1,
  //     fontFamily: "serif",

  //   },

  //   textStyle2: {
  //     alignSelf: "center",
  //     color: COLOR.PrimaryColor,
  //     fontSize: FONTS.h2,
  //     fontFamily: "cursive",

  //   },

  //   textStyle3: {

  //     color: COLOR.black,
  //     fontSize: FONTS.h4,
  //     fontFamily: "Gill Sans",
  //     marginLeft: RFValue (50),
  //     marginTop: RFValue( 20),
  //     fontFamily: "bold",
  //     fontWeight: "200",

  //   },

  //   view_sign: {

  //     backgroundColor: COLOR.PrimaryColor,
  //     width: RFValue (315),
  //     height:RFValue (55),
  //     borderRadius: RFValue (25),
  //     alignItems: "center",
  //     alignSelf: "center",
  //     marginTop: RFValue (50),
  //     justifyContent: "center"
  //   },

  //   textStyle4: {
  //     alignSelf: "center",
  //     color: COLOR.White,
  //     fontSize: FONTS.h4,
  //     fontFamily: "bold",

  //   },

  //   textStyle5: {

  //     color: COLOR.gray,
  //     fontSize: FONTS.h5,

  //   },

  //   textStyle6: {

  //     color: COLOR.blue,
  //     fontSize: FONTS.h4,

  //   },

  //   textStyle7: {

  //     color:  COLOR.black,
  //     fontSize: FONTS.h4,
  //     fontFamily: "sans-serif",

  //   },
});
