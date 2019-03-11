import * as TodoListActions from './todo.actions';

import { Todo } from '../todo.model';

export interface AppState {
  todoList: Array<Todo>
}

export const initialState = {
  todoList: [ ]
}


export function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case TodoListActions.ADD_TODO:
      const id = state.todoList.length;

      return {
        ...state,
        todoList: [
          ...state.todoList,
          {id: id, isComplete: false, ...action}
        ]
      };

    case TodoListActions.REMOVE_TODO:
      const currentTodos = [...state.todoList];

      return {
        ...state,
        todoList: [
          ...currentTodos.filter((todo) => todo.id !== action.id)
        ]
      };

    case TodoListActions.CLEAR_TODOS:

      return {
        ...state,
        todoList: []
      };

    default:
      return state;
  }

}
