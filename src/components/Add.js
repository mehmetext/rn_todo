import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function Add({add}) {
  const [todo, setTodo] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        value={todo}
        onChangeText={text => setTodo(text)}
        placeholder="Yapılacak..."
        placeholderTextColor={'rgba(255,255,255,0.5)'}
        style={styles.input}
      />
      <TouchableOpacity
        disabled={!(todo.trim() !== '')}
        onPress={() => {
          add(todo);
        }}>
        <View
          style={todo.trim() !== '' ? styles.button : styles.disabledButton}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.2)',
    color: 'white',
    paddingBottom: 10,
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  disabledButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
