import React from 'react';
import {Box, Text} from '../../../utils/theme';
import {useNavigation} from '@react-navigation/native';
import {AuthScreenNavigationType} from '../../../navigation/type';
import {loginUser} from '../../../services/api';
import useUserGlobalStore from '../../../store/useUserGlobalStore';
import {Controller, useForm} from 'react-hook-form';
import MoveToSignup from './components/MoveToSignup';
import {Button, Input} from '../../../components';

const SignInScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IUser>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const navigation = useNavigation<AuthScreenNavigationType<'SignIn'>>();

  const {updateUser} = useUserGlobalStore();
  const onSubmit = async (data: Omit<IUser, 'firstName' | 'lastName'>) => {
    try {
      const {email, password} = data;
      const user = await loginUser({email, password});
      console.log(user);
      updateUser({
        email: user.emailId,
        firstName: user.firstName,
        lastName: user.lastName,
        userId: user.userId,
      });
    } catch (err) {}
  };
  return (
    <Box flex={1} px="5" mt={'13'} justifyContent="center">
      <Text variant="textXl" fontWeight={900}>
        Sign in to SplitApp!
      </Text>
      <Text variant="textBase" color="gray5" mb="6">
        Enter your details below.{' '}
      </Text>
      <Box mb="6" />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            label="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Email"
            error={errors.email}
          />
        )}
        name="email"
      />
      <Box mb="4" />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            label="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Password"
            error={errors.password}
            secureTextEntry
          />
        )}
        name="password"
      />
      <Box mb="5" />
      <Button uppercase label="Login" onPress={handleSubmit(onSubmit)} />
      <MoveToSignup
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      />
    </Box>
  );
};

export default SignInScreen;
