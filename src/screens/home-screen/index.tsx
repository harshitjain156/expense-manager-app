import {ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '../../components/shared/safe-area-wrapper'
import Header from '../../components/shared/header'
import Welcome from './components/welcome'
import RecentTransactions from './components/recent-transactions'
import ViewGroup from './components/view-group'
import CustomLineChart from '../../components/graphs/line-chart'
import CustomPieChart from '../../components/graphs/pie-chart'
import TotalAmount from './components/total-amount'

const HomeScreen = ({navigation}:{navigation:any}) => {

  return (
    <SafeAreaWrapper>
      <ScrollView>
       <Header onPress={()=>{
        navigation.openDrawer()
       }} />
        <Welcome />
        <TotalAmount />
        <CustomPieChart />
        <CustomLineChart />
        <RecentTransactions />
        <ViewGroup />


      </ScrollView>
    </SafeAreaWrapper>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})