import React from "react";
import {
    View,
    TouchableOpacity,
}
    from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLOR } from "../constants";
import { StylesLogSign } from "../screens/loginSignup";
export function SocialMediaIcon(props) {
    return (
        <>
            <View style={{
                alignSelf: "center",
                width: RFValue(170),
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: RFValue(25),

            }}>
                <TouchableOpacity style={StylesLogSign.social_btn}>
                    <MaterialCommunityIcons name="google" size={32} color={COLOR.dark_red} />
                </TouchableOpacity>
                <TouchableOpacity style={StylesLogSign.social_btn}>
                    <MaterialCommunityIcons name="whatsapp" size={33} color={COLOR.green} />
                </TouchableOpacity>
                <TouchableOpacity style={StylesLogSign.social_btn}>
                    <MaterialCommunityIcons name="facebook" size={35} color={COLOR.blue} />
                </TouchableOpacity>
            </View>
        </>
    )
}