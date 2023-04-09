import { createAction, props } from "@ngrx/store";

export const createTask = createAction(
    '[TASK] Create Task',
    props<{ taskName: string, description: string, owner: string, duration: number, status: string}>()
);

export const editTask = createAction(
    '[TASK] Edit Task',
    props<{
        id:number,
        taskName: string,
        description: string,
        owner: string,
        duration: number,
        status:string
    }>()
);

export const deleteTask = createAction(
    '[TASK] Delete Task',
    props<{ id:number }>()
);

export const setLocalStorage = createAction(
    '[TASK] Set Local Storage',

)


