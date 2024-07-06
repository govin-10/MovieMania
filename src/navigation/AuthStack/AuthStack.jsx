import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, SignupScreen} from '../../screens/Auth';

const AuthStack = createStackNavigator();

const AuthStackNav = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNav;
