import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WEB_CLIENT_ID} from '@env';

GoogleSignin.configure({
  offlineAccess: false,
  webClientId: WEB_CLIENT_ID,
  scopes: ['profile', 'email'],
});

export const _signInWithGoogle = async () => {
  try {
    await GoogleSignin.signOut();

    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const signedInUser = await auth().signInWithCredential(googleCredential);
    await AsyncStorage.setItem('user', JSON.stringify(signedInUser.user));
    return signedInUser;
  } catch (error) {
    console.log('Google sign in error: ', error);
  }
};

export const _logoutFromGoogle = async () => {
  try {
    console.log('singout initated');
    await auth().signOut();
    await GoogleSignin.signOut();

    await AsyncStorage.removeItem('user');
    console.log('singout completed');
  } catch (error) {
    console.log('Error signing out: ', error);
  }
};
