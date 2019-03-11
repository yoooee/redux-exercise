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
          {id: id, isCompleted: false, ...action}
        ]
      };

    case TodoListActions.TOGGLE_TODO:

      return {
        ...state,
        todoList: [
          ...state.todoList.map(todo => {
            if(todo.id === action.id)
              return {...todo, isCompleted: !todo.isCompleted};
            else
              return todo;
          })
        ]
      };


    case TodoListActions.REMOVE_TODO:

      return {
        ...state,
        todoList: [
          ...state.todoList.filter((todo) => todo.id !== action.id)
        ]
      };

    case TodoListActions.CLEAR_TODOS:

      return {
        ...state,
        todoList: []
      };

    default:
      return state;
  };
}
