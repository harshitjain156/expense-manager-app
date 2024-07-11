import theme from "../../utils/theme"
import { FieldError } from "react-hook-form"
import { StyleSheet, TextInput, TextInputProps } from "react-native"
import { Box, Text } from "../theme"

type InputProps = {
  label: string
  error?: FieldError | undefined
} & TextInputProps


const Input = ({ label, error, ...props }: InputProps) => {
  
  return (
    <Box flexDirection="column" mb="3">
      <TextInput      
          numberOfLines={props.numberOfLines}
          textAlignVertical="top"
          
          placeholder={label}
          placeholderTextColor={'gray'}
          
        style={{ 
          fontSize:18,
          color:'black',
          padding: 16,
          borderWidth: 1,
          borderColor: error ? theme.colors.rose500 : theme.colors.grey,
          borderRadius: theme.borderRadii["rounded-3xl"],
        }}
        {...props}
      />
      {error && (
        <Text mt="3.5" color="rose500">
          {label} is required
        </Text>
      )}
    </Box>
  )
}

export default Input

const styles = StyleSheet.create({})