import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {_logoutFromGoogle} from '../../config/firebase/GoogleSignIn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

const FeedScreen = () => {
  const userInfo = async () => {
    const user = await AsyncStorage.getItem('user');
    const userfromauth = auth().currentUser;
    console.log('uu', userfromauth);
    console.log('uus', user);
  };
  userInfo();
  const logout = () => {
    _logoutFromGoogle();
  };
  return (
    <View>
      <Text>FeedScreen</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <Text>Hi</Text>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({});
