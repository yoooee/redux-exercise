//import { Injectable  } from '@angular/core';
import { Action } from 'redux';

import { Todo } from '../todo.model';

export const ADD_TODO = 'ADD_TODO';


//@Injectable()
//export class TodoListActions {
  //static ADD_TODO = 'ADD_TODO';

  //addTodo(todo): Action {
    //return {
      //type: TodoListActions.ADD_TODO,
      //payload: todo
    //};
  //}
//}

export class AddTodo implements Action {
  readonly type = ADD_TODO;

  constructor(public payload: Todo) { }
}

export type TodoListActions = AddTodo;
