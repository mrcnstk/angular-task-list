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
    if (this.newTask === '') {
      this.info = 'Wprowadź nazwę zadania ';
      return;
    }
    this.taskService.addToList(this.newTask);
    this.newTask = '';
  }
}
