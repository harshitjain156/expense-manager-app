import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { CategoriesStackParamList, HomeStackParamList } from './type'

import HomeScreen from '../screens/home-screen'
import EditTaskScreen from '../screens/edit-task-screen'
import CategoriesScreen from '../screens/categories-screen'
import CategoryScreen from '../screens/category-screen'
import CreateCategory from '../screens/create-category-screen'

const Stack=createNativeStackNavigator<CategoriesStackParamList>()
const CategoryStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name='Categories'
        component={CategoriesScreen} 
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name='Category'
        component={CategoryScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name='CreateCategory'
        component={CreateCategory}
        options={{headerShown:false}}
        />
        
        
    </Stack.Navigator>
  )
}

export default CategoryStackNavigator