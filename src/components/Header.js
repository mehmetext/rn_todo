import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTodos} from '../store/todos';

export default function Header() {
  const {todos} = useTodos();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Yapılacaklar</Text>
      <Text style={styles.count}>
        {todos.filter(todo => !todo.done).length}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').width * 0.1,
  },
  count: {
    color: 'orange',
    fontSize: Dimensions.get('window').width * 0.1,
  },
});
