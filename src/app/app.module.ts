import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { ShowTodoListComponent } from './show-todo-list/show-todo-list.component';
import { ShowDoneListComponent } from './show-done-list/show-done-list.component';
import { TasksService } from './services/tasks.service';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { SortNamePipe } from './shared/sort-name.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ShowTodoListComponent,
    ShowDoneListComponent,
    CheckedDirective,
    DateDirective,
    TransformTaskPipe,
    SortNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TasksService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
