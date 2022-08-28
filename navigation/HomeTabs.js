import React from "react";
import { Text, View } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../screens/home";
import { Search } from "../screens/search";
import { Account, EditPage,SavedPage } from "../screens/account";
import Feather from "react-native-vector-icons/Feather"
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { COLOR, FONTS, ICONS } from "../constants";
import { SplashScreen } from "../screens/loginSignup";
import { Login } from "../screens/loginSignup";
import { HomeStack } from "./HomeStack";
import { SearchPage } from "../screens/search";
const Tabs = createBottomTabNavigator()
const Stack=createNativeStackNavigator()

const AccountStack=()=>(
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='Account' component={Account} />
        <Stack.Screen name='EditPage' component={EditPage} />
        <Stack.Screen name="SavedPage" component={SavedPage} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
)
// export const HomeStack=()=>(
//     <Stack.Navigator screenOptions={{
//         headerShown:false
//     }}>
//         <Stack.Screen name='Home' component={Home} />
//         <Stack.Screen name='Login' component={Login} />
//         {/* <Stack.Screen name="ProfilePage" component={ProfilePage} /> */}

//     </Stack.Navigator>
// )
const SearchStack=()=>(
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='SearchPage' component={SearchPage} />
    </Stack.Navigator>
)

export function HomeTabs(props) {
    return (
        <>
            <Tabs.Navigator screenOptions={({ route }) => {
                const iconName = {
                    HomeStack: "home",
                    SearchStack: "search",
                    AccountStack: "user"
                };
                const label = {
                    HomeStack: "Home",
                    SearchStack: "Search",
                    AccountStack: "Account"
                }
                return {
                    tabBarIcon: ({ focused }) => <Feather name={iconName[route.name]}
                        size={ICONS.mdIcon}
                        color={focused ?  COLOR.PrimaryColor : null} />,
                    tabBarLabel: ({ focused }) => <Text style={{ fontSize: FONTS.h6, color: focused ? COLOR.PrimaryColor : null }}>
                        {label[route.name]}</Text>
                }

            }} >
                <Tabs.Screen name="HomeStack" component={HomeStack} options={{
                    headerShown:false
                }} />
                <Tabs.Screen name="SearchStack" component={SearchStack} options={{
                    headerShown:false
                }}/>
                <Tabs.Screen name="AccountStack" component={AccountStack} options={{
                    headerShown:false
                }} />
            </Tabs.Navigator>
        </>
    )
}