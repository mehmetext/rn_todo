import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Header from './components/Header';
import Add from './components/Add';

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleAdd = todo => {
    console.log('Ekle:', todo);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={{flex: 1}} />
      <Add add={handleAdd} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    flex: 1,
  },
});
