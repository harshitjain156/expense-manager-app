import { createDrawerNavigator } from '@react-navigation/drawer'
import AppStackNavigator from './app-stack-navigator'
import TodayScreen from '../screens/today-screen'
import CategoriesScreen from '../screens/categories-screen'
import GroupListScreen from '../screens/expense-manager/group-list-screen'
import MyDrawer from '../components/drawer/my-drawer'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
    drawerContent={
        props=>(
            <MyDrawer props={props} />
        )

    } >
      <Drawer.Screen name="HomeStack" component={AppStackNavigator} options={{headerShown:false}}
      />
      <Drawer.Screen name="Groups" component={GroupListScreen} options={{headerShown:false}}
 />
      
    </Drawer.Navigator>
  )
}

export default DrawerNavigator