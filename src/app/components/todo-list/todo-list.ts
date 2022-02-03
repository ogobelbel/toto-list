import {Component} from '@angular/core';
import {TodoListService} from "./todo-list.service";
import {Task} from "../task/task.interfaces";
import {OnInit} from "@angular/core"

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.html',
  styleUrls : ['./todo-list.scss']
})

export class TodoListComponent implements OnInit{
  tasks!: Task[];
  constructor(public todoListService: TodoListService) {}

  ngOnInit() {
    this.tasks = this.todoListService.todoList;
  }
}
