import { Dimensions, Image, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import SafeAreaWrapper from '../../components/shared/safe-area-wrapper'
import { Box, Text } from '../../utils/theme'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Button from '../../components/shared/button'
import { LineChart, PieChart } from 'react-native-chart-kit'
import OutlinedButton from '../../components/shared/outline-button'
import TransactionCard from '../../components/expense/transaction-card'
import { useDrawerStatus } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { DrawerParamList } from '../../navigation/type'

const HomeScreen = ({navigation}:{navigation:any}) => {
  const isDrawerOpen=useDrawerStatus()==='open'

  const [drawerOpen, setDrawerOpen] = useState(isDrawerOpen)
  console.log("first")
  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];
  const chartConfig = {
    
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    
   // optional
  };
  // const navigation=useNavigation<DrawerParamList>()
  return (
    <SafeAreaWrapper>
      <ScrollView>
        <Pressable onPress={()=>{
          navigation.openDrawer()
          if(!drawerOpen){
          }
        }}>
          <Box elevation={10} paddingHorizontal='4' paddingVertical='2' mb='2' bg='white'>
            <Box height={50} width={50}  borderRadius='rounded-7xl' bg='blu200'>
            </Box>

          </Box>
        </Pressable>
        <Box m='4' elevation={2} paddingHorizontal='6' pt='6' backgroundColor='sky200' borderRadius='rounded-3xl'>
          <Text variant='textXl' fontWeight={900} color='blu900' >
            Hello there, Welcome back!
          </Text>
          <Box height={16} />
          <Text variant='textBase'>
            Keep track of shared expenses and settle your corresponding balances in a convenient and personalized way.
          </Text>
          <Box height={16} />
          <Box width={'40%'}>

            <Button label='View Groups' onPress={() => { }}></Button>
          </Box>
          <Box>
            <Image style={{ resizeMode: 'stretch', width: '100%', height: 200 }} source={require('../../assets/illustrations/dashboard-card.png')} />
          </Box>
        </Box>
        <Box elevation={2} m='4' p='6' backgroundColor='sky200' borderRadius='rounded-3xl' >
          <Box flexDirection='row' >
            <Box borderRadius='rounded-9xl' height={60} width={60} bg='blu700'>

            </Box>
            <Box width={16} />
            <Box flexDirection='column'>
              <Text variant='textXl' color='blu700'>
                Total
              </Text>
              <Text variant='text2Xl' fontWeight={700} color='blu700'>
                Rs. 1775
              </Text>
            </Box>
          </Box>
        </Box>
        <Box elevation={2} m='4' p='6' bg='white' borderRadius='rounded-3xl' shadowRadius={4} shadowColor='gray5'>
          <Text mb='4' variant='textXl' fontWeight={700} textAlign='left'>Groupwise Expense Chart</Text>
          <PieChart
            data={data}
            width={300}
            height={300}
            chartConfig={{
              color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,

            }}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"5"}
            center={[50, 0]}
            style={{

            }}
            
          />


        </Box>
        <Box elevation={2} m='4' p='6' bg='white' borderRadius='rounded-3xl' shadowRadius={4} shadowColor='gray5'>
          <Text mb='4' variant='textXl' fontWeight={700} textAlign='left'>Expense Graph</Text>

          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
                }
              ]
            }}
            width={Dimensions.get("window").width * .8} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "transparent",
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffffff"
              }
            }}
            bezier

          />
        </Box>
        <Box elevation={2} m='4' p='6' backgroundColor='white' borderRadius='rounded-3xl' >

          <Text mb='4' variant='textXl' fontWeight={900}>Your Recent Transactions</Text>

          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </Box>
        <Box elevation={2} m='4' p='6' backgroundColor='green200' borderRadius='rounded-3xl' justifyContent='center' alignItems='center'>

          <Image style={{ resizeMode: 'stretch', width: '100%', height: 200 }} source={require('../../assets/illustrations/dashboard-card.png')} />

          <Box height={16} />
          <Text variant='textBase' textAlign='left' color='green700' fontWeight={700}>
            Keep track of shared expenses and settle your corresponding balances in a convenient and personalized way.        </Text>
          <Box height={16} />
          <Box width={'40%'} >

            <OutlinedButton label='View Groups' onPress={() => { }}></OutlinedButton>
          </Box>
        </Box>


      </ScrollView>
    </SafeAreaWrapper>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})