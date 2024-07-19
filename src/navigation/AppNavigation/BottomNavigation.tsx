import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FavouriteScreen, MovieScreen, TVScreen} from '../../screens/Main';
import BottomTabIcons from 'react-native-vector-icons/MaterialIcons';
import {BottomTabsParamList} from '../../types';

const BottomTab = createBottomTabNavigator<BottomTabsParamList>();

const BottomNavigation: React.FC = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
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
      }}>
      <BottomTab.Screen
        name="Movies"
        component={MovieScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            return (
              <BottomTabIcons
                name="local-movies"
                size={30}
                color={focused ? 'blue' : 'gray'}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="TV"
        component={TVScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            return (
              <BottomTabIcons
                name="tv"
                size={30}
                color={focused ? 'blue' : 'gray'}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            return (
              <BottomTabIcons
                name="favorite"
                size={30}
                color={focused ? 'blue' : 'gray'}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;
