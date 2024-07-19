import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PageLayout from '../../components/PageLayout';
import {SafeAreaView} from 'react-native-safe-area-context';
import TVPage from '../../pages/TVPage';
import {useAuth} from '../../context/AuthContext';

const TVScreen = () => {
  const {user} = useAuth();
  console.log('uuu', user);
  return (
    <ScrollView style={styles.TVContainer}>
      <PageLayout children={<TVPage />} />
    </ScrollView>
  );
};

export default TVScreen;

const styles = StyleSheet.create({
  TVContainer: {
    flex: 1,
  },
});
