import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Document } from './document.model';

export enum DocumentActionTypes {
  LoadDocument = '[Document] Load Document',
}

export class LoadDocument implements Action {
  readonly type = DocumentActionTypes.LoadDocument;

  constructor(public payload: { documents: Document[] }) {}
}

export type DocumentActions =
  LoadDocument;
