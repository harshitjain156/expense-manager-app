import React, {useEffect, useState} from 'react';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerParamList} from '../../../navigation/type';
import {
  Box,
  Button,
  CustomDropdown,
  CustomInput,
  Loader,
  MultiSelectDropdown,
  Header,
  SafeAreaWrapper,
  Text,
} from '../../../components';
import useSWR, {useSWRConfig} from 'swr';
import {BASE_URL, fetcher} from '../../../services/configs';
import {
  CREATE_GROUP,
  EDIT_GROUP,
  GET_GROUP_LIST,
  GET_USER_EMAILS,
} from '../../../utils/constants';
import {DropdownData} from '../../../utils/constants/chart-data';
import {ScrollView, ToastAndroid} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import {getExpenseData} from '../../../services/expenseapi';
import useUserGlobalStore from '../../../store/useUserGlobalStore';
import {RouteProp, useFocusEffect, useRoute} from '@react-navigation/native';
type CreateGroupRouteType = RouteProp<DrawerParamList, 'CreateGroup'>;
const CreateGroup = ({navigation}: {navigation: any}) => {
  const route = useRoute<CreateGroupRouteType>();
  // console.log(route.params.group)
  const {user} = useUserGlobalStore();
  const {data: emails, isLoading} = useSWR<any>(GET_USER_EMAILS, fetcher, {
    refreshInterval: 2000,
  });

  const {trigger, isMutating} = useSWRMutation(CREATE_GROUP, getExpenseData);
  const {trigger: editGroup, isMutating: isUpdating} = useSWRMutation(
    EDIT_GROUP,
    getExpenseData,
  );
  const [category, setCategory] = useState('');
  const [selected, setSelected] = useState<string[]>([user?.email!]);
  const {
    control,
    handleSubmit,
    resetField,
    setValue,
    getValues,
    formState: {errors},
  } = useForm<Omit<ICreateGroup, 'groupMembers' | 'groupCurrency'>>({});

  console.log(control._formValues,errors);
  const clear = () => {
    control._reset()

    setSelected([user?.email!]);
    setCategory('');
  };
  useEffect(() => {
    control._reset()
    clear();

    if (route.params?.group) {
      setValue('groupName', route.params.group?.groupName);
      setValue('groupDescription', route.params.group?.groupDescription);
      setSelected(route.params.group?.groupMembers);
      setCategory(route.params.group?.groupCategory);
    } 
    return;

  }, [navigation, route]);
  if (isLoading) {
    return <Loader />;
  }
  const data = emails.user.map((item: string) => {
    return {label: item, value: item};
  });

  const onSubmit = async (
    formData: Omit<ICreateGroup, 'groupMembers' | 'groupCurrency'>,
  ) => {
    const {groupName, groupDescription} = formData;

    try {
      const data = {
        groupCategory: category,
        groupCurrency: 'INR',
        groupDescription: groupDescription,
        groupMembers: selected,
        groupName: groupName,
        groupOwner: user?.email,
      };
      const res = await trigger(data);
      ToastAndroid.show('' + res.message, ToastAndroid.SHORT);
      resetField('groupDescription');
      resetField('groupName');
      setCategory('');
      setSelected([user?.email!]);
      navigation.navigate('Groups');
      clear();
      console.log(res, '==>>>>>>>>>>>>>>>>>');
    } catch (error) {}
  };

  const onEdit = async () => {
    console.log('first');
    try {
      const data = {
        id: route.params.group?._id,
        groupCategory: category,
        groupCurrency: 'INR',
        groupDescription: getValues('groupDescription'),
        groupMembers: selected,
        groupName: getValues('groupName'),
        groupOwner: user?.email,
      };
      const res = await editGroup(data);

      navigation.navigate('Groups');
      clear();
    } catch (error) {}
  };
  return (
    <SafeAreaWrapper>
      <Header
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <ScrollView>
        <Box m="4" rowGap="4">
          <Text variant="text2Xl" fontWeight={900}>
            {route.params ? 'Edit group' : 'Create new group'}
          </Text>
          <Controller
            rules={{required: true}}
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                label={'Group Name'}
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                errors={errors.groupName}
              />
            )}
            name="groupName"
          />
          {/* <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) =>{ 
              return (
              <Input
                label="Group Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Group Name"
                error={errors.groupName}
              />
            )}}
            name="groupName"
          /> */}
          {/* <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                label="Group Description"
                placeholder="Group Description"
                onChangeText={onChange}
                value={value}
                numberOfLines={5}
                error={errors.groupDescription}
              />
            )}
            name="groupDescription"
          /> */}
          <Controller
            rules={{required: true}}
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                multiline={true}
                numberOfLines={5}
                label={'Group Description'}
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                errors={errors.groupDescription}
              />
            )}
            name="groupDescription"
          />

          {emails.user && (
            <MultiSelectDropdown
              label="Select members"
              data={data}
              setSelected={setSelected}
              selected={selected}
            />
          )}

          <Controller
            rules={{required: true}}
            control={control}
            render={({field: {onChange, onBlur, value = category}}) => (
              <CustomDropdown
                onChangeText={onChange}
                onBlur={onBlur}
                label="Expense category"
                value={value}
                setValue={setCategory}
                data={DropdownData}
                errors={errors.groupCategory}
              />
            )}
            name="groupCategory"
          />
          {/* <CustomDropdown
          onChangeText={()=>{ }}
            value={category}
            setValue={setCategory}
            data={DropdownData}
          /> */}
          {/* <Box height={16} /> */}
          <Button
            label={route.params.group ? 'Edit' : 'Create'}
            onPress={route.params?.group ? handleSubmit(onEdit) : handleSubmit(onSubmit)}
          />
        </Box>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default CreateGroup;
