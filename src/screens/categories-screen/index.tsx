import React from 'react'
import { Box, Text } from '../../utils/theme'
import SafeAreaWrapper from '../../components/shared/SafeAreaWrapper'
import { FlatList, View } from 'react-native'
import useSWR from 'swr'
import { fetcher } from '../../services/configs'
import Loader from '../../components/shared/Loader'
import Category from '../../components/categories/category'
import CreateNewList from '../../components/categories/create-new-list'
const CategoriesScreen = () => {
  const { data, isLoading, error } = useSWR<ICategory[]>('categories', fetcher,{
    refreshInterval:2000
  })
  // console.log(data,TOKEN_NAME)
  const renderItem = ({ item }: { item: ICategory }) => (
    <Category item={item}/>
  );
  if (isLoading) {
    return <Loader />
  }
  else {

    return (
      <SafeAreaWrapper >
        <Box p='4' flex={1} >
          <Text variant='textXl' fontWeight={700} mb='10'>
            Categories
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <Box height={14} />}
            keyExtractor={(item)=>item._id}
          />
       <Box position='absolute' bottom={10} left={10} right={10}>
       <CreateNewList />
       </Box>
        </Box>

      </SafeAreaWrapper>
    )
  }
}

export default CategoriesScreen