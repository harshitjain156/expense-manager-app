import {Modal } from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Box,Text,SafeAreaWrapper } from '../../../components'
import SettlementCard from './components/SettlementCard'
import useSWRMutation from 'swr/mutation'
import { GET_SETTLEMENTS } from '../../../utils/constants'
import { getExpenseData } from '../../../services/expenseapi'
import { useFocusEffect, useRoute } from '@react-navigation/native'
import SettlementModal from './components/SettlementModal'
import GroupContext from '../../../store/groupContext'

const GroupBalance = () => {
  const [settlement,setSettlement]=useState([])
  const [settle,setSettle]=useState<string[]>([])
  const [isModalVisible,setIsModalVisible]=useState(false)
  const route = useRoute();
  const {context,setContext}=useContext(GroupContext)
  const group:IGroup=route.params as IGroup
  const {trigger:getSettlemets, isMutating} = useSWRMutation(GET_SETTLEMENTS, getExpenseData);
  const getData=async () => {
    try {
       const res= await getSettlemets({id:group._id}) 
       setSettlement(res.data)
    } catch (error) {
      
    }
  }
  useFocusEffect(
    useCallback(()=>{
      getData()
    },[isModalVisible])
  )

  if(settlement.length==0){
    return (
      <SafeAreaWrapper>
        <Box flex={1} height={300} justifyContent="center">
          <Text textAlign="center">No settlements left</Text>
        </Box>
      </SafeAreaWrapper>
    );
  }
 
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
          return  <SettlementCard key={index} Settle={()=>{
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