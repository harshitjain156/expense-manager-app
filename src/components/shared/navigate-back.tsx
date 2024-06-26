import React from 'react'
import { Pressable } from 'react-native'
import { Box, Text } from '../../utils/theme'
import { useNavigation } from '@react-navigation/native'

const NavigateBack = () => {
    const navigation=useNavigation()
    const navigateBack=()=>{
        navigation.goBack()
    }
  return (
   <Pressable onPress={navigateBack}>
    <Box bg='gray100' p='2' borderRadius='rounded-3xl'>
    <Text  style={{color:'blue'}} fontWeight={700}> Go Back</Text>
    </Box>
   </Pressable>
  )
}

export default NavigateBack