import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../entities/movie.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MovieService }  from '../movie.service';
import { interval} from "rxjs/internal/observable/interval";
import { startWith, switchMap, takeWhile} from "rxjs/operators";
import { OnDestroy } from "@angular/core";

import { Observable, of } from 'rxjs';
import { map, tap, mergeMap, catchError, finalize } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';

import { StripesComponent } from '../stripes/stripes.component';
import { selectAllMovies, selectMovie, selectMoviesEntities } from '../entities/movie.selectors';
import { AppState } from '../app-state/app-state';
import { ConditionalExpr, CompileShallowModuleMetadata } from '@angular/compiler';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit, OnDestroy {

  @Input() movie: Movie;

  movies$ = this.store.pipe(select(selectMovie));

  private alive = true;
  private  id: number;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    public   store: Store<AppState>) { }

  ngOnDestroy() {
      console.log('[takeWhile] ngOnDestory');
      this.alive = false;
  }

  ngOnInit() {
 //   this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.id = parseInt( this.route.snapshot.paramMap.get('id'));
    console.log (this.id)
    console.log (this.movies$)
  }

  checkMovieStripeStatus () {
    if  (!this.alive)
        return false;
    if (this.movie)
        return (this.movie.stripeStatus < 100);
    else
        return true;
  }

  assignMovie (movie) {
    this.movie = movie
    console.log("Movie Data Structures, received from the Movie Service")
    console.log (movie)
    console.log (movie.stripeStatus)
  }


  goBack(): void {
      this.location.back();
  }

  computeStripes(): void {
    console.log("Start the Compute Stripes Process")
    this.store.pipe(
      select(selectMovie), 
      map( f => f(this.id))
      ).subscribe(m => this.movieService.computeStripe(m.id).subscribe());
  }

 computeCuts(): void {
    console.log("Start the Compute Cut Process")
    this.store.pipe(
      select(selectMovie), 
      map( f => f(this.id))
      ).subscribe(m => this.movieService.computeCuts(m.id).subscribe());
  }


}
