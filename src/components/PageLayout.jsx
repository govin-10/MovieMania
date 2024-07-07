import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAuth} from '../context/AuthContext';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const PageLayout = ({children}) => {
  const navigation = useNavigation();

  const {layoutContainer, header, imageBox, image, searchBox} = styles;

  const {user} = useAuth();

  return (
    <View style={layoutContainer}>
      <View style={header}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <View style={imageBox}>
            <Image source={{uri: user.photoURL}} style={image} />
          </View>
        </TouchableOpacity>
        <TextInput style={searchBox} placeholder="Search" />
      </View>
      {children}
    </View>
  );
};

export default PageLayout;

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    padding: 15,
  },
  imageBox: {
    height: 40,
    width: 40,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 30,
  },
  searchBox: {
    flex: 0.9,
    borderWidth: 1,
    borderRadius: 40,
    height: 40,
    paddingHorizontal: 20,
  },
});
