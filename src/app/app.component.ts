import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = 'none';
  constructor(private taskService: TasksService) {}

  save() {
    this.show = 'block';
    this.taskService.saveTaskInDb();
  }
  infoColor(): string {
    return this.taskService.DatabaseSave === true ? 'green' : 'red';
  }
}
