import { Component, OnInit } from '@angular/core';
import { TodoService } from "../todo.service";
import { NgRedux } from "@angular-redux/store";
import { AppState } from "../store/todo.reducers";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../store/todo.actions";
import { Observable } from "rxjs";
import { Todo } from "../todo.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoListState: Observable<{todoList: Array<Todo>}>;
  // Read the comment in TodoService
  constructor(private service: TodoService, private ngRedux: NgRedux<AppState>) {
  }

  ngOnInit() {
    this.todoListState = this.ngRedux.select('todoList');
  }

  addTodo(input) {
    if (!input.value) return;
    this.ngRedux.dispatch({ type: ADD_TODO, title: input.value });

    input.value = '';
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
    //this.service.toggleTodo(todo);
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
  }
}
