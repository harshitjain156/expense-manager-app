import { View,  Pressable } from 'react-native'
import React from 'react'
import { Box, Text } from '../../utils/theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native'

export default function Header({onPress}:{onPress:Function}) {
  return (
      <Box elevation={10} paddingHorizontal='4' paddingVertical='2' mb='2' bg='white' flexDirection='row'>
    <TouchableOpacity  onPress={()=>{
        onPress()
      }}>
          <Box height={50} width={50}  borderRadius='rounded-7xl' >
          <Image source={require('../../assets/mock-images/avatar.png')} style={{
                        resizeMode:'contain',height:50,width:50  
                    }} />
          </Box>
      </TouchableOpacity>
        </Box>
  )
}