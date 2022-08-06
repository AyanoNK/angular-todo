import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FillTodoService } from '../services/fill-todo.service';

export interface TodoItem {
  id: number;
  name: string;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  todoItemList: string[] = [];

  constructor(public fillTodoService: FillTodoService) {}

  ngOnInit(): void {
    this.fillTodoItemList();
  }

  fillTodoItemList() {
    this.todoItemList = this.fillTodoService
      .fillTodoItemList()
      .map((item: TodoItem) => `${item.id}: ${item.name}`);
  }
}
