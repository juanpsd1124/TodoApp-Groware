import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from '../models/task.model';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit{

  tasks: Task[] = [];
  taskArr = this.store.select('task')

  constructor( private store: Store< { task: Task[] }  > ) {
  }

  ngOnInit(): void{

    console.log(this.taskArr)

    this.store.select('task').subscribe ( task => { 
      this.tasks = task;
      localStorage.setItem("tasklist", JSON.stringify(task));
      //console.log(this.tasks)
    } );

   };

}
