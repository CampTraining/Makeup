import React from 'react';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLOR, FONTS, ICONS, MARGIN, PADDING, RADIUS } from '../../constants';

export const StylesAccount = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
  },
  header: {
    width: '100%',
    height: RFValue(60),
    backgroundColor: COLOR.PrimaryColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: RFValue(20),
  },
  HeaderIcon: {
    width: RFValue(50),
    height: '100%',
    //  backgroundColor: '#f0f',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_header: {
    fontSize: FONTS.h4,
    fontWeight: 'bold',
    // color: '#fff',
    alignSelf: 'center',
    // fontFamily:"Gill Sans"
    fontFamily: 'serif',
  },
  storyContainer: {
    width: RFValue(70),
    height: RFValue(90),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: RFValue(15),
  },
  storyImageContainer: {
    width: RFValue(90),
    height: RFValue(90),
    borderRadius: RFValue(90 / 2),
    borderColor: '#fff',
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyImage: {
    width: RFValue(70),
    height: RFValue(70),
    borderRadius: RFValue(35),
  },

  textheader_List: {
    fontSize: FONTS.h3,
    fontWeight: 'bold',
    color: COLOR.dark_gray,
    paddingHorizontal: RFValue(22),
    paddingVertical: RFValue(8),
  },
  storyName: {
    fontSize: 14,
    width: RFValue(90),
    height: RFValue(50),
    marginRight: RFValue(10),
    textAlign: 'center',
  },
  postContainer: {
    width: '100%',
    height: RFValue(190),
    // backgroundColor: '#f00',
    flexDirection: 'column',
    paddingHorizontal: RFValue(22),
    marginBottom: 10,
  },
  postHeader: {
    width: '100%',
    height: RFValue(55),
    // backgroundColor: "#ff0",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  artistImageContainer: {
    width: RFValue(45),
    height: RFValue(45),
    borderRadius: RFValue(45 / 2),
    borderColor: '#f0f',
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  artistImage: {
    width: RFValue(40),
    height: RFValue(40),
    borderRadius: RFValue(20),
  },
  img_name_follow: {
    width: '65%',
    //backgroundColor: "#00f",
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  styleImagePost: {
    width: '100%',
    height: RFValue(160),
    //backgroundColor: '#00f',
    // marginBottom:10
  },
  Like_comment_view: {
    width: '100%',
    height: RFValue(55),
    //backgroundColor: "#0f0",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  //////////////////////////////// (Account)
  accountPage_container: {
    backgroundColor: COLOR.White,
    width: '100%',
    height: '100%',
    alignItems: "center",
    // justifyContent:"center",
  },
  accountHeader: {
    width: "100%",
    height: RFValue(60),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:"#ff0",
    backgroundColor: COLOR.PrimaryColor,
  },
  textOfAccount_header: {
    fontSize: FONTS.h3,
    fontWeight: 'bold',
    color: COLOR.White,
    alignSelf: 'center',
    //  fontFamily:"serif"
    fontFamily: "cursive",

  },
  accountDetails_container: {
    width: "100%",
    padding: RFValue(8),
    height: RFValue(250),
    alignItems: 'center',
    // marginTop:RFValue(30),
    borderBottomLeftRadius: RFValue(35),
    borderBottomRightRadius: RFValue(35),
    // backgroundColor:'#ddd',
    backgroundColor: COLOR.PrimaryColor,
  },
  accountImage_container: {
    // width:'100%',
    width: RFValue(100),
    height: RFValue(100),
    borderRadius: RFValue(50),
    marginTop: RFValue(40),
    marginBottom: RFValue(8),
    backgroundColor: '#ddd'
  },
  accountImage_style: {
    width: RFValue(100),
    height: RFValue(100),
    resizeMode: 'contain',
    borderRadius: RFValue(50),
    borderWidth: RFValue(1.5),
    borderColor: '#ccc',
  },
  accountName_text: {
    color: COLOR.black,
    fontSize: FONTS.h4,
    fontWeight: 'bold',
    alignSelf: 'center',
    // fontFamily:"Gill Sans"
    // fontFamily: 'serif',
  },
  accountEdit_container: {
    // width:'100%',
    width: RFValue(75),
    height: RFValue(30),
    alignItems: 'center',
    borderRadius: RFValue(30),
    marginTop: RFValue(8),
    marginBottom: RFValue(10),
    justifyContent: 'center',
    backgroundColor: COLOR.White,
  },
  accountOptions_container: {
    width: "95%",
    alignItems: 'center',
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(15),
    height: RFValue(60),
    flexDirection: 'row',
    borderRadius: RFValue(20),
    marginVertical: RFValue(6),
    backgroundColor: "#ddd",
    justifyContent: 'space-between',
  },
  accountOptions_icons: {
    color: COLOR.PrimaryColor,
    paddingHorizontal: RFValue(10)
  },
























  // Old Account Style
  view_containr_profile: {
    backgroundColor: COLOR.White,
    width: '100%',
    height: '100%',
  },
  view_profil_imge: {
    width: '100%',
    height: RFValue(100),
    //backgroundColor: "#00f",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(20),
  },
  style_img_profil: {
    width: RFValue(100),
    height: RFValue(100),
    resizeMode: 'contain',
    borderRadius: RFValue(50),
    borderWidth: RFValue(1.5),
    borderColor: '#ccc',
    resizeMode: 'contain',
  },
  view_text_name_profile: {
    width: '100%',
    height: RFValue(25),
    //  backgroundColor: "#f00",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  view_follow_profile: {
    width: '100%',
    height: RFValue(60),
    //backgroundColor: "#ff0",
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    padding: RFValue(5),
    marginVertical: RFValue(7),
  },
  view_contanir_edit: {
    width: '100%',
    height: RFValue(60),
    // backgroundColor: "#f0f",
    // justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: RFValue(10),
    // borderBottomWidth: 1,
    // borderBottomColor: "#f0f",
    // borderRadius: 15,
  },
  view_contanir_text_input: {
    backgroundColor: '#f00',
    width: '100%',
    height: RFValue(150),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_input: {
    width: '85%',
    height: 50,
    alignSelf: 'center',
    //backgroundColor: '#00F',
    fontSize: RFValue(15),
    // borderRadius: RFValue(15),
    marginTop: RFValue(20),
    borderBottomColor: COLOR.dark_gray,
    borderBottomWidth: RFValue(1.5),
    //
  },
  bottom_text_input: {
    width: RFValue(100),
    height: RFValue(50),
    // backgroundColor: COLOR.White,
    borderRadius: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: RFValue(15)
  },





















  followersHeaderView: {
    // backgroundColor: "#33a",
    width: "100%",
    height: RFValue(60),
    // justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"

  },
  followersHeaderText: {
    marginLeft: RFValue(80),
    fontSize: FONTS.h3,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: COLOR.PrimaryColor,
    // fontFamily: "Gill Sans"




  },

  searchboxContainer: {
    width: "100%",
    height: RFValue(60),
    // backgroundColor: "#d0d",
    justifyContent: "center",
    alignItems: "center",

  },
  searchbox: {
    width: "88%",
    height: RFValue(40),
    backgroundColor: COLOR.White,
    borderRadius: RADIUS.xsRadius,
    flexDirection: "row",
    alignItems: "center",
    // padding: PADDING.smPadding,
    borderColor: "#b2b2b244",
    borderWidth: 1



  },
  searchIcon: {
    marginLeft: MARGIN.xsMargin
  },
  searchInput: {
    // backgroundColor: "#f22",
    width: "85%",
    height: "100%",
    marginLeft: RFValue(10),


  },
  viewAccContainer: {
    width: "100%",
    height: RFValue(100),
    // backgroundColor: "#6f6",
    flexDirection: "row",
    // padding: PADDING.mdPadding,
    alignItems: "center",
    justifyContent: "space-around"

  },
  viewInfoContainer: {
    width: RFValue(270),
    height: RFValue(100),
    // backgroundColor: "#342",
    flexDirection: "row",
    alignItems: "center",


  },
  profileImage: {
    width: RFValue(65),
    height: RFValue(65),
    borderRadius: RFValue(32.5)

  },

  ViewNameContainer: {
    // backgroundColor: "#55f",
    width: RFValue(190),
    height: RFValue(60),
    marginLeft: MARGIN.xsMargin,
    justifyContent: "center",
    padding: PADDING.xsPadding

  },

  nameText: {
    fontSize: FONTS.h5,
    color: COLOR.black,


  },

  viewFollow: {
    backgroundColor: COLOR.PrimaryColor,
    alignItems: "center",
    justifyContent: "center",
    width: RFValue(75),
    height: RFValue(40),
    borderRadius: RFValue(5),

  }



});
