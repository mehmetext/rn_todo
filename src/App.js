import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Header from './components/Header';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    flex: 1,
  },
});
