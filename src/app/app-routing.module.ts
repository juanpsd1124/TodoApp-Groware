import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAddComponent } from './tasks-components/task-add/task-add.component';
import { TaskListComponent } from './tasks-components/task-list/task-list.component';

const routes: Routes = [
  {
    path: 'new-task',
    component: TaskAddComponent
  },
  {
    path: 'tasks-list',
    component: TaskListComponent 
  },
  {
    path: '**',
    redirectTo: 'tasks-list'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
