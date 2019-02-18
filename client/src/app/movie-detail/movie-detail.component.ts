import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { startWith, switchMap, takeWhile} from "rxjs/operators";
import { interval} from "rxjs/internal/observable/interval";
import { Observable, of } from 'rxjs';
import { map, tap, take, mergeMap, catchError, finalize } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';

import { AppState } from '../app-state/app-state';

import { Movie } from '../entities/movie.model';
import { Cut } from '../cut';

import { selectAllMovies, selectMovie, selectMoviesEntities } from '../entities/movie.selectors';
import { MovieService } from '../movie.service';
import { StripesComponent } from '../stripes/stripes.component';
import { OMImageComponent } from '../omimage/omimage.component';

// <app-stripes></app-stripes>
// <ng-container *ngFor='let omi of omimages$ | async'><app-omimage [startFN]="omi.startFN" [endFN]="omi.endFN" ></app-omimage></ng-container>
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CompileShallowModuleMetadata, ConditionalExpr } from '@angular/compiler';


interface OMimage {
  id: number;
  startFN: number;
  endFN: number;
}

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit, OnDestroy {

  @Input() movie: Movie;

  movies$ = this.store.pipe(select(selectMovie));
  omimages$: Observable<OMimage[]>;

  private  id: number;

  constructor(
    private  route: ActivatedRoute,
    private  movieService: MovieService,
    private  location: Location,
    public   store: Store<AppState>) { }

  ngOnDestroy() {
  }

  ngOnInit() {
 //   this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.id = parseInt( this.route.snapshot.paramMap.get('id'), 10);
  //  this.store.subscribe ( s  => console.log(s) );


  this.omimages$ = this.movieService.getCuts(this.id).pipe (
    map ( cuts => this.makeOMImageDataStructure(cuts))
      );
  }

  makeOMImageDataStructure (cuts: Cut[]): OMimage[] {
    const omsl: OMimage[] = [];
    let i = 0;
    let start = 0;
    for (const c of cuts) {
      const om: OMimage = {id: i, startFN: start, endFN: c.fn - 1 };
      omsl.push (om);
   //   console.log (i, c);
      start = c.fn;
      i += 1;
    }

    return omsl;
  
  }

  assignMovie (movie: Movie) {
    this.movie = movie;
    console.log('Movie Data Structures, received from the Movie Service');
    console.log (movie);
    console.log (movie.stripeStatus);
  }


  goBack(): void {
      this.location.back();
  }

  computeStripes(): void {
    console.log('Start the Compute Stripes Process');
    this.store.pipe(
      take(1),
      select(selectMovie),
      map( f => f(this.id),
      tap( m => console.log(m)))
      ).subscribe(m => this.movieService.computeStripe(m.id));
  }

 computeCuts(): void {
    console.log('Start the Compute Cut Process');
    this.store.pipe(
      take(1),
      select(selectMovie),
      map( f => f(this.id))
      ).subscribe(m => this.movieService.computeCuts(m.id));
  }

  computeOMimages(): void {
    console.log('Start the Compute OM Images Process');
    this.store.pipe(
      take(1),
      select(selectMovie),
      map( f => f(this.id))
      ).subscribe(m => this.movieService.computeOMImages(m.id));
  }


}
