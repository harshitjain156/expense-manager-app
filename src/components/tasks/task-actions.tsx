import React, { useState } from 'react'
import { Box, Text } from '../../utils/theme'
import { FlatList, Pressable, TextInput } from 'react-native'
import { format, isToday } from 'date-fns'
import useSWR from 'swr'
import Loader from '../shared/Loader'
import axiosInstance, { TOKEN_NAME, fetcher } from '../../services/configs'
import { Calendar } from 'react-native-calendars'
import useSWRMutation from 'swr/mutation'
import AsyncStorage from '@react-native-async-storage/async-storage'

type TAskActionProps={
    categoryId:string
}

const createTaskRequest =async (url:string,{arg}:{arg:ITaskRequest}) => {
    try {
        const res=await axiosInstance.post(url,{
            ...arg
        })
        
    } catch (error) {
        
    }
    
}

const TaskActions = ({categoryId}:TAskActionProps) => {
    const today=new Date()
    const todasISODate=new Date().toISOString()
        const [isSelectingCategory, setIsSelectingCategory] = useState<boolean>(false)
        const [isSelectingDate, setIsSelectingDate] = useState<boolean>(false)
        const [currentCategory,setCurrentCategory]=useState<ICategory>()
        const {data:categories,isLoading:isLoadingCategories}=useSWR<ICategory[]>("categories",fetcher)
    const [newTask,setNewTask]=useState<ITaskRequest>({
         categoryId:categoryId,
         date:todasISODate,
         isCompleted:false,
         name:''

    })

    const{data,trigger}=useSWRMutation("tasks/create",createTaskRequest)
    const selectedCategory=categories?.find(_category=>_category._id===newTask.categoryId)

    const onCreateTask=async ()=>{
        if(newTask.name.length.toString().trim().length>0){
            
            await trigger({
                ...newTask
            })
            setNewTask({
                categoryId:newTask.categoryId,
                isCompleted:false,
                date:todasISODate,
                name:""
            })

        }
    
    }


    if(isLoadingCategories || !categories){
        return <Loader/>
    }
  return (
    <Box zIndex={99}>
    <Box position='relative' bg='lightGray' px='4' py='3.5' borderRadius='rounded-5xl' flexDirection='row'>
       <TextInput 
       value={newTask.name}
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
        setNewTask(prev=>{
          return{
            ...prev,
            name:text
          }
        })
       }}
       onSubmitEditing={onCreateTask}
       />
       <Box flexDirection='row' alignItems='center' justifyContent='space-between'>
        <Pressable onPress={()=>{
            setIsSelectingDate(prev=>!prev)
            setIsSelectingCategory(false)

        }}>
            <Box flexDirection='row' alignContent='center' bg='white' p='2' borderRadius='rounded-xl'>
                <Text variant='textSm'>
                    {isToday(new Date(newTask.date))?"Today":format(new Date(newTask.date),"MMM dd")}
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
       {
        isSelectingCategory && 
       (<Box position='absolute' right={30} bottom={-180}>
         <FlatList
        data={categories}
        renderItem={({item,index})=>{
            return <Pressable onPress={()=>{
                setNewTask(prev=>{
                    return {
                        ...prev,
                        categoryId:item._id
                    }
                })
                setIsSelectingCategory(false)

            }}>
                <Box bg='gray250'  p='3' borderTopStartRadius={index==0?"rounded-3xl":"none"}
                borderTopEndRadius={index==0?"rounded-3xl":"none"}
                borderBottomStartRadius={categories?.length!-1==index?"rounded-3xl":"none"}
                borderBottomEndRadius={categories?.length-1==index?"rounded-3xl":"none"}
                >
                    <Box flexDirection='row'>
                <Text>{item.icon.symbol}</Text>
                <Box width={4}></Box>
                 <Text variant='textSm' fontWeight={newTask.categoryId==item._id?"700":"400"}>{item.name}</Text>   
                    </Box>
                </Box>
            </Pressable>
        }}
        />
       </Box>)
       }
       {
        isSelectingDate && (
            <Box position='absolute' left={10} right={10} top={100}>
                <Calendar minDate={format(today,"y-MM-dd")}  
                onDayPress={(day)=>{
                    setIsSelectingDate(false)
                    const selectedDate= new Date(day?.dateString!).toISOString()
                    setNewTask(prev=>{
                        return{
                            ...prev,
                            date:selectedDate
                        }
                    })
                }}
                />
            </Box>)
       }
    </Box>
  )
}

export default TaskActions
