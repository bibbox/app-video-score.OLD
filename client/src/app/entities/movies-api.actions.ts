import { Action } from '@ngrx/store';

export enum MoviesAPIActionTypes {
  LoadMovies       = '[Movies API] Load Movies',
  LoadMoviesSucess = '[Movies API] Load Movies Success',
  LoadMoviesError  = '[Movies API] Load Movies Error'
}

export class LoadMovies implements Action {
  readonly type = MoviesAPIActionTypes.LoadMovies;
}

export class LoadMoviesSucess implements Action {
  readonly type = MoviesAPIActionTypes.LoadMoviesSucess;
}

export class LoadMoviesError implements Action {
  readonly type = MoviesAPIActionTypes.LoadMoviesError;
}


export type MoviesAPIActions = 
LoadMovies 
  | LoadMoviesSucess
  | LoadMoviesError;