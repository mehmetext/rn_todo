import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import Todo from './Todo';
import {useTodos} from '../store/todos';

export default function List() {
  const {todos} = useTodos();

  const renderItem = ({item}) => <Todo todo={item} />;

  return (
    <FlatList style={styles.todoList} data={todos} renderItem={renderItem} />
  );
}

const styles = StyleSheet.create({
  todoList: {
    flex: 1,
    padding: 5,
  },
});
