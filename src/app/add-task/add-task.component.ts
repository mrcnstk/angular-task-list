import { Task } from './../model/task';
import { TasksService } from './../services/tasks.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { stringify } from '@angular/core/src/util';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  addForm: FormGroup;

  constructor(
    private taskService: TasksService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.addForm = this.initForm();
  }
  initForm() {
    return new FormGroup({
      taskName: new FormArray([new FormControl(null, Validators.required)])
    });
  }
  add() {
    const tasksList = this.createTaskList();
    this.taskService.addToList(tasksList);
    this.addForm = this.initForm();
  }
  addField() {
    const arr = this.addForm.get('taskName') as FormArray;
    arr.push(new FormControl(null, Validators.required));
  }
  createTaskList(): Array<Task> {
    const taskList = new Array<Task>();
    const taskArr = this.addForm.get('taskName').value as [string];
    taskArr.forEach(taskName => {
      const task = {
        name: taskName,
        userId: this.authService.user.uid,
        created: new Date().toLocaleString(),
        isDone: false
      };
      taskList.push(task);
    });
    return taskList;
  }
}
