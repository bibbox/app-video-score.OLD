import { createSelector } from '@ngrx/store';
import { adapter } from './movie.reducer';
import { Movie, MovieState } from './movie.model';
import { AppState} from '../app-state/app-state';

const { selectEntities, selectAll } = adapter.getSelectors();


export interface State extends AppState {
  movies: MovieState;
}

export const selectMovieState = (state: AppState) => state.movies;

export const selectAllMovies  = createSelector(
  selectMovieState, 
  selectAll);

  export const selectMoviesEntities = createSelector(
    selectMovieState, 
    selectEntities);

export const selectMovie= createSelector(
  selectMoviesEntities, 
  movie => (id: number) => movie[id]
);

/*
export const singleMovieSelector = createSelector(
  selectMoviesEntities,
  yourIdSelector,
  (entities, id) => entities[id]
);
*/