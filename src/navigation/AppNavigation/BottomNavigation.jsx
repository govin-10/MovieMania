import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FavouriteScreen, TVScreen} from '../../screens/Main';
import StackNavigation from './StackNavigator';

const BottomTab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen name="Movies" component={StackNavigation} />
      <BottomTab.Screen name="TV" component={TVScreen} />
      <BottomTab.Screen name="Favourites" component={FavouriteScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;
