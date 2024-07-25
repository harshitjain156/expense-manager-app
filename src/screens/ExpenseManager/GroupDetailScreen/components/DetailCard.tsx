
import React from 'react'
import { Box, Text } from '../../../../components'
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'
type DetailCardProp={
    bgColor:string
    title:string
    amount?:string
    icon?:any
}
const DetailCard = ({bgColor,title,amount,icon}:DetailCardProp) => {
    const colr='green'
  return (
    <Box marginVertical='2' borderRadius='rounded-3xl' backgroundColor={`${bgColor}100`} p='4' flexDirection='row'>
        <Box height={60} width={60} borderRadius='rounded-9xl' backgroundColor={`${bgColor}700`}></Box>
        <Box ml='4' flexDirection='column'>
            <Text variant='textXl' color={`${bgColor}700`} fontWeight={900}>{title}</Text>
            <Text variant='textXl' color={`${bgColor}700`} fontWeight={700}>{amount}</Text>
        </Box>
    </Box>
  )
}

export default DetailCard