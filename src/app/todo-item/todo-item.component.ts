import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FillTodoService } from '../services/fill-todo.service';
import { TodoItem } from '../types/todo.type';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  todoItemList: TodoItem[] = [];

  constructor(public fillTodoService: FillTodoService) {}

  ngOnInit(): void {
    this.fillTodoItemList();
  }

  fillTodoItemList() {
    this.todoItemList = this.fillTodoService.fillTodoItemList();
  }
}
