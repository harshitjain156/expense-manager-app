import { StyleSheet, View } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerItem } from '@react-navigation/drawer'
import { Box, Text } from '../../utils/theme'
import { Drawer } from 'react-native-paper'
import Icons from '../shared/icons'

const MyDrawer = ({props}:{props:DrawerContentComponentProps}) => {
  return (
   <Box p='4'>
    <Box height={24}/>
    <Box bg='blu200' flexDirection='row' p='4' borderRadius='rounded-3xl' >
     <Box height={60} width={60} bg='green200' borderRadius='rounded-7xl' />
     <Box width={14} />
     <Box>
        <Text variant='textXl' fontWeight={900}>
            Harsh Dao
        </Text>
        <Text variant='textBase' color='grey'>
            Harsh Dao
        </Text>
     </Box>
    </Box>
    <Box height={24}/>
    <DrawerItem
     
    label={'Dashboard'}
    labelStyle={{
        color:'gray'
        ,fontSize:18
    }}
    
    onPress={()=>{
        props.navigation.navigate('HomeStack')
    }}
    />
    <DrawerItem 
    label={'Groups'}
    labelStyle={{
        color:'gray'
        ,fontSize:18
    }}
    onPress={()=>{
        props.navigation.navigate('Groups')
    }}
    />
    <DrawerItem 
    label={'Create Group'}
    labelStyle={{
        color:'gray'
        ,fontSize:18
    }}
    onPress={()=>{
        props.navigation.navigate('Groups')
    }}
    />
   </Box>
  )
}

export default MyDrawer

const styles = StyleSheet.create({})