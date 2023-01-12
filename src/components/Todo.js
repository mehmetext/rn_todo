import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {deleteTodoD, toggleDoneD} from '../store/dispatch';

export default function Todo({todo}) {
  return (
    <TouchableOpacity
      onLongPress={() => {
        deleteTodoD(todo.id);
      }}
      onPress={() => {
        toggleDoneD(todo.id);
      }}>
      <View style={todo.done ? styles.containerDone : styles.container}>
        <Text style={todo.done ? styles.textDone : styles.text}>
          {todo.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    padding: 10,
    margin: 5,
    borderRadius: 6,
  },
  containerDone: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 10,
    margin: 5,
    borderRadius: 6,
  },
  text: {
    color: 'white',
  },
  textDone: {
    color: '#333',
    textDecorationLine: 'line-through',
  },
});
