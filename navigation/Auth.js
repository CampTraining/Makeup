import React from 'react';
import {Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLOR, FONTS, ICONS} from '../constants';
import {
  ForgetPass,
  NewPass,
  PhoneVerification,
  VerifyPass,
} from '../screens/forgetPass';
import {SplashScreen, Login, LogOrSign, SignUp} from '../screens/loginSignup';
import {HomeTabs} from './HomeTabs';
const Stack = createNativeStackNavigator();
export function Auth(props) {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LogOrSign"
          component={LogOrSign}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgetPass"
          component={ForgetPass}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PhoneVerification"
          component={PhoneVerification}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="VerifyPass"
          component={VerifyPass}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name="NewPass"
          component={NewPass}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
}

// <Stack.Screen name="SplashScreenStack" component={SplashScreenStack} />
// <Stack.Screen name="LoginStack" component={LoginStack} />
// <Stack.Screen name="LogOrSignStack" component={LogOrSignStack} />
// <Stack.Screen name="SignUpStack" component={SignUpStack} />
