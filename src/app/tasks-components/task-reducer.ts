import { Action, createReducer, on } from '@ngrx/store';
import { Task } from './models/task.model';
import { createTask, deleteTask, editTask } from './task-actions';


export const initialState: Task[] = [
  // new Task('Preparar el almuerzo',
  //         'Se debe preparar el almuerzo de toda la semana',
  //         'Juan Posada',
  //         2,
  //         "Iniciada"),


  // new Task('Pagar Servicios',
  //         'Se debe pagar todos los servicios antes de fecha de corte',
  //         'Juan Posada',
  //         1,
  //         "Terminada"),

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






