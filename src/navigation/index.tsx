import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import AuthStackNavigator from './AuthStackNavigator';
import AppStackNavigator from './AppStackNavigator';
import useUserGlobalStore from '../store/useUserGlobalStore';
import DrawerNavigator from './DrawerNavigator';

const Navigation = () => {
  const {user, updateUser} = useUserGlobalStore();


  //-----this is user for clear user data during development-------
  // useEffect(()=>{
  //     updateUser(null)

  //     return ()=>{}
  //   },[])

  return (
    <NavigationContainer>
      {user ? <DrawerNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
