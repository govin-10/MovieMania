import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {AppDispatch, RootState} from '../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovie} from '../redux/store/slice/movieSlice';
import TrendingPost from '../ReusableComp/TrendingPost';
import PopularPost from '../ReusableComp/PopularPost';

const {height, width} = Dimensions.get('window');

const MoviePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const {trendingMovies, popularMovies, loading, error} = useSelector(
    (state: RootState) => state.fetchShows,
  );

  const FlatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchMovie());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        if (nextIndex < trendingMovies.length) {
          FlatListRef.current?.scrollToIndex({
            index: nextIndex,
            animated: true,
          });
          return nextIndex;
        } else {
          FlatListRef.current?.scrollToIndex({index: 0, animated: true});
          return 0;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [trendingMovies]);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView>
      {/* 
<FlatList
data={movies}
renderItem={({item}) => <TrendingPost trendingMovies={item} />}
horizontal
pagingEnabled
showsHorizontalScrollIndicator={false}
style={styles.flatList}
/>
*/}
      <Text style={styles.trendingHeader}>Trending Now...</Text>
      <View style={styles.trendingContainer}>
        <FlatList
          ref={FlatListRef}
          data={trendingMovies}
          renderItem={({item}) => <TrendingPost trendingMovies={item} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.popularContainer}>
        <Text style={styles.popularHeader}>Popular Movies</Text>
        <FlatList
          data={popularMovies}
          renderItem={({item}) => <PopularPost popularMovies={item} />}
          scrollEnabled={false}
          numColumns={2}
          style={styles.popularPost}
        />
      </View>
    </ScrollView>
  );
};

export default MoviePage;

const styles = StyleSheet.create({
  trendingContainer: {
    // flex: 1,
    alignItems: 'center',
  },
  trendingHeader: {
    fontSize: 30,
    color: 'black',
    fontWeight: '800',
    padding: 10,
  },
  popularContainer: {
    marginTop: height * 0.04,
    paddingHorizontal: 10,
  },
  popularHeader: {
    color: 'black',
    fontSize: 30,
    fontWeight: '800',
    marginBottom: height * 0.01,
  },
  popularPost: {
    width,
    marginBottom: height * 0.06,
  },
});
