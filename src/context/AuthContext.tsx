import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useContext, useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {ActivityIndicator} from 'react-native';
import {AuthContextType, AuthProviderProps} from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();

    const unsubscribe = auth().onAuthStateChanged(async user => {
      if (user) {
        setUser(user);
        await AsyncStorage.setItem('user', JSON.stringify(user));
      } else {
        setUser(null);
        await AsyncStorage.removeItem('user');
      }
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return <ActivityIndicator />; // Or some loading spinner
  }

  return (
    <AuthContext.Provider value={{user, setUser, loading, setLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType | undefined => {
  const context = useContext(AuthContext);

  if (!context) {
    console.log('No initialized context');
  }

  return context;
};
