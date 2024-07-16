import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GroupDetailScreen from '../screens/ExpenseManager/GroupDetailScreen'
import { GroupListScreen } from '../screens'
import { GroupsParamList } from './type'
const Stack=createNativeStackNavigator<GroupsParamList>()

const GroupNavigator = () => {
  return (
    <Stack.Navigator>

        <Stack.Screen 
        name='GroupList'
        component={GroupListScreen} 
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name='GroupDetails'
        component={GroupDetailScreen} 
        options={{headerShown:false}}
        />
    </Stack.Navigator>
  )
}

export default GroupNavigator