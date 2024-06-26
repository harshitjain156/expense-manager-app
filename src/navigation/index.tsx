import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import AuthStackNavigator from './auth-stack-navigator'
import AppStackNavigator from './app-stack-navigator'
import useUserGlobalStore from '../store/useUserGlobalStore'
import DrawerNavigator from './drawer-navigation'

const Navigation = () => {
    const {user,updateUser}=useUserGlobalStore();
    // useEffect(()=>{
    //     updateUser(null)
      
    //     return ()=>{}
    //   },[])
          
  return (
   <NavigationContainer>
    {user?<DrawerNavigator />:<AuthStackNavigator />}
    {/* <DrawerNavigator /> */}
    
   </NavigationContainer>
  )
}

export default Navigation