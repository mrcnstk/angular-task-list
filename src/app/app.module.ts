import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
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
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './auth/login/login.component';

const config = {
  apiKey: 'AIzaSyCU69Kr0-NvJj5mSmWuWLDQLgVbJmOP8KI',
  authDomain: 'todo-list-ang.firebaseapp.com',
  databaseURL: 'https://todo-list-ang.firebaseio.com',
  projectId: 'todo-list-ang',
  storageBucket: 'todo-list-ang.appspot.com',
  messagingSenderId: '862361397925'
};

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ShowTodoListComponent,
    ShowDoneListComponent,
    CheckedDirective,
    DateDirective,
    TransformTaskPipe,
    SortNamePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [TasksService, HttpService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
