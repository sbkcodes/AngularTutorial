import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter();
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onToggle(task: Task) {
    console.log('onToggle', task);
    this.onToggleTask.emit(task);
  }

  onDelete(task: Task) {
    console.log('onDelete', task);
    this.onDeleteTask.emit(task);
  }
}
