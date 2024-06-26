import React from 'react'
import { Box ,Text} from '../../utils/theme'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CategoriesNavigationType } from '../../navigation/type'

type CategoryProps={
    item:ICategory
}
const Category = ({item}:CategoryProps) => {
  const navigation=useNavigation<CategoriesNavigationType>()
  const navigateToCreateCategory=()=>{
    navigation.navigate("CreateCategory",{
      category:item
    })
  }
  const navigateToCategoryScreen=()=>{
    navigation.navigate("Category",{
      id:item._id
    })
  }
  return (
    <Pressable onPress={navigateToCategoryScreen}>

    <Box bg={item.color.name as any} opacity={.9} p='4' borderRadius='rounded-5xl'>
      <Box flexDirection='row' alignItems='center' justifyContent='space-between'>

      <Box flexDirection='row'>
        <Text variant='textBase' fontWeight={600}>{item.icon.symbol}</Text>
        <Box width={10}/>
        <Text variant='textBase' fontWeight={600}>{item.name}</Text>
        
      </Box>
      <Pressable onPress={navigateToCreateCategory}>
      <Text variant='textSm' color='primary' fontWeight={700} >Edit</Text>
      </Pressable>
      </Box>
    </Box>
    </Pressable>
  )
}

export default Category