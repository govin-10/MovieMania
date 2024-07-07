import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TrendingPost from './TrendingPost';

const Trending = ({api}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(api);
        const receivedData = await resp.data;
        const moviesList = receivedData.results;
        setMovies(moviesList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text style={styles.header}>Trending</Text>
      {movies ? (
        <FlatList
          data={movies}
          renderItem={({item}) => <TrendingPost trendingMovies={item} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
        />
      ) : (
        <View>
          <Text>Loading</Text>
        </View>
      )}
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  flatList: {
    width: Dimensions.get('screen').width,
  },

  header: {
    color: 'black',
    fontSize: 35,
    fontWeight: '700',
    marginVertical: 20,
  },
});
