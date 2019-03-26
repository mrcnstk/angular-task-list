import { ShowDoneListComponent } from './show-done-list/show-done-list.component';
import { ShowTodoListComponent } from './show-todo-list/show-todo-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/todoTask',
    pathMatch: 'full'
  },
  {
    path: 'todoTask',
    component: ShowTodoListComponent
  },
  {
    path: 'doneTask',
    component: ShowDoneListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
