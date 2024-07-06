import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FeedScreen from '../../screens/Main/FeedScreen';

const DrawerNav = createDrawerNavigator();
const AppNavigator = () => {
  return <FeedScreen />;
};

export default AppNavigator;
