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

  private documentAPI = '/api/document';  // URL to web api

  @Effect()
  loadDocuments$ = this.actions$
  .pipe(
    ofType(DocumentAPIActions.DocumentsAPIActionTypes.LoadDocument),
    mergeMap(() => this.http.get<Document[]>(this.documentAPI)
      .pipe
      (
        map (documents => (new DocumentActions.LoadDocument ({documents: documents})) ),
        catchError(() => of({ type: '[Document] Documents Loaded Error' })),
        finalize(() => this.store.dispatch(new DocumentAPIActions.LoadDocumentSucess ()))
      )

    )
  );

  constructor(
    private  http: HttpClient,
    private  actions$: Actions,
    public   store: Store<AppState>
  ) {
  }
}
