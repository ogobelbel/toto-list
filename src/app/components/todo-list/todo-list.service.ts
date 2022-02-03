import {Injectable} from '@angular/core';
import {Task} from '../task/task.interfaces'
import {HttpClient} from "@angular/common/http";
import {first, pipe, take} from "rxjs";

@Injectable({providedIn: 'root'})
export class TodoListService {
  todoList: Task[] = [];
  constructor() {
    this.todoList = this.getFromLocalStorage();
  }

  addTask(task: Task){
    this.todoList.push(task);
    this.updateLocalStorage();
  }

  deleteTask(taskID: number){
    const taskIndex = this.todoList.findIndex(todo => todo.id === taskID);
    this.todoList.splice(taskIndex, 1);
    this.updateLocalStorage();
  }

  changeTaskStatus(taskId: number) {
    const taskIndex = this.todoList.findIndex(todo => todo.id === taskId);
    this.todoList[taskIndex].isCompleted = !this.todoList[taskIndex].isCompleted;
    this.updateLocalStorage();
  }

  getFromLocalStorage() {
    const todos = window.localStorage.getItem('todos') || '[]';
    console.log(JSON.parse(todos))
    return JSON.parse(todos);
  }

  updateLocalStorage() {
    window.localStorage.setItem('todos', JSON.stringify(this.todoList));
  }
}
