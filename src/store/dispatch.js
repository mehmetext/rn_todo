import store from '.';
import {add, deleteTodo, toggleDone} from './todos';

export function addD(todo) {
  store.dispatch(add(todo));
}

export function toggleDoneD(id) {
  store.dispatch(toggleDone(id));
}

export function deleteTodoD(id) {
  store.dispatch(deleteTodo(id));
}
