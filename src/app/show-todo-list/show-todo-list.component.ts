import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-show-todo-list',
  templateUrl: './show-todo-list.component.html',
  styleUrls: ['./show-todo-list.component.css']
})
export class ShowTodoListComponent implements OnInit {
  tasksList: Array<Task> = [];

  constructor(private taskService: TasksService) {
    this.taskService.getTaskListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks;
    });
  }

  ngOnInit() {}

  remove(task: Task) {
    this.taskService.remove(task);
  }
  done(task: Task) {
    task.end = new Date();
    this.taskService.done(task);
  }
  getColor(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
}
