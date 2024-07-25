import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerItem } from '@react-navigation/drawer';

const CustomDrawerItem = ({ label, onPress }: { label: string, onPress: Function }) => {
  return (
    <DrawerItem
      label={label}
      labelStyle={{
        color: 'gray',
        fontSize: 18,
      }}
      onPress={() => {
        onPress()
      }}
    />
  )
}

export default CustomDrawerItem

const styles = StyleSheet.create({})