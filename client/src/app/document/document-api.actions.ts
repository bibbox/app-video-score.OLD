import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Document } from './document.model';

export enum DocumentsAPIActionTypes {
  LoadDocuments       = '[Documents API] Load Documents',
  LoadDocumentsSucess = '[Documents API] Load Documents Success',
  LoadDocumentsError  = '[Documents API] Load Documents Error',
  AddDocument         = '[Documents API] Add Document',
  AddDocumentSucess   = '[Documents API] Add Success',
  AddDocumentError    = '[Documents API] Add Error',
  SyncDocument        = '[Documents API] Sync Document'
}

export class LoadDocuments implements Action {
  readonly type = DocumentsAPIActionTypes.LoadDocuments;
}

export class LoadDocumentsSucess implements Action {
  readonly type = DocumentsAPIActionTypes.LoadDocumentsSucess;
}

export class LoadDocumentsError implements Action {
  readonly type = DocumentsAPIActionTypes.LoadDocumentsError;
}

export class AddDocument implements Action {
  readonly type = DocumentsAPIActionTypes.AddDocument;
}

export class AddDocumentSucess implements Action {
  readonly type = DocumentsAPIActionTypes.AddDocumentSucess;
}

export class AddDocumentError implements Action {
  readonly type = DocumentsAPIActionTypes.AddDocumentError;
}

export class SyncDocument implements Action {
  readonly type = DocumentsAPIActionTypes.SyncDocument;
  constructor(public payload: { document: Update<Document> }) {}
}

export type DocumentsAPIActions =
LoadDocuments
  | LoadDocumentsSucess
  | LoadDocumentsError
  | AddDocument
  | AddDocumentSucess
  | AddDocumentError
  | SyncDocument ;
