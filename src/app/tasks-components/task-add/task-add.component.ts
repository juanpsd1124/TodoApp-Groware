import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent {

  taskForm: FormGroup = this.fb.group({
    name: ['', []],
    description: ['', []],
    owner:['', []],
    duration:[0, []],
    status:['', []]
  })

  constructor(private router: Router,
              private fb: FormBuilder){}

  crear(){
    console.log(this.taskForm.value)
    // this.router.navigate(['/tasks-list'])

  }

  cancelar(){
    this.router.navigate(['/tasks-list'])
  }


}
