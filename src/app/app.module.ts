import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { ShowTodoListComponent } from './show-todo-list/show-todo-list.component';
import { ShowDoneListComponent } from './show-done-list/show-done-list.component';
import { TasksService } from './services/tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ShowTodoListComponent,
    ShowDoneListComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule {}
