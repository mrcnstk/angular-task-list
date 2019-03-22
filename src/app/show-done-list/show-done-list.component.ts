import { TasksService } from './../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-show-done-list',
  templateUrl: './show-done-list.component.html',
  styleUrls: ['./show-done-list.component.css']
})
export class ShowDoneListComponent implements OnInit {
  ChildDoneList: Array<Task> = [];

  constructor(private taskService: TasksService) {
    this.taskService.getTaskListObs().subscribe((tasks: Array<Task>) => {
      this.ChildDoneList = tasks.filter(t => t.isDone === true);
    });
  }

  ngOnInit() {}
}
