import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TMDB_API_KEY} from '@env';
import Trending from '../components/Trending';
import Popular from '../components/Popular';

const MoviePage = () => {
  const trendingAPI = `https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDB_API_KEY}`;
  const popularAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`;

  const {moviepageContainer} = styles;

  return (
    <View style={moviepageContainer}>
      <Trending api={trendingAPI} />
      <Popular api={popularAPI} />
    </View>
  );
};

export default MoviePage;

const styles = StyleSheet.create({
  moviepageContainer: {
    padding: 15,
  },
});
