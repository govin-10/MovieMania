import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {_logoutFromGoogle} from '../../config/firebase/GoogleSignIn';
import {useAuth} from '../../context/AuthContext';
import {useNavigation} from '@react-navigation/native';

const Favourites = () => {
  const navigation = useNavigation();
  const {setUser} = useAuth();
  const handleLogout = () => {
    _logoutFromGoogle();
  };
  return (
    <View>
      <Text>Favourites</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({});
