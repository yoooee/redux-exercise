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
      const id = state.todoList.length + 1;

      return {
        ...state,
        todoList: [
            ...state.todoList,
          {id: id, ...action}
        ]
      };

    default:
      return state;
  }

}
