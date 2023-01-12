import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import uuid from 'react-native-uuid';

const slice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      {
        id: uuid.v4(),
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus massa at tortor venenatis, quis blandit lectus iaculis. Proin sodales suscipit urna, eget suscipit urna auctor at. Morbi efficitur urna sed eros ullamcorper rutrum. Integer efficitur, nibh sit amet fringilla sagittis, nunc eros interdum erat, eget mollis nulla nisl pretium nunc. Duis nec diam eget diam lobortis tempor. Ut fringilla quis tellus ut egestas. Ut auctor, erat eget facilisis ultricies, nisl enim tempor massa, id cursus ipsum lacus id neque.',
        done: true,
      },
      {id: uuid.v4(), text: 'Deneme Todo', done: false},
    ],
  },
  reducers: {
    add: (state, action) => {
      state.todos = [
        {
          id: uuid.v4(),
          text: action.payload,
          done: false,
        },
        ...state.todos,
      ];
    },
    toggleDone: (state, action) => {
      const newTodos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          todo.done = !todo.done;
        }
        return todo;
      });

      state.todos = newTodos;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const useTodos = () => useSelector(state => state.todos);

export const {add, toggleDone, deleteTodo} = slice.actions;

export default slice.reducer;
