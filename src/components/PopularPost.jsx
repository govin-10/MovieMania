import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';

const PopularPost = ({popularMovies}) => {
  const {bannerContainer, backgroundImage, layer, movieInfo, movieTitle} =
    styles;
  return (
    <View style={bannerContainer}>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w400/${popularMovies.backdrop_path}`,
        }}
        borderRadius={10}
        style={backgroundImage}>
        <View style={layer}></View>
      </ImageBackground>
      <View style={movieInfo}>
        {popularMovies.title ? (
          <Text style={movieTitle}>{popularMovies.title}</Text>
        ) : (
          <Text style={movieTitle}>{popularMovies.name}</Text>
        )}
      </View>
    </View>
  );
};

export default PopularPost;

const styles = StyleSheet.create({
  bannerContainer: {
    width: (Dimensions.get('screen').width - 30) / 2 - 16,
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
