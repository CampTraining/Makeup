import React from "react";
import { Text,View,TouchableOpacity } from "react-native";

import Feather from "react-native-vector-icons/Feather"
// import { Styles } from "./styles";
import { Styles } from "../screens/home";
import { COLOR,images,FONTS,ICONS } from "../constants";
export function Header(props){
    return(
        <>
         {/* Header */}
                <View style={Styles.header}>
                    {/* <TouchableOpacity style={Styles.HeaderIcon}
                    >
                        < Feather name="align-justify" size={ICONS.mdIcon} color={"#fff"} />
                    </TouchableOpacity> */}
                    <Text style={[Styles.text_header]}>Make UP </Text>
                    {/* <TouchableOpacity style={Styles.HeaderIcon}>
                        <Feather name="bell" size={ICONS.mdIcon} color={"#fff"} />
                    </TouchableOpacity> */}

                </View>
        </>
    )
}