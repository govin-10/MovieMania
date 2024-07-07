import {createDrawerNavigator} from '@react-navigation/drawer';
import {ProfileScreen} from '../../screens/Main';
import BottomNavigation from './BottomNavigation';

const DrawerNav = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <DrawerNav.Navigator
      useLegacyImplementation={false}
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
      }}>
      <DrawerNav.Screen
        name="Home"
        component={BottomNavigation}
        options={{
          drawerItemStyle: {display: 'none'},
        }}
      />
      <DrawerNav.Screen name="Profile" component={ProfileScreen} />
    </DrawerNav.Navigator>
  );
};

export default DrawerNavigation;
