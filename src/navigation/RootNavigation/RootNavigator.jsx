import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AuthStack from '../AuthStack/AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../../context/AuthContext';
import AppNavigator from '../AppNavigation/AppNavigator';

const RootNavigator = () => {
  const {user} = useAuth();
  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
