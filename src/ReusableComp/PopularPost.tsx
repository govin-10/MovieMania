import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import {MovieType, TVShowType} from '../types';

interface PopularPostProps {
  popularMovies?: MovieType;
  popularTV?: TVShowType;
}

const {width, height} = Dimensions.get('window');

const PopularPost: React.FC<PopularPostProps> = ({
  popularMovies,
  popularTV,
}) => {
  const {bannerContainer, backgroundImage, layer, movieInfo, movieTitle} =
    styles;

  const backdropPath = popularMovies
    ? popularMovies.backdrop_path
    : popularTV?.backdrop_path;

  const title = popularMovies ? popularMovies.title : popularTV?.original_name;

  return (
    <View style={bannerContainer}>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w400/${backdropPath}`,
        }}
        borderRadius={10}
        style={backgroundImage}>
        <View style={layer}></View>
      </ImageBackground>
      <View style={movieInfo}>
        <Text style={movieTitle}>{title}</Text>
      </View>
    </View>
  );
};

export default PopularPost;

const styles = StyleSheet.create({
  bannerContainer: {
    width: (width - 20) / 2 - 16,
    margin: 8,
  },
  backgroundImage: {
    width: '100%',
    height: 150,
    position: 'relative',
  },
  layer: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    opacity: 0.4,
  },
  movieInfo: {
    position: 'absolute',
    bottom: 5,
    padding: 5,
  },
  movieTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
