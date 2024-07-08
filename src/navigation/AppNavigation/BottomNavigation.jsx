import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FavouriteScreen, TVScreen} from '../../screens/Main';
import StackNavigation from './StackNavigator';
import BottomTabIcons from 'react-native-vector-icons/MaterialIcons';

const BottomTab = createBottomTabNavigator();

const BottomNavigation = ({route}) => {
  console.log('route', route);
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name == 'Movies') iconName = 'local-movies';
          if (route.name == 'TV') iconName = 'tv';
          if (route.name == 'Favourites') iconName = 'favorite';

          return (
            <BottomTabIcons
              name={iconName}
              size={30}
              color={focused ? color : 'grey'}
            />
          );
        },

        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          height: 60,
          borderRadius: 20,
          marginHorizontal: 5,
          shadowOffset: {width: 10, height: 10},
          shadowColor: 'black',
          shadowOpacity: 0.9,
          shadowRadius: 10,
          elevation: 25,
        },
      })}>
      <BottomTab.Screen name="Movies" component={StackNavigation} />
      <BottomTab.Screen name="TV" component={TVScreen} />
      <BottomTab.Screen name="Favourites" component={FavouriteScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;
