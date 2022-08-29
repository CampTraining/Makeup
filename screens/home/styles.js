import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { COLOR, FONTS, ICONS,MARGIN } from "../../constants"

export const Styles = StyleSheet.create({

    // Home Style

    container: {
        backgroundColor: COLOR.White,
        flex: 1
    },
    header: {
        width: "100%",
        height: RFValue(60),
        // backgroundColor: COLOR.PrimaryColor,
        flexDirection: 'row',
        //justifyContent: "space-between",
        alignItems:'center',
        justifyContent:'center'
       
    },
    HeaderIcon: {
        width: RFValue(50),
        height: '100%',
        //  backgroundColor: '#f0f',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_header: {
        fontSize: FONTS.h3,
        fontWeight: 'bold',
        color: COLOR.PrimaryColor,
        alignSelf: 'center',
        //  fontFamily:"serif"
         fontFamily: "cursive",
        
    },
    storyContainer: {
        width: RFValue(70),
        height: RFValue(90),
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: RFValue(15),

    },
    storyImageContainer: {
        width: RFValue(75),
        height: RFValue(75),
        borderRadius: RFValue(75 / 2),
        borderColor: "#f0f",
        borderWidth: 1.5,
        alignItems: "center",
        justifyContent: 'center'
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
        paddingVertical: RFValue(5),

    },
    storyName: {
        fontSize: FONTS.h6,
        width: RFValue(80),
        height: RFValue(50),
        marginHorizontal: RFValue(10),
        textAlign: 'center',
        //     backgroundColor:'#00f',
        //    borderColor:'#f0f',
        //    borderWidth:2
    },
    postContainer: {
        width: "100%",
        //height: RFValue(380),
        //backgroundColor: '#f00',
        flexDirection: 'column',
        //paddingHorizontal: RFValue(22),
        marginBottom: RFValue(15),

    },
    postHeader: {
        //width: "100%",
        height: RFValue(55),
        // backgroundColor: "#ccc",
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingLeft: RFValue(18),

    },
    artistImageContainer: {
        width: RFValue(45),
        height: RFValue(45),
        borderRadius: RFValue(45 / 2),
        borderColor: "#f0f",
        borderWidth: RFValue(1.5),
        alignItems: "center",
        justifyContent: 'center',
        marginRight: RFValue(10)
        //backgroundColor:'#f00'
    },
    artistImage: {
        width: RFValue(40),
        height: RFValue(40),
        borderRadius: RFValue(20),
    },
    img_name_follow: {
        //width: RFValue(210),
        //backgroundColor: "#ddd",
        alignItems: "center",
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    followBtn: {
        justifyContent: 'center',
        width: RFValue(70),
        alignSelf: "stretch",
        //backgroundColor: "#f00"
    },
    styleImagePost: {
        width: "90%",
        height: RFValue(230),
        // backgroundColor: '#00f',
        // marginBottom:10,
        alignSelf: 'center',
        marginVertical: RFValue(8)

    },
    Like_comment_view: {
        width: RFValue(90),
        height: RFValue(35),
        // backgroundColor: "#f0f",
        flexDirection: 'row',
        alignItems: "center",
        marginLeft: RFValue(20)
    },
    anyIconContainer: {
        height: "100%",
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        //backgroundColor:'#f00'
    },
    postDescription: {
        //backgroundColor: '#00f',
        minHeight: RFValue(18),
        width: '83%',
        alignSelf: 'center',

    },

    // Highlight Style

    hightlight_show_container: {
        flex: 1,
        backgroundColor: '#ddd'
    },
    borderDelayContainer: {
        borderWidth:RFValue(2) ,
        borderColor: COLOR.gray,
        borderRadius:RFValue(7) ,
        marginTop: RFValue(5),
        width:"100%",
        flexDirection:'row'
    },
    StatusTab:{
        flex:1,
        height:RFValue(3),
        backgroundColor:'#f00',
        marginHorizontal:RFValue(3)
    },
    heartIconStory: {
        width: RFValue(60),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    textInputStory: {
        flex: 1,
        borderRadius: RFValue(24),
        alignSelf: 'center',
        borderColor: COLOR.gray,
        borderWidth: RFValue(1),
        paddingLeft: RFValue(8),

    },
    bottomHeaderStory: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: RFValue(8),
        backgroundColor: "#0e0e0e",
        height: RFValue(60)
    },

    anyHeader: {
        width: "70%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: RFValue(28),
        
    },
    highlight_view_style: {
        //width: '100%',
        flexDirection: 'row',
        marginBottom: RFValue(MARGIN.xsMargin),
        marginLeft: RFValue(MARGIN.xsMargin),
        //justifyContent: 'flex-start',,
      //   backgroundColor:"#f00"
      }


})



