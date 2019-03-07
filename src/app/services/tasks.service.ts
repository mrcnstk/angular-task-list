import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TasksService {
  private taskList: Array<string> = [];
  private doneList: Array<string> = [];

  private taskListObs = new BehaviorSubject<Array<string>>(this.taskList);
  private doneListObs = new BehaviorSubject<Array<string>>(this.doneList);

  constructor() {
    this.taskList = [
      'Śniadanie',
      'Sprzątanie mieszkania',
      'Kodowanie',
      'Bieganie',
      'Ćwiczenia'
    ];
    this.taskListObs.next(this.taskList);
  }

  addToList(task: string) {
    this.taskList.push(task);
    this.taskListObs.next(this.taskList);
  }
  addToDone(task: string) {
    this.doneList.push(task);
    this.doneListObs.next(this.doneList);
  }
  done(task: string) {
    this.doneList.push(task);
    this.remove(task);
    this.doneListObs.next(this.doneList);
  }
  remove(task: string) {
    this.taskList = this.taskList.filter(e => e !== task);
    this.taskListObs.next(this.taskList);
  }

  getTaskListObs(): Observable<Array<string>> {
    return this.taskListObs.asObservable();
  }
  getDoneListObs(): Observable<Array<string>> {
    return this.doneListObs.asObservable();
  }
}
