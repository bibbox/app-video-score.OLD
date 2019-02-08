import { ActionReducerMap } from '@ngrx/store';

import * as TaskReducers from './task.reducer';
import * as TaskAPIReducers from './task-api.reducer';

export const taskreducers: ActionReducerMap<any> = {
    tasks:    TaskReducers.reducer,
    tasksapi: TaskAPIReducers.reducer
};
