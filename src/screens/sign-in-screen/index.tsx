import React from 'react'
import { Box, Text } from '../../utils/theme'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '../../navigation/type'
import Input from '../../components/shared/input'
import Button from '../../components/shared/button'
import { loginUser } from '../../services/api'
import useUserGlobalStore from '../../store/useUserGlobalStore'
import { Controller, useForm } from 'react-hook-form'

const SignInScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: {

      email: "",
      password: "",
    },
  })

  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>()
  const navigateToSignUpScreen = () => {
  }
  const { updateUser } = useUserGlobalStore()
  const onSubmit = async (data: Omit<IUser, 'name'>) => {
    try {
      const { email, password } = data;
      const user = await loginUser({ email, password })
      updateUser({ email: user.email, name: user.name })
    }
    catch (err) {

    }

  }
  return (
    <Box flex={1} px='5' mt={"13"}>
      <Text variant='textXl' fontWeight={700}>
        Welcome to Todo App
      </Text>
      <Text variant='textXl' fontWeight={700} mb='6'>
        Journey Starts
      </Text>

      <Box mb="6" />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
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
      <Box mb="6" />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Password"
            error={errors.name}
            secureTextEntry
          />
        )}
        name="password"
      />
      <Box mb='5' />
      <Button uppercase label='Register' onPress={handleSubmit(onSubmit)} />



    </Box>
  )
}

export default SignInScreen