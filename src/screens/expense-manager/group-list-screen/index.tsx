import {StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react';
import {Box, Text} from '../../../utils/theme';
import Header from '../../../components/shared/Header';

import {ScrollView} from 'react-native-gesture-handler';
import GroupCard from './components/GroupCard';
import CreateGroupCard from './components/CreateGroupCard';
import useSWRMutation from 'swr/mutation';
import { getExpenseData } from '../../../services/expenseapi';
import useUserGlobalStore from '../../../store/useUserGlobalStore';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../../../navigation/type';

const GroupListScreen = ({navigation}: {navigation: DrawerNavigationProp<DrawerParamList>}) => {
    const { trigger, isMutating } = useSWRMutation("group/v1/user", getExpenseData)
    const {user}=useUserGlobalStore()
    const [groups, setGroups] = useState<IGroup[]>([])
    const getData=async () => {
      const res= await trigger({
        emailId:user?.email!
      })
      setGroups(res.groups)
   }
    useEffect(()=>{
      getData()
    },[])
  
  return (
    <Box flex={1}>
      <Header
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <ScrollView>
        <Box m="4">
          <Box>
            <Text variant="text2Xl" fontWeight={900}>
              Your Groups,
            </Text>
          </Box>
          <Box height={16} />
          {groups.map((item,index)=>{
              return <GroupCard group={item} key={index} />
          })}
          <CreateGroupCard onPress={()=>{
            navigation.navigate('CreateGroup')
          }}/>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default GroupListScreen;

const styles = StyleSheet.create({});
