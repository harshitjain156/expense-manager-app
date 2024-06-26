import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Box, Text } from '../../utils/theme'
import Input from '../../components/shared/input'
import Button from '../../components/shared/button'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '../../navigation/type'
import { registerUser } from '../../services/api'
import { Controller, useForm } from 'react-hook-form'

const SignUpScreen = () => {

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


  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>()
  const onSubmit = async (data: IUser) => {
    const { name, email, password } = data
    try {
      console.log(data)
      await registerUser({
        email, name, password
      })
      navigation.navigate('SignIn')
    } catch (error) {
      console.warn(error,"++++++++++++++")
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
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Name"
            error={errors.name}
          />
        )}
        name="name"
      />
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
      <View  style={{ alignItems:'center',justifyContent:'center',margin:20}}>

        <TouchableOpacity 
        onPress={()=>{
          navigation.navigate('SignIn')
          
        }}
        >
          <Text variant='textXl' style={{color:'blue'}}>
            Sign In
          </Text>
        </TouchableOpacity>
          </View>

    </Box>
  )
}

export default SignUpScreen