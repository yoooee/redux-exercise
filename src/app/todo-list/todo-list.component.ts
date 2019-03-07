import { Component } from '@angular/core';
import { TodoService } from "../todo.service";
import { NgRedux } from "@angular-redux/store";
import { AppState } from "../store/todo.reducers";
import { ADD_TODO } from "../store/todo.actions";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  // Read the comment in TodoService
  constructor(private service: TodoService, private ngRedux: NgRedux<AppState>) {
  }

  addTodo(input) {
    if (!input.value) return;

this.ngRedux.dispatch({ type: ADD_TODO, title: input.value });
    //this.service.addTodo(input.value);

    input.value = '';
  }

  toggleTodo(todo) {
    this.service.toggleTodo(todo);
  }

  removeTodo(todo) {
    this.service.removeTodo(todo);
  }
}
