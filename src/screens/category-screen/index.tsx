import React from 'react'
import { Box, Text } from '../../utils/theme'
import SafeAreaWrapper from '../../components/shared/safe-area-wrapper'
import { RouteProp, useRoute } from '@react-navigation/native'
import { CategoriesStackParamList } from '../../navigation/type'
import useSWR from 'swr'
import { fetcher } from '../../services/configs'
import Loader from '../../components/shared/loader'
import NavigateBack from '../../components/shared/navigate-back'
import TaskActions from '../../components/tasks/task-actions'
import { FlatList } from 'react-native'
import Task from '../../components/tasks/task'


type CategoryScreenRouteProp=RouteProp<CategoriesStackParamList,"Category">
const CategoryScreen = () => {

  const route=useRoute<CategoryScreenRouteProp>()
  const {id}=route.params
  const {data:tasks,isLoading}=useSWR<ITask[]>(`tasks/tasks-by-categories/${id}`,fetcher,{
    refreshInterval:1000
  })
  const {data:category,isLoading:isLoadingCategory}=useSWR<ICategory>(`categories/${id}`,fetcher)
  console.log(tasks)

  if(isLoading || isLoadingCategory || !category || !tasks ){
    <Loader />
  }
  else{

    return (
      
      <SafeAreaWrapper>
        <Box flex={1} m='4'>
          <Box width={76}>
            <NavigateBack />
          </Box>
          <Box height={16} />
          <Box flexDirection='row'>
          <Text variant='textXl' fontWeight={700}>{category.icon.symbol}</Text>
          <Text variant='textXl' ml='3' fontWeight={700} color={category.color.name as any}>{category.name}</Text>

          </Box>
          <Box height={16} />
          <TaskActions  categoryId={id!} />
          <Box height={16} />
          <FlatList 
          data={tasks}
          renderItem={({item,index})=>{
            return <Task task={item} />
          }}
          ItemSeparatorComponent={()=><Box height={16}  />}
          />
        </Box>
    </SafeAreaWrapper>  )
    }
}

export default CategoryScreen