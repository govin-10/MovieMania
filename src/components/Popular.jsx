import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PopularPost from './PopularPost';

const Popular = ({api}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(api);
        const receivedData = await resp.data;
        const moviesList = receivedData.results;
        setMovies(moviesList);
        // console.log(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.popularContainer}>
      <Text style={styles.headerTitle}>Popular</Text>
      {movies.length > 0 ? (
        <FlatList
          data={movies}
          renderItem={({item}) => <PopularPost popularMovies={item} />}
          style={styles.flatList}
          numColumns={2}
        />
      ) : (
        <View>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  popularContainer: {
    marginTop: 30,
  },
  headerTitle: {
    fontSize: 35,
    marginVertical: 20,
    color: 'black',
    fontWeight: '600',
  },
  flatList: {
    width: Dimensions.get('screen').width,
  },
});
