import {FlatList, Pressable, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import useSWRMutation from 'swr/mutation';
import {getExpenseData} from '../../../services/expenseapi';
import useUserGlobalStore from '../../../store/useUserGlobalStore';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerParamList} from '../../../navigation/type';
import {CreateGroupCard, GroupCard} from './components';
import {Box, Header, SafeAreaWrapper, Text} from '../../../components';
import {GET_GROUP_LIST} from '../../../utils/constants';
import {useFocusEffect} from '@react-navigation/native';
import {Icon} from 'react-native-elements';

const GroupListScreen = ({
  navigation,
}: {
  navigation: DrawerNavigationProp<DrawerParamList>;
}) => {
  const {trigger, isMutating} = useSWRMutation(GET_GROUP_LIST, getExpenseData, {
    revalidate: true,
  });
  const {user} = useUserGlobalStore();
  const [groups, setGroups] = useState<IGroup[]>([]);
  const [onRefresh, setOnReferesh] = useState(false);
  const getData = async () => {
    setOnReferesh(true);
    const res = await trigger({
      emailId: user?.email!,
    });
    setGroups(res.groups);
    setOnReferesh(false);
  };
  useFocusEffect(
    useCallback(() => {
      getData();
    }, [navigation]),
  );

  const renderItem = ({item, index}: {item: IGroup; index: number}) => {
    return <GroupCard group={item} key={item._id} />;
  };

  
  return (
    <SafeAreaWrapper>
      <Box flex={1}>
        <Header
          onPress={() => {
            navigation.openDrawer();
          }}
        />
        {groups.length>0?<Box p="2" m="2">
          <Box>
            <Text variant="text2Xl" fontWeight={900}>
              Your Groups,
            </Text>
          </Box>
          <Box height={16} />
          <FlatList
            initialNumToRender={10}
            style={{marginBottom: 120}}
            data={groups}
            refreshing={onRefresh}
            onRefresh={() => {
              getData();
            }}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            // ListFooterComponent={}
          />
        </Box>:<Box p='2' m='2'>
        <CreateGroupCard
        onPress={() => {
          navigation.navigate('CreateGroup', {});
        }}
      />
          </Box>}
      </Box>
      <Pressable
        onPress={() => {
          navigation.navigate('CreateGroup', {});
        }}>
        <Box
          position="absolute"
          height={60}
          width={60}
          bg="green300"
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

export default GroupListScreen;

const styles = StyleSheet.create({});
