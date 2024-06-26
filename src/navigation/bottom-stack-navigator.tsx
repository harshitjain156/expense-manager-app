import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { RootBottomTabParamList } from './type'
import HomeStackNavigator from './home-stack-navigator'
import CompletedScreen from '../screens/completed-screen'
import TodayScreen from '../screens/today-screen'
import CategoryStackNavigator from './category-stack-navigator'
import { color } from '@shopify/restyle'
import Icons from '../components/shared/icons'
import theme from '../utils/theme'
const Tab = createBottomTabNavigator<RootBottomTabParamList>()
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: theme.colors.gray550,
        tabBarActiveTintColor: "black",
        tabBarHideOnKeyboard: true,
        
      }}
    >
      <Tab.Screen name='HomeStack' component={HomeStackNavigator} options={() => ({
        title: "Home",
        tabBarIcon: ({ color }) => <Icons name='home' color={color} />,
        headerShown: false
      })}
      ></Tab.Screen>
      <Tab.Screen name='Today' component={TodayScreen} options={() => ({
        title: "Today",
        tabBarIcon: ({ color }) => <Icons name='calendar' color={color} />,
        headerShown: false
      })}></Tab.Screen>
      <Tab.Screen name='Completed' component={CompletedScreen} options={() => ({
        title: "Completed",
        tabBarIcon: ({ color }) => <Icons name='completed' color={color} />,
        headerShown: false
      })}></Tab.Screen>
      <Tab.Screen name='CategoriedStack' component={CategoryStackNavigator} options={() => ({
        title: "Categories",
        tabBarIcon: ({ color }) => <Icons name='categories' color={color} />,
        headerShown: false
      })} ></Tab.Screen>

    </Tab.Navigator>

  )
}

export default BottomTabNavigator