import React from 'react'
import { Box, Text } from '../../../utils/theme'
import Header from '../../../components/shared/header'
import Input from '../../../components/shared/input'

const CreateGroup = ({navigation}:{navigation:any}) => {
  
  return (
    <Box flex={1}>
        <Header onPress={()=>{
            navigation.openDrawer()
        }} />
        <Box m='4'>
            <Text variant='text2Xl' fontWeight={900}>
                Create new group
            </Text>
            <Box height={16}/>
            <Input label='Group Name' />
            <Input label='Group Description' numberOfLines={5}/>
          
          
        </Box>  
    </Box>
  )
}

export default CreateGroup

