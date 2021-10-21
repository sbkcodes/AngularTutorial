import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      console.log(tasks);
      this.tasks = tasks;
    });
  }

  //add method
  addTask(task: Task) {
    console.log('parent tasks addTask', task);
    // call service method
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }
  // update
  toggleTask(task: Task) {
    console.log('parent toggleTask', task);
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
  // delete
  deleteTask(task: Task) {
    console.log('parent deleteTask', task);
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
}
