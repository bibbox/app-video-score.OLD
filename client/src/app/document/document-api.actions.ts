import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Document } from './document.model';

export enum DocumentsAPIActionTypes {
  LoadDocument       = '[Document API] Load Document',
  LoadDocumentSucess = '[Document API] Load Document Success',
  LoadDocumentError  = '[Document API] Load Document Error',
  SyncDocument       = '[Document API] Sync Document'
}

export class LoadDocument implements Action {
  readonly type = DocumentsAPIActionTypes.LoadDocument;
  constructor(public payload: { id: number }) {}
}

export class LoadDocumentSucess implements Action {
  readonly type = DocumentsAPIActionTypes.LoadDocumentSucess;
}

export class LoadDocumentError implements Action {
  readonly type = DocumentsAPIActionTypes.LoadDocumentError;
}

export class SyncDocument implements Action {
  readonly type = DocumentsAPIActionTypes.SyncDocument;
  constructor(public payload: { document: Update<Document> }) {}
}

export type DocumentsAPIActions =
LoadDocument
  | LoadDocumentSucess
  | LoadDocumentError
  | SyncDocument ;
