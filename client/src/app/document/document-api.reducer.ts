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

    case DocumentsAPIActionTypes.LoadDocuments: {
//      console.log ('DocumentsAPIActionTypes.LoadDocuments');
      return Object.assign({}, state, {pending: true, error: null});
    }
    case DocumentsAPIActionTypes.LoadDocumentsSucess: {
//      console.log ('DocumentsAPIActionTypes.LoadDocumentsSucess');
      return Object.assign({}, state, {pending: false});
    }
    case DocumentsAPIActionTypes.LoadDocumentsError: {
      return Object.assign({}, state, {pending: false, error: 'ERROR'});
    }

    default:
      return state;
  }
}
