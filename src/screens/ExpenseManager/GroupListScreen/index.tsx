import {FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import useSWRMutation from 'swr/mutation';
import {getExpenseData} from '../../../services/expenseapi';
import useUserGlobalStore from '../../../store/useUserGlobalStore';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerParamList} from '../../../navigation/type';
import {CreateGroupCard, GroupCard} from './components';
import {Box, Header, SafeAreaWrapper, Text} from '../../../components';
import {GET_GROUP_LIST} from '../../../utils/constants';

const GroupListScreen = ({
  navigation
}: {
  navigation: DrawerNavigationProp<DrawerParamList>;
}) => {
  const {trigger, isMutating} = useSWRMutation(GET_GROUP_LIST, getExpenseData, {
    revalidate: true,
  });
  const {user} = useUserGlobalStore();
  const [groups, setGroups] = useState<IGroup[]>([]);
  const [onRefresh,setOnReferesh]=useState(false)
  const getData = async () => {
    setOnReferesh(true)
    const res = await trigger({
      emailId: user?.email!,
    });
    setGroups(res.groups);
    setOnReferesh(false)
  };
  useEffect(() => {
    getData();
  }, [navigation]);

  const renderItem=({item,index}:{item:IGroup, index:number})=>{
    return <GroupCard group={item} key={item._id} />;
  }
  return (
    <SafeAreaWrapper>

    <Box flex={1}>
      <Header
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      
        <Box m="4">
          <Box>
            <Text variant="text2Xl" fontWeight={900}>
              Your Groups,
            </Text>
          </Box>
          <Box height={16} />
          <FlatList style={{marginBottom:120}} data={groups} 
          refreshing={onRefresh}
          onRefresh={()=>{getData()}}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<CreateGroupCard
            onPress={() => {
              navigation.navigate('CreateGroup',{});
            }}
          />}
          />
          <Box height={46} />
          {/* {groups.map((item, index) => {
            return <GroupCard group={item} key={item._id} />;
          })} */}
          
        </Box>
      
    </Box>
    </SafeAreaWrapper>

  );
};



export default GroupListScreen;

const styles = StyleSheet.create({});
