import { createSelector } from '@ngrx/store';
import { Document} from './document.model';
import { AppState} from '../app-state/app-state';


export const selectDocumentContent = (state: AppState) => state.document.document.content;
