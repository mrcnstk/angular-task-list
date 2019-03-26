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
  show = 'none';
  constructor(private taskService: TasksService) {
    this.taskService.getTaskListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks.filter(t => t.isDone === false);
    });
  }

  ngOnInit() {}

  remove(task: Task) {
    this.taskService.remove(task);
  }
  done(task: Task) {
    this.taskService.done(task);
  }
  getColor(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
  save() {
    this.show = 'block';
    this.taskService.saveTaskInDb();
  }
  infoColor(): string {
    return this.taskService.DatabaseSave === true ? 'green' : 'red';
  }
}
