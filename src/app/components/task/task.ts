import {Component} from '@angular/core';
import {Input, Output,EventEmitter} from '@angular/core';
import {Task} from './task.interfaces'

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrls: ['./task.scss']
})

export class TaskComponent {
  @Input() task!: Task;
  @Output() taskStatusEmit = new EventEmitter<number>();
  @Output() taskDeleteEmit = new EventEmitter<number>();
}
