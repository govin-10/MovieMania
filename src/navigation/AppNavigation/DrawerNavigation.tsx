import {createDrawerNavigator} from '@react-navigation/drawer';
import {ProfileScreen} from '../../screens/Main';
import BottomNavigation from './BottomNavigation';
import CustomDrawerContent from '../../components/CustomDrawerContent';
import {MainDrawerParamList} from '../../types';

const DrawerNav = createDrawerNavigator<MainDrawerParamList>();

const DrawerNavigation = () => {
  return (
    <DrawerNav.Navigator
      useLegacyImplementation={false}
      drawerContent={props => <CustomDrawerContent {...props} />}
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
