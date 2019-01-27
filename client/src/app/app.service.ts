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

  initStore() {
    console.log ('in the APP SERVICE class');
    this.store.dispatch(new MovieAPIActions.LoadMovies ());
    return this.http.get('/api/ping');
  }

  // SSE TESTING
/*
  connect(): void {
    let source = new EventSource('/stream');
    source.addEventListener('greeting', message => {
        this.myData = message;
        console.log (message)
    });

 }
*/

}
