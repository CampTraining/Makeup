
import React from "react";
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
}
  from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Icons from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SocialMediaIcon } from "../../components";
import { COLOR, ICONS,FONTS,images } from "../../constants";
import { StylesLogSign } from "../loginSignup";
const window = Dimensions.get("window");

export function LogOrSign (props) {
  const { navigation } = props
    return (
      <>
        <ScrollView contentContainerStyle={{paddingBottom:RFValue(40),backgroundColor:COLOR.White}}
        showsVerticalScrollIndicator={false}

        >
          {/* page View */}
          <View style={{ flex:1,}}>
              <Image
                source={images.welcomeImage}
                style={{
                  height: RFValue(310),
                  resizeMode: "cover",

                }} />
            
            <View style={{height:RFValue(80),justifyContent:"space-between",alignItems:'center'}}>
              <Text style={StylesLogSign.hello_text} > Hello!</Text>
              <Text style={[StylesLogSign.hello_text,{fontSize:FONTS.h4}]}>Welcome to the makeup artist </Text>
            </View>
            <View style={{
             height:RFValue(200),
              justifyContent: "space-around",
              marginTop:RFValue(40),
              paddingHorizontal:RFValue(20)

            }}>

              <TouchableOpacity style={StylesLogSign.logSignGest_Btn}
             onPress={() => {navigation.navigate("HomeTabs")}}
              >
                <Text style={StylesLogSign.logSignGest_text}> Gest</Text>
              </TouchableOpacity>

              <TouchableOpacity style={StylesLogSign.logSignGest_Btn}
               onPress={()=>{navigation.navigate("Login")
              }}
              >
                <Text style={StylesLogSign.logSignGest_text}>Log In</Text>
              </TouchableOpacity>

              <TouchableOpacity style={StylesLogSign.logSignGest_Btn}
              onPress={() => {navigation.navigate("SignUp")}}
              >
                <Text style={StylesLogSign.logSignGest_text}>Sign Up</Text>
              </TouchableOpacity>

            </View>
         <SocialMediaIcon/>
          </View>
        </ScrollView>
      </>
    )
  
}



































// import React from "react";
// import { Button, Text, View } from "react-native"

// export function LogOrSign(props) {
//     const { navigation } = props
//     return (
//         <>
//             <View style={{ flex: 1, backgroundColor: '#ccc', alignItems: 'center' }}>
//                 <Text style={{ fontSize: 27, fontWeight: 'bold' }}>Login or SignUp</Text>
                
//                 <Button title="As agest" onPress={() => {
//                     navigation.navigate("HomeTabs")
//                 }} />
//                 <Button title="Login" onPress={() => {
//                     navigation.navigate("Login")
//                 }} />
//                 <Button title="Sign Up" onPress={() => {
//                     navigation.navigate("SignUp")
//                 }} />
//             </View>
//         </>
//     )
// }