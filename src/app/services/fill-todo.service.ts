import { Injectable } from '@angular/core';
import { TodoItem } from '../types/todo.type';

@Injectable({
  providedIn: 'root',
})
export class FillTodoService {
  constructor() {}

  todoItemList: TodoItem[] = [
    { id: 1, name: 'Todo 1' },
    { id: 2, name: 'Todo 2' },
    { id: 3, name: 'Todo 3' },
    { id: 4, name: 'Todo 4' },
    { id: 5, name: 'Todo 5' },
    { id: 6, name: 'Todo 6' },
    { id: 7, name: 'Todo 7' },
    { id: 8, name: 'Todo 8' },
    { id: 9, name: 'Todo 9' },
    { id: 10, name: 'Todo 10' },
  ];

  addTodoItem(todoItem: string) {
    this.todoItemList.push({
      id: this.todoItemList.length + 1,
      name: todoItem,
    });
  }

  fillTodoItemList() {
    return this.todoItemList;
  }
}
