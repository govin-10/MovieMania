import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {fetchTV} from '../redux/store/slice/movieSlice';
import TrendingPost from '../ReusableComp/TrendingPost';
import PopularPost from '../ReusableComp/PopularPost';

const {height, width} = Dimensions.get('window');

const TVPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const {popularTV, trendingTV, loading, error} = useSelector(
    (state: RootState) => state.fetchShows,
  );

  useEffect(() => {
    dispatch(fetchTV());
  }, [dispatch]);

  const FlatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        if (nextIndex < trendingTV.length) {
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
  }, [trendingTV]);

  return (
    <ScrollView>
      <Text style={styles.trendingHeader}>Trending Now...</Text>
      <View style={styles.trendingContainer}>
        <FlatList
          ref={FlatListRef}
          data={trendingTV}
          renderItem={({item}) => <TrendingPost trendingTV={item} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.popularContainer}>
        <Text style={styles.popularHeader}>Popular Movies</Text>
        <FlatList
          data={popularTV}
          renderItem={({item}) => <PopularPost popularTV={item} />}
          scrollEnabled={false}
          numColumns={2}
          style={styles.popularPost}
        />
      </View>
    </ScrollView>
  );
};

export default TVPage;

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
