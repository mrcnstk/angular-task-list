import { TasksService } from './../services/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-done-list',
  templateUrl: './show-done-list.component.html',
  styleUrls: ['./show-done-list.component.css']
})
export class ShowDoneListComponent implements OnInit {
  ChildDoneList = [];

  constructor(private taskService: TasksService) {
    this.taskService.getDoneListObs().subscribe((tasks: Array<string>) => {
      this.ChildDoneList = tasks;
    });
  }

  ngOnInit() {}
}
