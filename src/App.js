import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Header from './components/Header';
import Add from './components/Add';
import Todo from './components/Todo';
import uuid from 'react-native-uuid';

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: uuid.v4(),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus massa at tortor venenatis, quis blandit lectus iaculis. Proin sodales suscipit urna, eget suscipit urna auctor at. Morbi efficitur urna sed eros ullamcorper rutrum. Integer efficitur, nibh sit amet fringilla sagittis, nunc eros interdum erat, eget mollis nulla nisl pretium nunc. Duis nec diam eget diam lobortis tempor. Ut fringilla quis tellus ut egestas. Ut auctor, erat eget facilisis ultricies, nisl enim tempor massa, id cursus ipsum lacus id neque.',
      done: true,
    },
    {id: uuid.v4(), text: 'Deneme Todo', done: false},
  ]);

  const handleAdd = todo => {
    setTodos([{id: uuid.v4(), text: todo, done: false}, ...todos]);
  };

  const handleToggleDone = id => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleDelete = id => {
    const newTodos = todos.filter(todo => todo.id !== id);

    setTodos(newTodos);
  };

  const renderItem = ({item}) => (
    <Todo
      toggleDone={handleToggleDone}
      handleDelete={handleDelete}
      todo={item}
    />
  );

  const activeCount = () => {
    const filtered = todos.filter(todo => !todo.done);
    return filtered.length;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header count={activeCount()} />
      <FlatList style={styles.todoList} data={todos} renderItem={renderItem} />
      <Add add={handleAdd} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    flex: 1,
  },
  todoList: {
    flex: 1,
    padding: 5,
  },
});
