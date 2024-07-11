import React from 'react'
import { TextInput, TextInputProps } from 'react-native-paper'
import { Box, Text } from '../theme'
import { colors } from '../../utils/theme/colors'
import { FieldError } from 'react-hook-form'
type InputProps = {
    errors?: FieldError | undefined
  } & TextInputProps
  
  
const CustomInput = ({errors,...props}:InputProps) => {
    console.log(errors,"=============================-")
  return (
   <Box>
    <TextInput  mode='outlined' style={{backgroundColor:'white'}} activeOutlineColor={'gray'} {...props} textColor='black'/>
    {errors && (
        <Text mt="3.5" color="rose500">
          {props.label} is required
        </Text>
      )}
   </Box>
  )
}

export default CustomInput