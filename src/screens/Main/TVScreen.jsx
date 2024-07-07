import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PageLayout from '../../components/PageLayout';
import {SafeAreaView} from 'react-native-safe-area-context';

const TVScreen = () => {
  return (
    <SafeAreaView style={styles.TVContainer}>
      <PageLayout />
    </SafeAreaView>
  );
};

export default TVScreen;

const styles = StyleSheet.create({
  TVContainer: {
    flex: 1,
  },
});
