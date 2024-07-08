import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TMDB_API_KEY} from '@env';
import Trending from '../components/Trending';
import Popular from '../components/Popular';

const TVPage = () => {
  const trendingAPI = `https://api.themoviedb.org/3/trending/tv/day?api_key=${TMDB_API_KEY}`;
  const popularAPI = `https://api.themoviedb.org/3/tv/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`;

  const {moviepageContainer} = styles;

  return (
    <View style={moviepageContainer}>
      <Trending api={trendingAPI} />
      <Popular api={popularAPI} />
    </View>
  );
};

export default TVPage;

const styles = StyleSheet.create({
  moviepageContainer: {
    padding: 15,
    marginBottom: 50,
  },
});
