import { View,  Pressable } from 'react-native'
import React from 'react'
import { Box, Text } from '../../utils/theme'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Header({onPress}:{onPress:Function}) {
  return (
      <Box elevation={10} paddingHorizontal='4' paddingVertical='2' mb='2' bg='white' flexDirection='row'>
    <TouchableOpacity  onPress={()=>{
        onPress()
      }}>
          <Box height={50} width={50}  borderRadius='rounded-7xl' bg='blu200'>

          </Box>
      </TouchableOpacity>
        </Box>
  )
}