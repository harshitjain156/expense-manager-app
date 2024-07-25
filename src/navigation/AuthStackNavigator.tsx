import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { AuthStackParamList } from './type'
import WelcomeScreen from '../screens/WelcomeScreen'
import { SignInScreen, SignUpScreen } from '../screens'


const Stack=createNativeStackNavigator<AuthStackParamList>()
const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name='Welcome'
        component={WelcomeScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name='SignIn'
        component={SignInScreen} 
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name='SignUp'
        component={SignUpScreen} 
        options={{headerShown:false}}
        />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator