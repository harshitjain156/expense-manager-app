import React from 'react'
import { Box, Text } from '../../utils/theme'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CategoriesNavigationType } from '../../navigation/type'

const CreateNewList = () => {
    const naviation=useNavigation<CategoriesNavigationType>()
    const navigateToCreateCategory=()=>{
        naviation.navigate("CreateCategory",{})
    }
  return (
    <Pressable onPress={navigateToCreateCategory}>

    <Box p='4' bg='lightGray' borderRadius='rounded-5xl' flexDirection='row'>
    
        <Text variant='textXl' fontWeight={600} color='gray650'>
            Create new list
        </Text>
    </Box>
    </Pressable>
  )
}

export default CreateNewList