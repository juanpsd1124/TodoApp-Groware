import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Task } from '../models/task.model';
import * as actions from '../task-actions';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent {

  taskForm: FormGroup = this.fb.group({
    taskName: ['', [Validators.required, Validators.minLength(1)] ],
    description: ['', [Validators.required, Validators.minLength(1)] ],
    owner:['', [Validators.required, Validators.minLength(1)] ],
    duration:[0, [Validators.required]],
    status:['', [Validators.required]]
  })
  
  constructor(private router: Router,
              private fb: FormBuilder,
              private store: Store<Task>,
              private toastrSVC: ToastrService ){}
  crear(){
    if( this.taskForm.invalid ){
      this.toastrSVC.warning( 'Los datos de formulario son incorrectos')
      return;
    }

    this.store.dispatch( actions.createTask( { taskName : this.taskForm.value.taskName,
                                               description: this.taskForm.value.description,
                                               owner: this.taskForm.value.owner,
                                               duration: this.taskForm.value.duration,
                                               status: this.taskForm.value.status}  )  );

    this.router.navigate(['/tasks-list']);
    this.toastrSVC.success( 'La tarea ha sido creada')
    
  }

  cancelar(){
    this.router.navigate(['/tasks-list'])
  }

}
