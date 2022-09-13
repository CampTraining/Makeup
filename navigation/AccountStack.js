import React from "react";
import { Text,View } from "react-native"
import { Account,SavedPage } from "../screens/account";
import EditPage from "../screens/account";
import NewPass from '../screens/forgetPass/NewPass'
import { SplashScreen } from "../screens/loginSignup";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
const Stack=createNativeStackNavigator()

export const AccountStack=()=>(
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='Account' component={Account} />
        <Stack.Screen name='EditPage' component={EditPage} />
        <Stack.Screen name='ForgetPass' component={NewPass} />
        <Stack.Screen name="SavedPage" component={SavedPage} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
)