import {RouteProp, useFocusEffect, useRoute} from '@react-navigation/native';
import {Box, Card, SafeAreaWrapper, Text} from '../../../components';
import {GroupsParamList} from '../../../navigation/type';
import {checkActive, convertToCurrency} from '../../../utils/helpers';
import useUserGlobalStore from '../../../store/useUserGlobalStore';
import {Button} from 'react-native-paper';
import {Icon} from 'react-native-elements';
import DetailCard from './components/DetailCard';
import { Modal, Pressable, ScrollView } from 'react-native';
import GroupTabNavigator from '../../../navigation/GroupTabNavigator';
import { GET_GROUP_DETAIL } from '../../../utils/constants';
import { getExpenseData } from '../../../services/expenseapi';
import useSWRMutation from 'swr/mutation';
import { useCallback, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native';
import AddExpenseModal from './components/AddExpenseModal';
type GroupDetailRouteType = RouteProp<GroupsParamList, 'GroupDetails'>;

const GroupDetailScreen = () => {
  const route = useRoute<GroupDetailRouteType>();
  const [group,setGroup]=useState<IGroup>(route.params.group)
  const [modalVisible,setModalVisible]=useState(false)
  // const group: IGroup = route.params.group;
  const {user} = useUserGlobalStore();


   // console.log(group)
   const {trigger:getSettlemets, isMutating} = useSWRMutation(GET_GROUP_DETAIL, getExpenseData);
   const getData=async () => {
     try {
        const res= await getSettlemets({id:group._id}) 
        console.log(res,'=========================')
        setGroup(res.group)
     } catch (error) {
       
     }
   }
   useFocusEffect(
     useCallback(()=>{
       getData()
     },[])
   )

  const findUserSplit = (split:any) => {
    if (split) {
        split = split[0]
        return split[user?.email!]
    }
    return 0
}
  return (
    <SafeAreaWrapper>
      <ScrollView>
      <Box m="4">
        
        <Box borderRadius="rounded-3xl" bg="white" overflow="hidden">
          <Box p="4" pb="6" bg="sky100">
            <Text variant="text2Xl" color="blu600" fontWeight={900} pt="6">
              {group.groupName}
            </Text>
            <Box height={14} />

            <Text variant="textBase" color="gray500" fontWeight={700}>
              {group.groupDescription}
            </Text>
            <Box height={14} />
            <Text variant="textBase">Created by: {group.groupOwner}</Text>
            <Box height={14} />
            <Box
              width={'40%'}
              overflow="hidden"
              p="2"
              borderRadius="rounded-2xl"
              bg="red200">
              <Text variant="textBase" fontWeight={700}>
                Category: {group.groupCategory}
              </Text>
            </Box>
          <Box height={14} />
          </Box>
          {/* this box is for icon */}
          <Box
            ml="4"
            height={60}
            width={60}
            justifyContent="center"
            borderRadius="rounded-9xl"
            bg="white"
            mt="-2">
            <Icon name={'clipboard-notes'} type="foundation" />
          </Box>
          
          <Box p="2">
            <DetailCard
              bgColor="blu"
              title="Total expense"
              amount={` Rs. ${
                group.groupTotal ? convertToCurrency(group.groupTotal) : 0
              }`}
            />
            <DetailCard bgColor="green" title="You are owed" amount={`Rs ${findUserSplit(group?.split) > 0 ? convertToCurrency(findUserSplit(group?.split)) : 0}`} />
            <DetailCard bgColor="red" title="You owed" amount={`Rs ${findUserSplit(group?.split) < 0 ? convertToCurrency(Math.abs(findUserSplit(group?.split))) : 0}`}/>
            
          </Box>
        </Box>
      </Box>
      <GroupTabNavigator group={group} />
      </ScrollView>
      <Modal visible={modalVisible} transparent>
              <AddExpenseModal hide={()=>{
                setModalVisible(false)
              }} group={group} />
      </Modal>
      <Pressable  onPress={()=>{
        setModalVisible(true)
        console.log("first")
      }}>
      <Box
        position="absolute"
        height={60}
        width={60}
        bg="blu200"
        justifyContent="center"
        borderRadius="rounded-9xl"
        bottom={10}
        right={10}>
          
        <Icon name={'edit'} type="feather" color={'#000'} />
      </Box>
      </Pressable>
    </SafeAreaWrapper>
  );
};

export default GroupDetailScreen;
