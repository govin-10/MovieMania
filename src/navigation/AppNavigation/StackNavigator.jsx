import {createStackNavigator} from '@react-navigation/stack';
import {MovieScreen, ProfileScreen} from '../../screens/Main';

const StackNav = createStackNavigator();

const StackNavigation = () => {
  return (
    <StackNav.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <StackNav.Screen name="Home" component={MovieScreen} />
      <StackNav.Screen name="Profile" component={ProfileScreen} />
    </StackNav.Navigator>
  );
};

export default StackNavigation;
