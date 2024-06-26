import React from 'react'
import { Box, Text } from '../../../utils/theme'
import { Image } from 'react-native'
import OutlinedButton from '../../../components/shared/outline-button'

const ViewGroup = () => {
  return (
    <Box elevation={2} m='4' p='6' backgroundColor='green200' borderRadius='rounded-3xl' justifyContent='center' alignItems='center'>

          <Image style={{ resizeMode: 'stretch', width: '100%', height: 200 }} source={require('../../../assets/illustrations/dashboard-card.png')} />

          <Box height={16} />
          <Text variant='textBase' textAlign='left' color='green700' fontWeight={700}>
            Keep track of shared expenses and settle your corresponding balances in a convenient and personalized way.</Text>
          <Box height={16} />
          <Box width={'40%'} >

            <OutlinedButton label='View Groups' onPress={() => { }}></OutlinedButton>
          </Box>
        </Box>
  )
}

export default ViewGroup