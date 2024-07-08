import {
  createDrawerNavigator,
  DrawerContent,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {ProfileScreen} from '../../screens/Main';
import BottomNavigation from './BottomNavigation';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {_logoutFromGoogle} from '../../config/firebase/GoogleSignIn';
import CustomDrawerContent from '../../components/CustomDrawerContent';

const DrawerNav = createDrawerNavigator();

const DrawerNavigation = () => {
  const logout = () => {
    _logoutFromGoogle();
  };
  return (
    <DrawerNav.Navigator
      useLegacyImplementation={false}
      drawerContent={props => {
        return <CustomDrawerContent props={props} />;
      }}
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
