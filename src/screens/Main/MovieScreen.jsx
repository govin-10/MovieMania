import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {_logoutFromGoogle} from '../../config/firebase/GoogleSignIn';
import PageLayout from '../../components/PageLayout';
import MoviePage from '../../pages/MoviePage';

const MovieScreen = () => {
  // const userInfo = async () => {
  //   const user = await AsyncStorage.getItem('user');
  //   const userfromauth = auth().currentUser;
  //   console.log('uu', userfromauth);
  //   console.log('uus', user);
  // };
  // userInfo();
  // const logout = () => {
  //   _logoutFromGoogle();
  // };
  return (
    <ScrollView style={styles.MovieContainer}>
      <PageLayout children={<MoviePage />} />
    </ScrollView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  MovieContainer: {
    flex: 1,
  },
});
