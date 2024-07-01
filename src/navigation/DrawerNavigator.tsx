import {createDrawerNavigator} from '@react-navigation/drawer';
import {CreateGroup, GroupListScreen, HomeScreen} from '../screens';
import {MyDrawer} from '../components';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <MyDrawer props={props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Groups"
        component={GroupListScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="CreateGroup"
        component={CreateGroup}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
