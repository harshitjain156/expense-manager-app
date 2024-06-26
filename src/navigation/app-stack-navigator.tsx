import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { AppStackParamList, AuthStackParamList } from './type'
import WelcomeScreen from '../screens/welcome-screen'
import SignInScreen from '../screens/sign-in-screen'
import SignUpScreen from '../screens/sign-up-screen'
import BottomTabNavigator from './bottom-stack-navigator'

const Stack=createNativeStackNavigator<AppStackParamList>()
const AppStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name='Root'
        component={BottomTabNavigator} 
        options={{headerShown:false}}
        />
       
    </Stack.Navigator>
  )
}

export default AppStackNavigator