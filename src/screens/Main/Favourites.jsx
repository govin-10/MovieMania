import {Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {_logoutFromGoogle} from '../../config/firebase/GoogleSignIn';

const Favourites = () => {
  const handleLogout = async () => {
    await _logoutFromGoogle();
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
