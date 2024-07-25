import {createDrawerNavigator} from '@react-navigation/drawer';
import {CreateGroup, GroupListScreen, HomeScreen} from '../screens';
import {MyDrawer} from '../components';
import GroupNavigator from './GroupNavigator';
import { DrawerParamList, DrawerTabScreenProps } from './type';

const Drawer = createDrawerNavigator<DrawerParamList>();

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
        component={GroupNavigator}
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
