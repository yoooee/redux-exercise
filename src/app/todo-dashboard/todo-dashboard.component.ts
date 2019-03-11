import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from "../store/todo.reducers";
import { CLEAR_TODOS } from '../store/todo.actions';
import { Observable } from 'rxjs';
import { TodoService } from "../todo.service";

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent {
  todos: number;
  lastUpdate;

  constructor(private service: TodoService, private ngRedux: NgRedux<AppState>) {
    this.todos = service.getTodos().length;

    service.todoAdded.subscribe(() => {
      this.todos++;
      this.lastUpdate = new Date();
    });

    service.todoRemoved.subscribe(() => {
      this.todos--;
      this.lastUpdate = new Date();
    });

    service.todoToggled.subscribe(() => {
      this.lastUpdate = new Date();
    });

    service.todosCleared.subscribe(() => {
      this.todos = 0;
      this.lastUpdate = new Date();
    });
  }

  clearTodos() {
    this.ngRedux.dispatch({ type: CLEAR_TODOS });
    this.service.clearTodos();
  };
}
