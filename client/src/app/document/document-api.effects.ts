import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { HttpClient} from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap, mergeMap, catchError, finalize, concatMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Document } from './document.model';

import * as DocumentActions from './document.actions';
import * as DocumentAPIActions from './document-api.actions';


import { AppState } from '../app-state/app-state';

@Injectable()
export class DocumentApiEffects {

  private documentAPI = '/api/documents';  // URL to web api

  @Effect()
  loadDocuments$ = this.actions$
  .pipe(
    ofType(DocumentAPIActions.DocumentsAPIActionTypes.LoadDocuments),
    mergeMap(() => this.http.get<Document[]>(this.documentAPI)
      .pipe
      (
        map (documents => (new DocumentActions.LoadDocuments ({documents: documents})) ),
        catchError(() => of({ type: '[Document] Documents Loaded Error' })),
        finalize(() => this.store.dispatch(new DocumentAPIActions.LoadDocumentsSucess ()))
      )

    )
  );

  @Effect()
  syncDocument$ = this.actions$
  .pipe(
    ofType<DocumentAPIActions.SyncDocument>(DocumentAPIActions.DocumentsAPIActionTypes.SyncDocument),
//    tap (() => console.log('have to sync a document')),
    concatMap( syncaction => [
      new DocumentActions.UpdateDocument( {document: syncaction.payload.document} )
    ])
  );


  constructor(
    private  http: HttpClient,
    private  actions$: Actions,
    public   store: Store<AppState>
  ) {
  }
}
