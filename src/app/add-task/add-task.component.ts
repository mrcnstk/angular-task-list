import { Task } from './../model/task';
import { TasksService } from './../services/tasks.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  newTask = '';
  info = '';

  constructor(private taskService: TasksService) {}

  ngOnInit() {}

  add() {
    const task: Task = {
      name: this.newTask,
      created: new Date().toLocaleString(),
      isDone: false
    };
    if (task.name === '') {
      this.info = 'Wprowadź nazwę zadania ';
      return;
    }
    console.log(task);

    this.taskService.addToList(task);
    this.newTask = '';
  }
}
