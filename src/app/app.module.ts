import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TaskComponent} from "./components/task/task";
import {NewTaskComponent} from "./components/new-task/new-task";
import {ReactiveFormsModule} from '@angular/forms';
import {TodoListComponent} from "./components/todo-list/todo-list";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    NewTaskComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
