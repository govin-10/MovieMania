import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TMDB_API_KEY} from '@env';
import Trending from './Trending';
const MovieComponent = () => {
  const api = `https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDB_API_KEY}`;
  return (
    <View>
      <Trending api={api} />
    </View>
  );
};

export default MovieComponent;

const styles = StyleSheet.create({});
