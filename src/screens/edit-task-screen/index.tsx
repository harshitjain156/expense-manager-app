import React, { useState } from 'react'
import SafeAreaWrapper from '../../components/shared/SafeAreaWrapper'
import { FlatList, Pressable, TextInput, View } from 'react-native'
import { Box, Text } from '../../utils/theme'
import NavigateBack from '../../components/shared/NavigateBack'
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../utils/theme/colors'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { HomeStackParamList } from '../../navigation/type'
import useSWR, { useSWRConfig } from 'swr'
import axiosInstance, { fetcher } from '../../services/configs'
import { format, isToday } from 'date-fns'
import { Calendar } from 'react-native-calendars'
import useSWRMutation from 'swr/mutation'
type EditTaskRoute=RouteProp<HomeStackParamList,"EditTask">
const updateTaskRequest=async (url:string,{arg}:{arg:ITask}) => {
    try {
        await axiosInstance.put(url+'/'+arg._id,{
          ...arg
        })
    } catch (error) {
      
    }
}

const EditTaskScreen = () => {
  const route=useRoute<EditTaskRoute>()
  const {task}=route.params;
  const [updatedTask,setUpdatedTask]=useState(task)
  const [isSelectingCategory, setIsSelectingCategory] = useState<boolean>(false)
  const [isSelectingDate, setIsSelectingDate] = useState<boolean>(false)
  const {data:categories,isLoading:isLoadingCategories}=useSWR<ICategory[]>("categories",fetcher)
  const {mutate}=useSWRConfig()
  const {trigger}=useSWRMutation("tasks/edit",updateTaskRequest)
  const navigation=useNavigation()

  const selectedCategory=categories?.find(_category=>_category._id===updatedTask.categoryId)
  const today=new Date()
    const todasISODate=new Date().toISOString()
const updateTask=async () => {
  try {
    if(updateTask.name.length.toString().trim().length>0){
            
      await trigger({
          ...updatedTask
      })
      await mutate('tasks/')
      navigation.goBack()
    }
  } catch (error) {
    
  }
}

  return (
    <SafeAreaWrapper>
      <Box flex={1} m='4' >

      <Box flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
      >
      <NavigateBack />
      <Pressable >
        <Text variant='textBase' fontWeight={700} color='red500'>Delete</Text>
      </Pressable>
      </Box>
      <Box position='relative' bg='lightGray' mt='4' px='4' py='3.5' borderRadius='rounded-5xl' flexDirection='row'>
       <TextInput
       value={updatedTask.name}
       placeholder='create new task'
       placeholderTextColor={'gray'}
       style={{
        padding:3,
        fontSize:16,
        width:'50%',
        color:'gray'
       }}
       maxLength={36}
       textAlignVertical='center'
       onChangeText={(text)=>{
        setIsSelectingDate(false)
            setIsSelectingCategory(false)
        setUpdatedTask(prev=>{
          return{
            ...prev,
            name:text
          }
        })
       }}
       onSubmitEditing={updateTask}
       />
       <Box flexDirection='row' alignItems='center' justifyContent='space-between'>
        <Pressable onPress={()=>{
            setIsSelectingDate(prev=>!prev)
            setIsSelectingCategory(false)

        }}>
            <Box flexDirection='row' alignContent='center' bg='white' p='2' borderRadius='rounded-xl'>
                <Text variant='textSm'>
                    {isToday(new Date(updatedTask.date))?"Today":format(new Date(updatedTask.date),"MMM dd")}
                </Text>

            </Box>
        </Pressable>
        <Box width={12} />
        <Pressable  onPress={()=>{
            setIsSelectingCategory(prev=>!prev)
            setIsSelectingDate(false)
        }}>
            <Box
            bg={selectedCategory?.color.name as any}
            flexDirection='row'
            alignItems='center'
            borderRadius='rounded-xl'
            p='2'
            
            >
            <Box width={12}
            borderColor='white'
            height={12}
            borderRadius='rounded'
            borderWidth={2}
            mr='1'
            style={{
                
            }}
            >
                
            </Box>
                <Text color='white'>{selectedCategory?.name}</Text>
            </Box>
        </Pressable>
       </Box>
       </Box>
      </Box>
       {
        isSelectingCategory && 
       (<Box position='absolute' right={30} top={140} height={300}  
        bg='gray250'  p='1' borderTopStartRadius={"rounded-3xl"}
        borderTopEndRadius={"rounded-3xl"}
        borderBottomStartRadius={"rounded-3xl"}
        borderBottomEndRadius={"rounded-3xl"}
       >
         <FlatList
         showsVerticalScrollIndicator={false}
        data={categories}
        renderItem={({item,index})=>{
            return <Pressable onPress={()=>{
                console.log("[[[[[[[[[[[[")
                setUpdatedTask(prev=>{
                    return {
                        ...prev,
                        categoryId:item._id
                    }
                })
                setIsSelectingCategory(false)

            }}>
                <Box bg='gray250'  p='3'                
                >
                    <Box flexDirection='row'>
                <Text >{item.icon.symbol}</Text>
                <Box width={4}></Box>
                 <Text variant='textBase' color={item.color.name as any} fontWeight={updatedTask.categoryId==item._id?"900":"400"}>{item.name}</Text>   
                    </Box>
                </Box>
            </Pressable>
        }}
        />
       </Box>)
       }
       {
        isSelectingDate && (
            <Box position='absolute' left={10} right={10} top={150}>
                <Calendar minDate={format(today,"y-MM-dd")}  
                onDayPress={(day)=>{
                    setIsSelectingDate(false)
                    const selectedDate= new Date(day?.dateString!).toISOString()
                    setUpdatedTask(prev=>{
                        return{
                            ...prev,
                            date:selectedDate
                        }
                    })
                }}
                />
            </Box>)
       }
    </SafeAreaWrapper>
  )
}

export default EditTaskScreen