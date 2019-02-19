import { Action } from '@ngrx/store';
import { DocumentsAPIActions, DocumentsAPIActionTypes } from './document-api.actions';
import { ConditionalExpr } from '@angular/compiler';
import { AppState} from '../app-state/app-state';


export interface State  {
  pending: false;
  error: null;
}

export const initialState: State = {
  pending: false,
  error: null
};

export function reducer(
  state = initialState,
  action: DocumentsAPIActions
  ): State {
  switch (action.type) {

    case DocumentsAPIActionTypes.LoadDocument: {
      console.log ('DocumentsAPIActionTypes.LoadDocument');
      return Object.assign({}, state, {pending: true, error: null});
    }
    case DocumentsAPIActionTypes.LoadDocumentSucess: {
      console.log ('DocumentsAPIActionTypes.LoadDocumentSucess');
      return Object.assign({}, state, {pending: false});
    }
    case DocumentsAPIActionTypes.LoadDocumentError: {
      return Object.assign({}, state, {pending: false, error: 'ERROR'});
    }

    default:
      return state;
  }
}
