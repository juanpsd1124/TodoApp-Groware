import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import * as actions from '../../src/app/tasks-components/task-actions';
import { Store } from '@ngrx/store';
import { Task } from './tasks-components/models/task.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todoGroware';

  constructor( private store: Store<Task>,){
  }

   ngOnInit(): void{

     const tasks: Task[] = localStorage.getItem("tasklist")? JSON.parse(localStorage.getItem("tasklist")!) : [];

    tasks.forEach(task => {

      this.store.dispatch( actions.createTask({...task}) )

    })

  //    this.store.dispatch( actions.createTask( { taskName : this.taskForm.value.taskName,
  //     description: this.taskForm.value.description,
  //     owner: this.taskForm.value.owner,
  //     duration: this.taskForm.value.duration,
  //     status: this.taskForm.value.status}  )  );
  //  }
  
}
  

}



