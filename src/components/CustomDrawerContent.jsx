import React, {useEffect, useState} from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAuth} from '../context/AuthContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {_logoutFromGoogle} from '../config/firebase/GoogleSignIn';

const CustomDrawerContent = ({props}) => {
  const {user} = useAuth();

  const handleLogOut = async () => {
    await _logoutFromGoogle();
  };
  return (
    <DrawerContentScrollView {...props}>
      {user ? (
        <View style={styles.drawerContainer}>
          <View style={styles.userInfo}>
            <Image source={{uri: user.photoURL}} style={styles.profilePhoto} />
            <Text style={styles.userName}>{user.displayName}</Text>
          </View>

          <View style={styles.bottomSection}>
            <View style={styles.drawerMenu}>
              <DrawerItem
                {...props}
                label={'Profile'}
                icon={() => (
                  <MaterialIcons
                    name="account-circle"
                    size={30}
                    color="black"
                  />
                )}
                onPress={() => props.navigation.navigate('Profile')}
                labelStyle={styles.drawerMenuLabel}
                style={styles.drawerMenuItem}
              />
              <DrawerItem
                label={'Profile'}
                icon={() => (
                  <MaterialIcons
                    name="account-circle"
                    size={30}
                    color="black"
                  />
                )}
                labelStyle={styles.drawerMenuLabel}
                style={styles.drawerMenuItem}
              />
            </View>
            <TouchableOpacity
              onPress={handleLogOut}
              style={styles.logoutSection}>
              <MaterialIcons name="logout" size={25} />
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <ActivityIndicator />
      )}
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height - 50,
  },
  userInfo: {
    padding: 10,
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
  bottomSection: {
    flex: 1,
    justifyContent: 'space-between',
  },
  drawerMenu: {
    marginTop: 20,
    width: '100%',
  },
  drawerMenuLabel: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  drawerMenuItem: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  logoutSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
  },
  logoutText: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'black',
  },
});
