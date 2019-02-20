import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Document } from './document.model';
import { DocumentActions, DocumentActionTypes } from './document.actions';


export interface State  {
    content: any;
 }


 export const initialState: State = {
  content: null
};


export function reducer(
  state = initialState,
  action: DocumentActions
  ): State {
  switch (action.type) {

    case DocumentActionTypes.LoadDocument: {
      return {
        content: action.payload.document
            };
      return state;
    }
    case DocumentActionTypes.ClearDocument: {
      return {
        content: null
            };
      return state;
    }
    default:
      return state;
  }

}

