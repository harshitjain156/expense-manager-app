import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerItem } from '@react-navigation/drawer'
import { Box, Text } from '../../utils/theme'
import { Drawer } from 'react-native-paper'
import Icons from '../shared/icons'
import SvgComponent from '../../assets/icons/drawer-icons/dashboard'

const MyDrawer = ({ props }: { props: DrawerContentComponentProps }) => {
    return (
        <Box p='4' flex={1}>
            <Box height={24} />
            <Box bg='blu200' flexDirection='row' p='4' borderRadius='rounded-3xl' >
                <Box height={60} width={60} bg='green200' borderRadius='rounded-9xl' >
                    <Image source={require('../../assets/mock-images/avatar.png')} style={{
                        resizeMode:'contain',height:60,width:60  
                    }} />
                </Box>
                <Box width={14} />
                <Box>
                    <Text variant='textXl' fontWeight={900}>
                        Harsh Dao
                    </Text>
                    <Text variant='textBase' color='grey'>
                        Harsh Dao
                    </Text>
                </Box>
            </Box>
            <Box height={24} />
            <DrawerItem

                label={'Dashboard'}
                labelStyle={{
                    color: 'gray'
                    , fontSize: 18
                }}

                onPress={() => {
                    props.navigation.navigate('HomeStack')
                }}
            />
            <DrawerItem
                label={'Groups'}
                labelStyle={{
                    color: 'gray'
                    , fontSize: 18
                }}
                onPress={() => {
                    props.navigation.navigate('Groups')
                }}
            />
            <DrawerItem
                label={'Create Group'}
                labelStyle={{
                    color: 'gray'
                    , fontSize: 18
                }}
                onPress={() => {
                    props.navigation.navigate('CreateGroup')
                }}
            />
            <SvgComponent />
            <Box position='absolute' bottom={20} bg='red200' alignItems='center' left={0} right={0}>
                <Text variant='textXs'>
                   SplitApp | Open Source 
                </Text>
            </Box>
        </Box>
    )
}

export default MyDrawer

const styles = StyleSheet.create({})