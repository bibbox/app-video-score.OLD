import { createSelector } from '@ngrx/store';
import { adapter } from './document.reducer';
import { Document} from './document.model';
import { AppState} from '../app-state/app-state';

const { selectEntities, selectAll } = adapter.getSelectors();


export const selectDocumentState = (state: AppState) => state.document.document;

export const selectAllDocuments  = createSelector(
  selectDocumentState,
  selectAll);

  export const selectDocumentsEntities = createSelector(
    selectDocumentState,
    selectEntities);
