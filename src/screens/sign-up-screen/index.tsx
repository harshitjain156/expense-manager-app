import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Box, Text} from '../../utils/theme';
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';
import {useNavigation} from '@react-navigation/native';
import {AuthScreenNavigationType} from '../../navigation/type';
import {registerUser} from '../../services/api';
import {Controller, useForm} from 'react-hook-form';
import MoveToSignIn from './components/MoveToSignIn';

const SignUpScreen = () => {
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

  const navigation = useNavigation<AuthScreenNavigationType<'SignUp'>>();
  const onSubmit = async (data: IUser) => {
    const {firstName, lastName, email, password} = data;
    try {
      // console.log(data);
      await registerUser({
        email,
        firstName,
        lastName,
        password,
      });
      navigation.navigate('SignIn');
    } catch (error) {
      // console.warn(error, '++++++++++++++');
    }
  };
  return (
    <Box flex={1} m="4" justifyContent="center">
      <Text variant="textXl" fontWeight={900}>
        Get started absolutely free.
      </Text>
      <Text variant="textBase" color="gray5" mb="6">
        Open Source, Group expense splitting app!
      </Text>
      <Box flexDirection="row" justifyContent="center">
        <Box flex={1}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                label="First Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="First Name"
                error={errors.firstName}
              />
            )}
            name="firstName"
          />
        </Box>
        <Box width={16} />
        <Box flex={1}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                label="Last Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Last Name"
                error={errors.lastName}
              />
            )}
            name="lastName"
          />
        </Box>
      </Box>
      <Box mb="4" />
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
      <Box mb="4" />
      <Button uppercase label="Register" onPress={handleSubmit(onSubmit)} />

      <MoveToSignIn onPress={()=>{
        navigation.navigate('SignIn');
      }}/>
    </Box>
  );
};

export default SignUpScreen;
