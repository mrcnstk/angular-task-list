import { Task } from './../model/task';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TasksService {
  private taskList: Array<Task> = [];
  private doneList: Array<Task> = [];

  private taskListObs = new BehaviorSubject<Array<Task>>([]);
  private doneListObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.taskList = [
      { name: 'Śniadanie', created: new Date() },
      { name: 'Sprzątanie mieszkania', created: new Date() },
      { name: 'Kodowanie', created: new Date() },
      { name: 'Bieganie', created: new Date() },
      { name: 'Ćwiczenia', created: new Date() }
    ];
    this.taskListObs.next(this.taskList);
  }

  addToList(task: Task) {
    this.taskList.push(task);
    this.taskListObs.next(this.taskList);
  }
  addToDone(task: Task) {
    this.doneList.push(task);
    this.doneListObs.next(this.doneList);
  }
  done(task: Task) {
    this.doneList.push(task);
    this.remove(task);
    this.doneListObs.next(this.doneList);
  }
  remove(task: Task) {
    this.taskList = this.taskList.filter(e => e !== task);
    this.taskListObs.next(this.taskList);
  }

  getTaskListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }
  getDoneListObs(): Observable<Array<Task>> {
    return this.doneListObs.asObservable();
  }
}
