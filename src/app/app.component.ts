import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskList: Array<string> = [];
  doneList: Array<string> = [];

  addToList(task: string) {
    this.taskList.push(task);
  }
  addToDone(task: string) {
    this.doneList.push(task);
  }
  done(task: string) {
    this.doneList.push(task);
    this.remove(task);
  }
  remove(task: string) {
    this.taskList = this.taskList.filter(e => e !== task);
  }
}
