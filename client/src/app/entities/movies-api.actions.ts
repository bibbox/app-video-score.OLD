import { Action } from '@ngrx/store';

export enum MoviesAPIActionTypes {
  LoadMovies       = '[Movies API] Load Movies',
  LoadMoviesSucess = '[Movies API] Load Movies Success',
  LoadMoviesError  = '[Movies API] Load Movies Error',
  AddMovie         = '[Movies API] Add Movie',
  AddMovieSucess   = '[Movies API] Add Success',
  AddMovieError    = '[Movies API] Add Error',
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

export class AddMovie implements Action {
  readonly type = MoviesAPIActionTypes.AddMovie;
}

export class AddMovieSucess implements Action {
  readonly type = MoviesAPIActionTypes.AddMovieSucess;
}

export class AddMovieError implements Action {
  readonly type = MoviesAPIActionTypes.AddMovieError;
}

export type MoviesAPIActions =
LoadMovies
  | LoadMoviesSucess
  | LoadMoviesError
  | AddMovie
  | AddMovieSucess
  | AddMovieError;
