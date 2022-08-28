import {Dimensions,StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('window');
const COLORS={
  primary: '#637aff',
  primaryDark: '#2759ff',
  primaryLite: '#637aff99',
  black: '#000',
  white: 'white',
  accent: '#112233',
  green: '#60c5a8',
  green2: '#039a83',
  light: '#EEEEEE',
  dark: '#333',
  gray: '#CCCCCC',
  gray2: '#BBBDC1',
  gray3: '#CFD0D7',
  lightGray1: '#DDDDDD',
  lightGray2: '#F5F5F8',
  transparent: 'transparent',
  red: '#ff2f68',
  lightRed: '#ff4f7e',
  darkRed: '#d9365e',
  purple: '#8f06e4',
  skyBlue: 'skyblue',
  yellow: '#f8c907',
  pink: '#ff4c98',
  gold: 'gold',
  line: '#282C35',
  gray: '#CCCCCC',
  darkGray: '#999999',
  darkOverlayColor: 'rgba(0, 0, 0, 0.4)',
  darkOverlayColor2: 'rgba(0, 0, 0, 0.8)',
  lightOverlayColor: 'rgba(255, 255, 255, 0.6)',
  primaryAlpha: 'rgba(99, 122, 255, 0.15)',
  redAlpha: 'rgba(255, 84, 84, 0.15)',
  greenAlpha: 'rgba(96, 197, 168, 0.15)',
  purpleAlpha: 'rgba(146, 6, 228, 0.15)',


  // bags background colors
  bag1Bg: '#ea7a72',
  bag2Bg: '#c2c5d1',
  bag3Bg: '#82a7c9',
  bag4Bg: '#d49d8f',
  bag5Bg: '#ccd9c6',
  bag6Bg: '#767676',
  bag7Bg: '#d1c8c3',
  bag8Bg: '#dca47f',
  bag9Bg: '#eb849c',
  bag10Bg: '#979dc1',
  bag11Bg: '#c7d3c0',
}
const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
  // app dimensions
  width,
  height,
};
const FONTS = {
  largeTitle: {
    fontFamily: 'Janna LT Bold',
    fontSize: SIZES.largeTitle,
  },
  h1: {
    fontFamily: 'Janna LT Bold',
    fontSize: SIZES.h1,
  },
  h2: {
    fontFamily: 'Janna LT Bold',
    fontSize:  SIZES.h2,
  },
  h3: {
    fontFamily: 'Janna LT Bold',
    fontSize:  SIZES.h3,
  },
  h4: {
    fontFamily: 'Janna LT Bold',
    fontSize: SIZES.h4,
  },
  h5: {
    fontFamily: 'Janna LT Bold',
    fontSize: SIZES.h5,
  },
  body1: {
    fontFamily: 'Janna LT Bold',
    fontSize: SIZES.body1,
  },
  body2: {
    fontFamily: 'Janna LT Bold',
    fontSize:SIZES.body2,
  },
  body3: {
    fontFamily: 'Janna LT Bold',
    fontSize:  SIZES.body3,
  },
  body4: {
    fontFamily: 'Janna LT Bold',
    fontSize:  SIZES.body4,
  },
  body5: {
    fontFamily: 'Janna LT Bold',
    fontSize: SIZES.body5,
  },
  fontFamily: 'Janna LT Bold',
};


const styles = StyleSheet.create({

  container: {
    width: window.width, flex: 1,
    // justifyContent:"center",
    // alignItems:"center",
    //  backgroundColor:[COLORS.white],
    paddingTop: "1%",
  },
  searchContainer: {
    // borderWidth:5,
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    //  width: window.width,
    width: RFValue(350),
    height: RFValue(50),
    alignSelf: "center",
    borderRadius: RFValue(20),
    marginBottom: "5%",
    // backgroundColor
    elevation: 5,
    // borderRadius: 15,
  },

  searchBar: {
    height: RFValue(50),
    width: RFValue(350),
    alignSelf: "center"
    //  alignItems:"center"
    // ,marginLeft:20
    // ,elevation:0,
    , borderWidth: 2,
    borderColor: COLORS.gray3
    , borderRadius: RFValue(20)
  },

  profile_container:
  {
    width: window.width * 0.9,
    borderRadius: RFValue(15)
    , height: window.height * 0.4
    , marginBottom: "2.5%"
    ,  //  ,padding:"2%",
    // justifyContent:"space-between",
    elevation: 4,
    backgroundColor: COLORS.white,
    marginTop: '2.5%',
    paddingBottom: 1,
    borderRadius: 20,
    alignSelf: "center",
    alignItems: "center"
  },

  profile_img: {
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15

  },
  rating_follow_container:
  {
    width: "100%",
    height: "30%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: "0%",
    paddingHorizontal: "5%",
  },
  name_rating_view:
  {
    paddingTop: 10,
    justifyContent: "space-between",
    width: "50%",
    height: "70%"
  },

  airbnb_view:
  {
    // flexDirection: "row",
    marginTop: "0%",
    width: "80%",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center"
  },
  flat_rating_style:
  {
    margin: 0,
    height: "68%",
    width: 100
    , alignSelf: "center",
    padding: 0
  },
  modal_header:
  {
    flexDirection: "row",
    width: RFValue(400),
    // borderWidth:1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: RFValue(10)
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  rating_container:
  {
    flexDirection: "row",
    marginTop: RFValue(-80),
    marginLeft: RFValue(-40),
    width: "100%",
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
    height: 200,
    flexDirection: "row",
    //  borderWidth:1,
  },

  modal4: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    height: 400,
    justifyContent: "space-around"
  },
r_c_style:
{
  color:COLORS.pink,
  fontWeight: "bold",
  // width:100,
  alignSelf: "center",
  marginRight: RFValue(-10),
}

});


export {
    COLORS,
    SIZES,
    FONTS,
    styles
}