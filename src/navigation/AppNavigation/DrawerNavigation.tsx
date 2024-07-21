import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigation from './BottomNavigation';
import CustomDrawerContent from '../../components/CustomDrawerContent';
import {MainDrawerParamList} from '../../types';
import {ProfileScreen} from '../../screens/Main';

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
