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
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action
        ]
      };

    default:
      return state;
  }

}
