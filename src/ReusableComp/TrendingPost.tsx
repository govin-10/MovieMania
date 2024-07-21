import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import {MovieType, TVShowType} from '../types';

interface trendingPostProps {
  trendingMovies?: MovieType;
  trendingTV?: TVShowType;
}

const {width, height} = Dimensions.get('window');

const TrendingPost: React.FC<trendingPostProps> = ({
  trendingMovies,
  trendingTV,
}) => {
  const {
    banner,
    backgroundImage,
    movieInfo,
    movieTitle,
    layer,
    movieYear,
    imdb,
  } = styles;

  const backdropPath = trendingMovies
    ? trendingMovies.backdrop_path
    : trendingTV?.backdrop_path;

  const title = trendingMovies
    ? trendingMovies.title
    : trendingTV?.original_name;
  const Rel_date = trendingMovies
    ? trendingMovies.release_date
    : trendingTV?.first_air_date;
  const voteAverage = trendingMovies
    ? trendingMovies.vote_average
    : trendingTV?.vote_average;

  return (
    <View style={banner}>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w400${backdropPath}`,
        }}
        borderRadius={10}
        style={backgroundImage}>
        <View style={layer}></View>
      </ImageBackground>
      <View style={movieInfo}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',

            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1}}>
            <Text style={movieTitle}>{title}</Text>
            <Text style={movieYear}>{new Date(Rel_date).getFullYear()}</Text>
          </View>
          <Text style={imdb}>Imdb {voteAverage?.toString()}</Text>
        </View>
      </View>
    </View>
  );
};

export default TrendingPost;

const styles = StyleSheet.create({
  banner: {
    width,
    height: height * 0.25,
    // paddingHorizontal: width * 0.02,
    alignItems: 'center',
    paddingHorizontal: width * 0.03,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'relative',
    // opacity: 0.8,
  },
  layer: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: 'black',
    opacity: 0.5,
  },
  movieInfo: {
    position: 'relative',
    bottom: 80,
    left: 0,
    width: '100%',
    paddingHorizontal: 5,
  },
  movieTitle: {
    color: 'white',
    opacity: 1,
    fontSize: 25,
    fontWeight: 'bold',
  },
  movieYear: {color: 'white', fontSize: 20},
  imdb: {
    backgroundColor: 'orange',
    alignSelf: 'flex-start',
    padding: 5,
  },
});
