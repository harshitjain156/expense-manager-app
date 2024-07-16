import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { GroupBalance, GroupExpenses, GroupListScreen, HomeScreen } from '../screens';
import theme from '../utils/theme';
import { Dimensions, View } from 'react-native';
import { Box, Button, Text } from '../components';

const Tab = createMaterialTopTabNavigator();

const GroupTabNavigator=({group}:{group:IGroup})=> {
  return (
    <Tab.Navigator screenOptions={{
        tabBarStyle:{
            shadowColor:'white'
        },
        tabBarLabelStyle:{
            fontWeight:900,
            textTransform:'capitalize'
        },
        // tabBarIndicator:()=><Box bg='red300' height={60} />,
        tabBarIndicatorContainerStyle:{
            justifyContent:'center',
            alignItems:'center'
        },
        tabBarIndicatorStyle:{
            backgroundColor:theme.colors.blu300,
            margin:6,
            height:40,
            borderRadius:10
        },
        tabBarItemStyle:{
            justifyContent:'center',
            alignItems:'center',
            width:Dimensions.get('window').width*.32,
            margin:2,
            padding:2,
            borderRadius:4,
           
        },
        tabBarAndroidRipple:{
            foreground:false,
            color:'transparent'
        }
        
    }} >
      <Tab.Screen name="Group Expense" component={GroupExpenses} initialParams={group}  />
      <Tab.Screen name="Group Balance"  component={GroupBalance} initialParams={group}/>
      <Tab.Screen name="My Balance" component={GroupExpenses} />
    </Tab.Navigator>
  );
}


export default GroupTabNavigator