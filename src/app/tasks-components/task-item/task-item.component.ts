import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as actions from '../task-actions';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit{

  @Input() task!: Task

  taskNameInput!:       FormControl
  taskDescriptionInput!:FormControl
  taskOwnerInput!:      FormControl
  taskDurationInput!:   FormControl
  taskStatusInput!:     FormControl

  editing: boolean = false;
  router: any;

  constructor(private store: Store<Task>,
              private toastrSVC: ToastrService) {
  }

  ngOnInit(): void {
    this.taskNameInput = new FormControl( this.task.taskName );
    this.taskDescriptionInput = new FormControl( this.task.description );
    this.taskOwnerInput = new FormControl ( this.task.owner );
    this.taskDurationInput = new FormControl ( this.task.duration );
    this.taskStatusInput = new FormControl ( this.task.status );    
  }

  editTask(){
    this.editing = true;
    this.taskNameInput.setValue( this.task.taskName )
    this.taskDescriptionInput.setValue( this.task.description )
    this.taskOwnerInput.setValue( this.task.owner )
    this.taskDurationInput.setValue( this.task.duration)
    this.taskStatusInput.setValue( this.task.status ) 
    }

  saveTask(){
    this.editing = false;

    if ( this.taskNameInput.invalid )

    if( (this.taskNameInput.value        == this.task.taskName)     &&  
        (this.taskDescriptionInput.value == this.task.description)  &&
        (this.taskOwnerInput.value       == this.task.owner)        &&
        (this.taskDurationInput.value    == this.task.duration)     &&
        (this.taskStatusInput.value      == this.task.status)
    ){this.toastrSVC.warning( 'Los datos de formulario son iguales')
      return;
    }

    this.store.dispatch( 
      actions.editTask( {  id: this.task.id, 
                           taskName: this.taskNameInput.value,
                           description: this.taskDescriptionInput.value,
                           owner: this.taskOwnerInput.value,
                           duration: this.taskDurationInput.value,
                           status: this.taskStatusInput.value } ) )

    this.toastrSVC.success( 'La tarea ha sido modificada')
  }

  deleteTask(){
    this.editing = false;
    this.store.dispatch(
      actions.deleteTask( {id: this.task.id })
    )
    this.toastrSVC.success( 'La tarea ha sido eliminada')
  }

  cancelEdit(){
    this.editing = false;
    this.toastrSVC.warning( 'La edicion de la tarea ha sido cancelada')
  }

}
