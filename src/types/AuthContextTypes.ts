import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {ReactNode} from 'react';

export interface AuthContextType {
  user: FirebaseAuthTypes.User | null;
  setUser: (user: FirebaseAuthTypes.User | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}
