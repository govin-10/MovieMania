import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {_signInWithGoogle} from '../../config/firebase/GoogleSignIn';
import {images} from '../../constants/ImagePath';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

const {height, width} = Dimensions.get('window');

const LoginScreen = () => {
  const signInWithGoogle = () => {
    _signInWithGoogle().then(data => {
      if (!data) {
        console.log('error in signing');
        return;
      }
      console.log('Sign in with google success');
      console.log(data);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={images.LoginHero} style={styles.loginHero} />
      </View>
      <View style={styles.heroTextSection}>
        <Text style={styles.browseText}>Browse</Text>
        <Text style={styles.defaultText}>your favourite</Text>
        <Text style={styles.movieText}>MOVIES & SHOWS</Text>
        <Text style={styles.defaultText}>seamlessly now!</Text>
      </View>

      <View style={styles.footer}>
        <GoogleSigninButton
          color="light"
          style={styles.loginButton}
          onPress={signInWithGoogle}
        />
        {/* <TouchableOpacity style={styles.loginButton} onPress={signInWithGoogle}>
          <Text style={styles.loginButtonText}>Continue with google</Text>
        </TouchableOpacity> */}
        <ImageBackground
          source={images.LoginBackground}
          style={styles.footerImage}></ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: height * 0.05,
    width: width,
    height: height * 0.35,
  },
  loginHero: {height: '100%', width: '100%'},
  heroTextSection: {
    width: width * 0.6,
  },

  browseText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  defaultText: {
    color: 'black',
    fontSize: 30,
  },
  movieText: {
    color: 'red',
    fontSize: 30,
  },
  loginButton: {
    width: width * 0.6,
    height: height * 0.07,
    position: 'absolute',
    top: 30,
    marginVertical: 20,
    zIndex: 99,
    // pos,
  },
  // loginButtonText: {
  //   color: '#fff',
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   padding: 15,
  // },
  footer: {
    flex: 1,
    width,
    position: 'relative',
    alignItems: 'center',
  },
  footerImage: {
    width: '100%',
    position: 'absolute',
    height: '100%',
    bottom: 0,
  },
  // footerBackground: {height: height * 0.5, width: '100%', position: 'absolute'},
});

export default LoginScreen;
