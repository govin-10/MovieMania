import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PageLayout from '../../ReusableComp/PageLayout';
import MoviePage from '../../pages/MoviePage';
const MovieScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PageLayout>
        <MoviePage />
      </PageLayout>
    </SafeAreaView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
