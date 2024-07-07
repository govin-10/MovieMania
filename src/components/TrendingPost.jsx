import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';

const TrendingPost = ({trendingMovies}) => {
  const {banner, backgroundImage, movieInfo, movieTitle, layer} = styles;
  return (
    <View style={banner}>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w400/${trendingMovies.backdrop_path}`,
        }}
        borderRadius={10}
        style={backgroundImage}>
        <View style={layer}></View>
      </ImageBackground>
      <View style={movieInfo}>
        <Text style={movieTitle}>{trendingMovies.title}</Text>
      </View>
    </View>
  );
};

export default TrendingPost;

const styles = StyleSheet.create({
  banner: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  backgroundImage: {
    height: 200,
    width: Dimensions.get('window').width - 30,
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
    position: 'absolute',
    bottom: 10,
  },
  movieTitle: {
    color: 'white',
    opacity: 1,
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
  },
});
