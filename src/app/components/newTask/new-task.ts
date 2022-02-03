import {Component, EventEmitter} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Task} from '../task/task.interfaces'
import {Output} from '@angular/core';

@Component ({
  selector: 'app-new-task',
  templateUrl: './new-task.html',
  styleUrls: ['./new-task.scss']
})

export class NewTaskComponent {
  @Output() newTask = new EventEmitter<Task>();
  taskForm = new FormGroup({
    taskName: new FormControl(''),
    taskDescription: new FormControl('')
  });

  onFormSubmit() {
    const newTask: Task = {
      id: Date.now(),
      name: this.taskForm.controls['taskName'].value,
      description: this.taskForm.controls['taskDescription'].value,
      isCompleted: false
    };

    this.newTask.emit(newTask);
  }
}
