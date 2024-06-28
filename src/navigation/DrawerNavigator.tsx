import { createDrawerNavigator } from '@react-navigation/drawer'
import AppStackNavigator from './AppStackNavigator'
import TodayScreen from '../screens/today-screen'
import CategoriesScreen from '../screens/categories-screen'
import GroupListScreen from '../screens/expense-manager/group-list-screen'
import MyDrawer from '../components/drawer/MyDrawer'
import CreateGroup from '../screens/expense-manager/create-group-screen'
import HomeScreen from '../screens/home-screen'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
    drawerContent={
        props=>(
            <MyDrawer props={props} />
        )

    } >
      <Drawer.Screen name="Home" component={HomeScreen} options={{headerShown:false}}
      />
      <Drawer.Screen name="Groups" component={GroupListScreen} options={{headerShown:false}} />
      <Drawer.Screen name="CreateGroup" component={CreateGroup} options={{headerShown:false}}
 />
      
      
    </Drawer.Navigator>
  )
}

export default DrawerNavigator