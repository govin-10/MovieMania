import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PageLayout from '../../ReusableComp/PageLayout';
import TVPage from '../../pages/TVPage';
import {useAuth} from '../../context/AuthContext';

const TVScreen: React.FC = () => {
  const {user} = useAuth() || {};
  console.log('uuu', user);
  return (
    <SafeAreaView style={styles.TVContainer}>
      <PageLayout>
        <TVPage />
      </PageLayout>
    </SafeAreaView>
  );
};

export default TVScreen;

const styles = StyleSheet.create({
  TVContainer: {
    flex: 1,
  },
});
