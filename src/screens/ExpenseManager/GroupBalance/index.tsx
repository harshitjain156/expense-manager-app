import { View, Text, Modal } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Box, SafeAreaWrapper } from '../../../components'
import SettlementCard from './components/SettlementCard'
import useSWRMutation from 'swr/mutation'
import { GET_SETTLEMENTS } from '../../../utils/constants'
import { getExpenseData } from '../../../services/expenseapi'
import { useFocusEffect, useRoute } from '@react-navigation/native'
import SettlementModal from './components/SettlementModal'

const GroupBalance = () => {
  const [settlement,setSettlement]=useState([])
  const [settle,setSettle]=useState<string[]>([])
  const [isModalVisible,setIsModalVisible]=useState(false)
  const route = useRoute();
  const group:IGroup=route.params as IGroup
  // console.log(group)
  const {trigger:getSettlemets, isMutating} = useSWRMutation(GET_SETTLEMENTS, getExpenseData);
  const getData=async () => {
    try {
       const res= await getSettlemets({id:group._id}) 
       console.log(res)
       setSettlement(res.data)
    } catch (error) {
      
    }
  }
  useFocusEffect(
    useCallback(()=>{
      getData()
    },[isModalVisible])
  )
 
  return (
  <SafeAreaWrapper>
    <Modal  visible={isModalVisible} transparent >
      <SettlementModal groupId={group._id} data={settle} hide={()=>{
        setIsModalVisible(false)
      }}/>
    </Modal>
    <Box p='4'>
      {settlement.map((item:string[],index:number)=>{
        if(item[2].toString() != '0'){
          return  <SettlementCard  Settle={()=>{
            setIsModalVisible(true)
            setSettle(item)
          }}  settlement={item} />
        }
      })}
        
    </Box>
  </SafeAreaWrapper>
  )
}

export default GroupBalance