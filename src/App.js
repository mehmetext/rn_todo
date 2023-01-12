import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Add from './components/Add';
import store from './store';
import {Provider} from 'react-redux';
import List from './components/List';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header />
        <List />
        <Add />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    flex: 1,
  },
});
