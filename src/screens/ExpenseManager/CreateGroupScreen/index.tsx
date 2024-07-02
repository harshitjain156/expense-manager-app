import React from 'react'
import Header from '../../../components/shared/Header'
import Input from '../../../components/shared/Input'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { DrawerParamList } from '../../../navigation/type'
import { Box, CustomDropdown, Text } from '../../../components'

const CreateGroup = ({navigation}:{navigation:DrawerNavigationProp<DrawerParamList>}) => {
  
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
            <CustomDropdown />
        </Box>  
    </Box>
  )
}

export default CreateGroup

