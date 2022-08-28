import React, { useEffect, useRef  } from "react";
import {
  StyleSheet, ImageBackground,Text, View,TextInput, Image,
  TouchableOpacity, StatusBar, ScrollView, FlatList
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Icons from "react-native-vector-icons/FontAwesome5";
import { Rating, AirbnbRating } from 'react-native-ratings';
import Modal from 'react-native-modalbox';
import { COLORS,FONTS } from "../../constants/fulltheme";
import {styles}  from"../search/styles"
import  {images} from "../../constants"
import { COLOR,ICONS } from "../../constants";
import AntiDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StylesForgetPass } from "../forgetPass";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
export function ProfilePage(props) {
  const {navigation}=props
  // const [follow,setFollow]=React.useState("Follow")
  // const followFun=() => {
  //   if  (follow=="Follow")
  //     setFollow("UnFollow") 

  //    if (follow == "UnFollow") setFollow("Follow")

  const [selectedColor,setSelectedColor] =React.useState(COLORS.pink)
  const [select, setSelect] = React.useState(false)

  const [defaultRatimg, setDefaultRating] = React.useState(1);
  const [endStar, setEndStar] = React.useState("")
  //  const onStartRating=(rating)=>{setEndStar(rating)}
  const [review, setReview] =React.useState(false)
  const onFinishRating = (rating) => {

    setEndStar(rating);
    // console.log(endStar)
    return rating;
  }
  const [text, setText] =React.useState("follow")
  const [follow, setFollow] =React.useState(true);
  const { isOpen, setIsOpen } = React.useState(false);
  const imgRef=useRef()
  const {imgOpen,setImgOpen}=React.useState(false)
  const {visableStory,setvisableStory}=React.useState(false)
  return (
    <>
      <StatusBar hidden={true} />
      <View style={[styles.page_container]}>
        <ScrollView>

        <View style={[StylesForgetPass.arrowContainer]}>
                <TouchableOpacity
                    onPress={() => {
                       navigation.navigate("Home")
                    }}
                >
                    <FontAwesome5 name="chevron-left" color={COLOR.black}
                        size={ICONS.xlIcon} style={{ marginRight: RFValue(15) }} />
                </TouchableOpacity>
            </View>
          {/* image */}
          <View style={[styles.img_view]}>
            <Image
              style={[styles.img]}
              source={images.profile}
              resizeMode="contain"
            />
          </View>
          {/* data */}
          <View style={[styles.data_view]} >
            <Text numberOfLines={1}
              style={styles.name_style}>Aya Gamal</Text>
            <Text numberOfLines={1}
              style={styles.job_text}
            >Makeup artist and hair designer </Text>
            <Text style={styles.followers}>230 Folowon </Text>
          </View>
          <View style={styles.air_text_view}>

            <AirbnbRating
              reviews={[]}
              isDisabled={true}
              count={5}
              size={15}
              selectedColor={COLORS.pink}
            />
            <Text
              style=
              {styles.follown}>230 Folowon </Text>

          </View>
          <View style={styles.f_p_view}>



            <TouchableOpacity onPress={() => {
             imgRef.current.open()
            }}>
              <Icons name="star" size={20}
                color={COLORS.pink}
                style={{ marginBottom: -15 }} />
            </TouchableOpacity>


            <TouchableOpacity
              onPress={() => {
                let check = !follow
                setFollow(check)
              }}
              style={styles.follow_un_bt}>
              <Text style={{
                fontWeight: "bold", fontSize: RFValue(20),
                color: COLORS.white,
              }}>{follow ? ("Follow") : ("unfollow")}</Text>
            </TouchableOpacity>

            <TouchableOpacity >
              <Icons name="phone" size={20}
                color={COLORS.pink}
                style={{ marginBottom: -15, }} />
            </TouchableOpacity>
          </View>

          <View style={styles.profile_data_view}>
            <View style={styles.ic_dt_te_container}>
              <Image source={images.phone} width={20} height={20} color={COLORS.pink}
                style={{ alignSelf: "flex-start", marginRight: RFValue(10), width: 20, height: 20 }}
              />
              <Text
                //  numberOfLines={1}
                style=

                {[FONTS.body3, { fontWeight: "bold" }]}>01017685904</Text>
            </View>
            <View style={{
              width: RFValue(260),
              // borderWidth:1,
              flexDirection: "row",
              // justifyContent:"space-around",
            }}>
              <Icons name="clock" size={20} color={COLORS.pink}
                style={{ alignSelf: "flex-start", marginRight: RFValue(10) }}
              />
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Daily(from 10 AM - 5 PM)</Text>
            </View>
          </View>

          {/* make up */}
          <View style={{ marginLeft: RFValue(10), marginTop: RFValue(20) }}>
            <Text style={[{ color: COLORS.pink, fontWeight: "bold" }, FONTS.h2]}>
              Make up
            </Text>
          </View>
          <View style={styles.page_container_price}>
            <View style={styles.datails_contaier}>
              <View style={styles.left_text}

              >
                <Text style={[
                  FONTS.body3,
                  {
                    fontWeight: "bold",
                    alignSelf: "flex-start"
                  }]} >
                  weeding party</Text>
              </View>
              <View style={{ marginLeft: RFValue(-50) }}>
                <Text
                  style={
                    [{ color: COLORS.black, fontWeight: "bold" }]}
                >50$</Text>
              </View>
              <View>
                <Icons name="clock" size={20} />
              </View>

            </View>
            <View style={styles.service_text_container}>
              <View style=
                {styles.left_text}>
                <Text style={[FONTS.body3,
                {
                  fontWeight: "bold",
                  alignSelf: "flex-start"
                }]} maxLength={10} >
                  Graduation make up
                </Text>
              </View>
              <View style={{ marginLeft: RFValue(-50) }}>
                <Text style={[{ color: COLORS.black, fontWeight: "bold" }]}>
                  50$
                </Text>
              </View>
              <View>
                <Icons name="clock" size={RFValue(20)} />
              </View>

            </View>
            <View
              numberOfLines={1}
              style={styles.service_text_container}>
              <View style={{
                width: RFValue(160),
                alignItems: "center",
              }}>
                <Text style=
                  {[
                    FONTS.body3,
                    {
                      fontWeight: "bold",
                      alignSelf: "flex-start"
                    }]} >Smoky makeup</Text>
              </View>
              <View style={{
                marginLeft: RFValue(-50)
              }}>
                <Text style=
                  {[{
                    color: COLORS.black, fontWeight: "bold"
                  }]}>
                  50$</Text>
              </View>
              <View>
                <Icons name="clock"
                  size={20} />
              </View>

            </View>
            <View style={styles.service_text_container}>
              <View style=
                {
                  styles.left_text
                }>
                <Text style=
                  {[FONTS.body3,
                  {
                    fontWeight: "bold",
                    alignSelf: "flex-start"
                  }]}
                  numberOfLines={1}
                >Party make up</Text>
              </View>
              <View style={{ marginLeft: RFValue(-50) }}>
                <Text style=
                  {[{
                    color: COLORS.black,
                    fontWeight: "bold"
                  }]}>50$
                </Text>
              </View>
              <View>
                <Icons name="clock" size={20} />
              </View>

            </View>

          </View>

          <View style={{
            marginLeft: RFValue(10),
            marginTop: RFValue(10)
          }}>
            <Text style={[{
              color: COLORS.pink,
              fontWeight: "bold"
            },
            FONTS.h2]}>
              Highlites
            </Text>
          </View>

          <View style={styles.flatList_view}>
            <FlatList
              horizontal={true}
              data={[
                {

                },
                {

                },
                {

                }
                ,
                {

                }
              ]}
              // numColumns={2}
              renderItem={({ item }) =>
                <View style={{
                  elevation: 5,
                  width: RFValue(120),
                  height: RFValue(120),
                  marginHorizontal: 5
                }}>
                  <TouchableOpacity onPress={()=>{imgRef.current.open();
                  // setImgOpen(item[index])
                  }}>
                  <Image
                    source={images.mainLogo}
                    style={styles.img_gallery_view} />

                  </TouchableOpacity>
                  
                </View>
              }
            />
          </View>
        </ScrollView>

{/* highlight page  */}

<Modal 
backButtonClose={true}
position={"center"}
startOpen={imgOpen}
animationType="fade"
ref={imgRef}
// isDisabled={false}
>
  <ImageBackground 
  style={styles.img_background}
  source={images.profile}
  resizeMode="cover"
  >
    <View style={{width:"100%"}}>
    <View style={styles.line_view}></View>
<View style={styles.story_header}>
<View style={styles.img_name_view}>
<Image source={images.profile} style={styles.story_img}/>
  <Text style={[styles.story_name,
    FONTS.h3,]} numberOfLines={1}>
Farida Masoud
  </Text>
  <MaterialIcons name="verified"
   size={RFValue(20)} color={COLORS.white} />
   </View>
   <View style={styles.right_icons}>
   <Entypo name="dots-three-horizontal"
    size={30} color={COLORS.white} />
<TouchableOpacity onPress={()=>{    imgRef.current.close()
}}>
<AntiDesign name="close"
 size={30} color={COLORS.white} />

</TouchableOpacity>
</View>
</View>


    </View>
    <View style={styles.bottom_container}>

<TextInput style={styles.text_input}>

</TextInput>
<TouchableOpacity>
<Icons name="heart" size={RFValue(40)} color={COLORS.gray}/>
</TouchableOpacity>
    </View>

  </ImageBackground>

</Modal>

      </View>


    </>
  );

}
