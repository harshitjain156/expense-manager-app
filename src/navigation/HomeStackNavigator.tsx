import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { HomeStackParamList } from './type'
import EditTaskScreen from '../screens/edit-task-screen'
import Home from '../screens/home'


const Stack=createNativeStackNavigator<HomeStackParamList>()
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name='Home'
        component={Home}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name='EditTask'
        component={EditTaskScreen}
        options={{headerShown:false}}
        />
        
    </Stack.Navigator>
  )
}

export default HomeStackNavigator