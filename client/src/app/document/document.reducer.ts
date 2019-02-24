import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Document } from './document.model';
import { DocumentActions, DocumentActionTypes } from './document.actions';


export interface State  {
    content: any;
    simplecontent: any;
 }


 export const initialState: State = {
  content: null,
  simplecontent: null
};


export function reducer(
  state = initialState,
  action: DocumentActions
  ): State {
  switch (action.type) {

    case DocumentActionTypes.LoadDocument: {
      return {
        content: action.payload.document,
        simplecontent : null
            };
      return state;
    }
    case DocumentActionTypes.ClearDocument: {
      console.log ('CLEAR CLEAR CLEAR CLEAR');
      return {
        content: null,
        simplecontent: null
            };
      return state;
    }
    default:
      return state;
  }

}

