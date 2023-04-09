import { Action, createReducer, on } from '@ngrx/store';
import { Task } from './models/task.model';
import { createTask, deleteTask, editTask } from './task-actions';


export const initialState: Task[] = [
  new Task('Hacer la cena',
          'Hacerla lo mejor que se pueda',
          'Juan Posada',
          1,
          "Iniciada"),
  new Task('Hacer la cena',
          'Hacerla lo mejor que se pueda',
          'Juan Posada',
          1,
          "En Progreso"),

  new Task('Hacer la cena',
        'Hacerla lo mejor que se pueda',
    'Juan Posada',
    1,
    "Terminada"),

  new Task('Hacer la cena',
    'Hacerla lo mejor que se pueda',
    'Juan Posada',
    1,
    "Terminada"),
  
    new Task('Hacer la cena',
    'Hacerla lo mejor que se pueda',
    'Juan Posada',
    1,
    "Terminada"),

    new Task('Hacer la cena',
    'Hacerla lo mejor que se pueda',
    'Juan Posada',
    1,
    "Terminada")
];

const _taskReducer = createReducer(
  initialState,
  //Create Task Reducer
  on( createTask, (state, { taskName, description, owner, duration, status }) => 
  [...state, new Task( taskName, description, owner, duration, status ) ]  
  ),


  // Edit Task Reducer
  on( editTask, ( state, { id, taskName, description, owner, duration, status } ) => {
    return state.map( task => {

      if( task.id === id ){
        return { ...task, 
                  taskName, 
                  description, 
                  owner, 
                  duration, 
                  status 
                }
      } else {
          return task;
      }
    });
  }),

  on ( deleteTask, ( state, { id } ) =>  
      state.filter( task => task.id !== id ) 
  ),




);


  // Delete Task Reducer

  

  


export function taskReducer(state:any, action:any){

  return _taskReducer(state, action);
}






