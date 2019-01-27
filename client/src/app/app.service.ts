import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AppState } from './app-state/app-state';

import * as MovieActions from './entities/movie.actions';
import * as MovieAPIActions from './entities/movies-api.actions';

import { Movie, MovieState } from './entities/movie.model';


@Injectable()
export class AppService {

  myData: any;

  constructor(private  http: HttpClient,
              public   store: Store<AppState>) {
  }

/*
  private movieAPI = '/api/movies';  // URL to web api


  assignMoviesFromHttpRequest (movies) {
       console.log ("assign movies");
       this.movies = movies;
       this.store.dispatch(new MovieActions.LoadMovies ({movies:movies}));
       
//       for (let m of  movies) {
//          this.store.dispatch(new MovieActions.ActionMoviesUpsertOne({movie:m}));
//       }
  }

  getMovies(): void {
    console.log ("in the APP SERVICE class *** getMovies")
    this.getMoviesObs()
        .subscribe(movies => this.assignMoviesFromHttpRequest(movies) );
  }

  getMoviesObs(): Observable<OOMovie[]> {
    let movies = this.http.get<OOMovie[]>(this.movieAPI)
    return movies;
  }

*/

  testRoute() {
    console.log ("in the APP SERVICE class")
    this.store.dispatch(new MovieAPIActions.LoadMovies ());
    return this.http.get('http://0.0.0.0:8077/api/ping');
  }

/*
  connect(): void {
    let source = new EventSource('http://0.0.0.0:8077/stream');
    source.addEventListener('greeting', message => {
        this.myData = message;
        console.log (message)
    });

 }
*/

}
