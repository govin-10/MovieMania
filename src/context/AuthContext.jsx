import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {ActivityIndicator} from 'react-native';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.stringify(storedUser));
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
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
