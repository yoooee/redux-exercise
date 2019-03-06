import * as TodoListActions from './todo.actions';

import { Todo } from '../todo.model';

export interface AppState {
  todoList: Array<Todo>
}

export const initialState = {
  todoList: [ ]
}


export function todoListReducer(state = initialState, action: TodoListActions.TodoListActions) {
  switch (action.type) {
    case TodoListActions.ADD_TODO:
      return state;
      //return {
        //...state,
        //todoList: [...state.todoList, action.payload]
      //};
    default:
      return state;
  }

}
