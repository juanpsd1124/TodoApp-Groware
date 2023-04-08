import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './task-item/task-item.component';
import { MaterialModule } from '../shared/modules/material/material.module';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [TaskItemComponent, TaskAddComponent, TaskListComponent,],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    TaskAddComponent,
    TaskItemComponent
  ]
})
export class TasksComponentsModule { }
