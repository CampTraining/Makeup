import React from "react";
import { Text,View } from "react-native";
import { Home } from "../screens/home";
import { Login } from "../screens/loginSignup";
import { SearchPage } from "../screens/search";
import { ProfilePage } from "../screens/search/profile";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
const Stack=createNativeStackNavigator()
export const HomeStack=()=>(
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
    </Stack.Navigator>
)