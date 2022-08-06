import { Component, OnInit } from '@angular/core';
import { FillTodoService } from '../services/fill-todo.service';
import { TodoItem } from '../types/todo.type';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  todoItem: string = '';

  constructor(public fillTodoService: FillTodoService) {}

  ngOnInit(): void {}

  addTodoItem() {
    this.fillTodoService.addTodoItem(this.todoItem);
  }
}
