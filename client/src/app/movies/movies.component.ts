import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../entities/movie.model';
import { ConditionalExpr } from '@angular/compiler';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { UpsertMovie, DeleteMovie } from '../entities/movie.actions';
import { selectAllMovies, selectMoviesEntities } from '../entities/movie.selectors';

import { AppState } from '../app-state/app-state';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  movies$: any         = this.store.pipe(select(selectAllMovies));
  movientitiedes$: any = this.store.pipe(select(selectMoviesEntities));

  constructor( private  store: Store<AppState> ) { }

  ngOnInit() {

    this.movies$.subscribe(m => console.log(m));
    this.movientitiedes$.subscribe(m => console.log(m));

 //   this.getMovies();
  }

  /*
  getMovies(): void {
   this.movieService.getMovies()
#        .subscribe(movies => this.movies =movies  );
#  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.movieService.addMovie({ name } as OOMovie)
      .subscribe(movie => {
        this.movies.push(movie);
      });
  }

  delete(movie: OOMovie): void {
    this.movies = this.movies.filter(h => h !== movie);
    this.movieService.deleteMovie(movie).subscribe();
  }
*/  
}
