import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FillTodoService } from './services/fill-todo.service';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [AppComponent, TodoItemComponent],
  imports: [BrowserModule],
  providers: [FillTodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
