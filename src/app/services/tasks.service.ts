import { HttpService } from './http.service';
import { Task } from './../model/task';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TasksService {
  private taskListObs = new BehaviorSubject<Array<Task>>([]);

  constructor(private httpService: HttpService) {
    this.httpService.getTask().subscribe(list => {
      this.taskListObs.next(list);
    });
  }

  addToList(task: Task) {
    const list = this.taskListObs.getValue();
    list.push(task);
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
    this.taskListObs.next(taskList);
  }

  getTaskListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }
  saveTaskInDb() {
    this.httpService.saveTasks(this.taskListObs.getValue());
    this.httpService.getTask().subscribe(list => {
      this.taskListObs.next(list);
    });
  }
}
