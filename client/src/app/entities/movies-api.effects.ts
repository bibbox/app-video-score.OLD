import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { HttpClient} from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, finalize } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Movie } from './movie.model';

import * as MovieActions from './movie.actions';
import * as APIActions from './movies-api.actions';


import { AppState } from '../app-state/app-state';


@Injectable()
export class MovieApiEffects {

  private movieAPI = '/api/movies';  // URL to web api

  @Effect()
  loadMovies$ = this.actions$
  .pipe(
    ofType(APIActions.MoviesAPIActionTypes.LoadMovies),
    mergeMap(() => this.http.get<Movie[]>(this.movieAPI)
      .pipe
      (
        map (movies => (new MovieActions.LoadMovies ({movies: movies})) ),
        catchError(() => of({ type: '[Movie] Movies Loaded Error' })),
        finalize(() => this.store.dispatch(new APIActions.LoadMoviesSucess ()))
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