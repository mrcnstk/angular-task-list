import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask = '';
  taskList: Array<string> = [];
  doneList: Array<string> = [];
  info = '';

  add() {
    if (this.newTask === '') {
      this.info = 'Wprowadź nazwę zadania';
      return;
    }
    this.taskList.push(this.newTask);
    this.newTask = '';
    this.info = '';
    console.log(this.taskList);
  }

  remove(task: string) {
    this.taskList = this.taskList.filter(e => e !== task);
  }

  done(task: string) {
    this.doneList.push(task);
    this.remove(task);
  }
}
