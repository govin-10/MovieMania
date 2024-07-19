import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {_signInWithGoogle} from '../../config/firebase/GoogleSignIn';

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
      <View style={styles.header}>{/* Logo can be placed here */}</View>
      <Text style={styles.welcomeText}>Welcome Back!</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={signInWithGoogle}>
        <Text style={styles.loginButtonText}>Sign in with google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  forgotPassword: {
    textAlign: 'right',
    marginBottom: 30,
    color: '#007BFF',
  },
  loginButton: {
    backgroundColor: '#000',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
