import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-show-todo-list',
  templateUrl: './show-todo-list.component.html',
  styleUrls: ['./show-todo-list.component.css']
})
export class ShowTodoListComponent implements OnInit {
  tasksList = [];

  constructor(private taskService: TasksService) {
    this.taskService.getTaskListObs().subscribe((tasks: Array<string>) => {
      this.tasksList = tasks;
    });
  }

  ngOnInit() {}

  remove(task: string) {
    this.taskService.remove(task);
  }
  done(task: string) {
    this.taskService.done(task);
  }
  getColor(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
}
