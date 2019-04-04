import { HttpService } from './http.service';
import { Task } from './../model/task';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class TasksService {
  DatabaseSave = false;
  private taskListObs = new BehaviorSubject<Array<Task>>([]);

  constructor(
    private httpService: HttpService,
    public angularFire: AngularFireAuth
  ) {
    angularFire.authState.subscribe(user => {
      if (user) {
        this.init();
      } else {
        this.taskListObs.next([]);
      }
    });
  }

  init() {
    this.httpService.getTask().subscribe(list => {
      this.taskListObs.next(list);
    });
  }
  savingStatus(status: boolean) {
    this.DatabaseSave = status;
  }

  addToList(task: Array<Task>) {
    const list = this.taskListObs.getValue().concat(task);
    this.taskListObs.next(list);
  }
  done(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.taskListObs.getValue();
    this.taskListObs.next(list);
  }
  remove(task: Task) {
    const taskList = this.taskListObs.getValue().filter(e => e !== task);
    this.httpService.deleteTask(task);
    this.taskListObs.next(taskList);
  }

  getTaskListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }
  saveTaskInDb() {
    this.savingStatus(false);
    this.httpService.saveTasks(this.taskListObs.getValue());
    this.httpService.getTask().subscribe(list => {
      this.taskListObs.next(list);
      this.savingStatus(true);
    });
  }
}
