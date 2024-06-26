import React from 'react'
import { Box, Text } from '../../utils/theme'

import useSWRMutation from 'swr/mutation';
import { Pressable } from 'react-native';
import axios from 'axios';
import axiosInstance from '../../services/configs';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationType } from '../../navigation/type';
type TaskProps = {
    task: ITask
}

const toggleTaskStatusRequest=async(url:string,{arg}:{arg:ITaskStatusRequest})=>{
    try {
        await axiosInstance.put(url+"/"+arg.id,{
            ...arg
        })
        
    } catch (error) {
        
    }
}
const Task = ({ task }: TaskProps) => {
    const navigation=useNavigation<HomeScreenNavigationType>()
    const {trigger}=useSWRMutation("tasks/update",toggleTaskStatusRequest)
    const toggleTaskStatus=async()=>{
       try {
            const updateTask={
                id:task._id,
                isCompleted:!task.isCompleted
            }
            await trigger(updateTask)
       } catch (error) {
        
       }
    }
    const navigateToEditTAsk=()=>{
        navigation.navigate('EditTask',{
            task:task
        })
    }
    return (
       <Pressable onPress={toggleTaskStatus} onLongPress={navigateToEditTAsk}>
         <Box p='4' bg='lightGray' borderRadius='rounded-2xl' flexDirection='row'>
            <Box>
                <Box>
                    {
                        task.isCompleted?
                        <Text variant='textXs' fontWeight={700} color='green500'> Done</Text>
                        :<Text variant='textXs' fontWeight={700} color='gray500'> Pending</Text>
                    }
                </Box>

                <Text variant='textXl'>
                    {task.name}
                </Text>
            </Box>
        </Box>
       </Pressable>
    )
}

export default Task


