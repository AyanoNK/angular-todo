import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FillTodoService } from './services/fill-todo.service';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TodoItemComponent, TodoFormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [FillTodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
