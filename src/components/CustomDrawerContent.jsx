import React, {useEffect, useState} from 'react';
import {
  DrawerContent,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from '../context/AuthContext';
import {userInfo} from 'os';

const CustomDrawerContent = ({props}) => {
  const {user} = useAuth();
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContainer}>
      {user ? (
        <View>
          <View style={styles.userInfo}>
            <Image source={{uri: user.photoURL}} style={styles.profilePhoto} />
            <Text style={styles.userName}>{user.displayName}</Text>
          </View>
          <DrawerItemList {...props} />
        </View>
      ) : (
        <ActivityIndicator />
      )}
      {/* <DrawerContent {...props} /> */}
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: 'white',
    padding: 20,
  },
  userInfo: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingBottom: 20,
  },
  profilePhoto: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginVertical: 10,
  },
  userName: {
    textTransform: 'capitalize',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
