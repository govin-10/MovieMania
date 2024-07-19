import {StyleSheet, ScrollView, Text} from 'react-native';
import React from 'react';
import {_logoutFromGoogle} from '../../config/firebase/GoogleSignIn';
import PageLayout from '../../components/PageLayout';
import MoviePage from '../../pages/MoviePage';

const MovieScreen = () => {
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
