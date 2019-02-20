import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Document } from './document.model';

export enum DocumentActionTypes {
  LoadDocument  = '[Document] Load Document',
  ClearDocument = '[Document] Clear Document',

}

export class LoadDocument implements Action {
  readonly type = DocumentActionTypes.LoadDocument;
  constructor(public payload: { document: Document }) {}
}

export class ClearDocument implements Action {
  readonly type = DocumentActionTypes.ClearDocument;

}

export type DocumentActions =
  LoadDocument |
  ClearDocument;
