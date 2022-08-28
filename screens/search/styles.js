
import { StyleSheet,Dimensions } from "react-native";
import { RFValue} from "react-native-responsive-fontsize";
import { COLORS    } from "../../constants/fulltheme";

const window = Dimensions.get("window");
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
      borderTopEndRadius: RFValue(20),
      borderTopStartRadius:RFValue(20),
      height: RFValue(400),
      justifyContent: "space-around"
    },
  r_c_style:
  {
    color:COLORS.pink,
    fontWeight: "bold",
    // width:100,
    alignSelf: "center",
    marginRight: RFValue(-10),
  },
  follow_bt:
  {
    width: "100%",
    height: "45%",
    borderRadius:RFValue(15) ,
    backgroundColor: COLORS.pink,
    justifyContent: "center",
    alignItems: "center"
  },
  follow_view:
  {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: "100%",
  }
  ,
  page_container:
  {
      flex:1,
      alignSelf:"center",
      width:"100%",
      backgroundColor:COLORS.white,
      paddingLeft:RFValue(0),
      // paddingTop:RFValue(20),
      
  },
  img_view:{
      flexDirection:"row",
     alignSelf:"center" ,
     marginTop:RFValue(20)
  },
  img:{
  width:RFValue(150),
  height:RFValue(150),
  borderRadius:RFValue(75),
  borderWidth:RFValue(5),
  borderColor:COLORS.pink,
  marginBottom:-20
  },
  data_view:
  {
   marginTop:RFValue(20),
  height:RFValue(100),
  alignSelf:"center",
  justifyContent:"space-between",
  padding:RFValue(10)
  },
  name_style:
  {alignSelf:"center",color:COLORS.black,fontSize:20
  ,fontWeight:"bold"},
  job_text:
  {alignSelf:"center",
  fontWeight:"bold"
  },
  followers:
  {
      alignSelf:"center" ,
      fontWeight:"bold"
  },
  air_text_view:
  {
  flexDirection:"row",
  alignSelf:"center",
  width:RFValue(220),
  height:RFValue(20),
   marginTop:RFValue(-10),
  justifyContent:"space-around",
  alignItems:"center"
      },
  follown:
  {
  alignSelf:"center" ,
  fontWeight:"bold",
  marginTop:RFValue(5)
  },
  f_p_view:{
  flexDirection:"row",
  width:RFValue(250),
  alignSelf:"center",
  alignItems:"center",
  justifyContent:"space-between"
  
  },
  follow_un_bt:
  {
      elevation:5,
      justifyContent:"center",
      alignItems:"center"
      ,alignSelf:"center",
      marginTop:RFValue(10),
      width:RFValue(150),
      borderRadius:RFValue(20),
      height:RFValue(40),
       backgroundColor:COLORS.pink
      },
     profile_data_view:
      {
          width:RFValue(400),
      height:RFValue(80),
      borderRadius:RFValue(20),
      alignSelf:"center",
      // marginLeft:-20,
      marginTop:RFValue(10),
      justifyContent:"space-around",
      paddingHorizontal:RFValue(20),
      paddingVertical:RFValue(5),
      backgroundColor:COLORS.gray3,
      elevation:5
      },
      ic_dt_te_container:
      {
          width:RFValue(260),
          // borderWidth:1,
          flexDirection:"row" ,
      // justifyContent:"space-around",
      },
      left_text:
      {
    width:RFValue(160),
   alignContent:"flex-start"
   ,alignItems:"center",
      },
      page_container_price:
      {
      
          // width:RFValue(0),
          height:RFValue(140),
          justifyContent:"space-around",
          marginTop:RFValue(10),
          // marginLeft:RFValue(10)
          padding:RFValue(5)
      ,    alignSelf:"flex-start"
          },
          datails_contaier:
          {
              flexDirection:"row",
              // borderWidth:1,
              marginLeft:RFValue(10),
              width:RFValue(370),
              alignItems:"center",
              justifyContent:"space-between",
              // alignSelf:"flex-start"
              },
              service_text_container:
              {
                  flexDirection:"row",
                  // borderWidth:1,
                  marginLeft:RFValue(10),
                  width:RFValue(370),
                  alignItems:"center",
                  justifyContent:"space-between",
                  alignSelf:"flex-start"
                  },
                  img_gallery_view:
                  {
                  width:RFValue(120),
                  height:RFValue(120),
                  borderRadius:RFValue(10)
                  },
                  flatList_view:
                  {
                      flexDirection:"row",
                      width:RFValue(400),
                     marginVertical:RFValue(10),
                  //    marginHorizontal:RFValue(5)
                  //    justifyContent:"space-around"
                  
                     },
                     filter_btn:
                     {
                      width: RFValue(300),
                      height: RFValue(50),
                      backgroundColor: COLORS.pink,
                      borderRadius: RFValue(20),
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center"
                    },
                    non:
                    {
                      width: RFValue(40),
                      height: 40,
                      marginTop: 75,
                      marginRight: -160,
                      borderRadius: 10,
                      backgroundColor:COLORS.lightGray1,
                      alignItems: "center",
                      justifyContent: "center"
                    },

                  //// story model
           img_background:
               {
                      flex:1,
                      paddingVertical:10,
                      justifyContent:"space-between"
              },
          line_view:
          {
          width:"100%",
          height:RFValue(5),
          backgroundColor:COLORS.gray
          },
         story_header:
         {
          flexDirection:"row",
          justifyContent:"space-between",
          marginTop:10,
          width:"95%",
          alignSelf:"center"
        },
        story_name:
        {
          color:COLORS.white,width:"65%",
          marginRight:RFValue(10),
          fontWeight:"bold",
          marginLeft:RFValue(10)
        },
        img_name_view:
        {
          flexDirection:"row",
          width:"50%",
          height:RFValue(50)
        ,justifyContent:"space-around",
        alignItems:"center",
      },
      story_img:
      {
        width:50,
        height:50,
        borderRadius:25,
        borderWidth:3,
        borderColor:COLORS.pink
      },
      right_icons:
      {flexDirection:"row",
      width:"30%" ,
    justifyContent:"space-around",
     alignItems:"center"
    },
bottom_container:
{flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"},
    text_input:
    {
      alignSelf:"flex-start",
      // width:"70%",
      height:50,
      width:"80%",
      borderRadius:20,
      borderWidth:1,
      borderColor:COLORS.gray}
    });
  export {styles}