import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { Renderer, ViewChild } from '@angular/core'

import { Observable, of } from 'rxjs';
import { map, tap, take, mergeMap, catchError, finalize } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Stripe } from '../stripe';
import { Cut } from '../cut';

import { Store, select } from '@ngrx/store';
import { AppState } from '../app-state/app-state';
import { selectAllMovies, selectMovie, selectMoviesEntities } from '../entities/movie.selectors';

import { Movie } from '../entities/movie.model';
import { OMSubimageComponent } from '../omsubimage/omsubimage.component';

interface OMSubimage {
  centerFN: number;
  startFN: number;
  endFN: number;
}

@Component({
  selector: 'app-omimage',
  templateUrl: './omimage.component.html',
  styleUrls: ['./omimage.component.css']
})


export class OMImageComponent implements OnInit {

  @Input() startFN: number;
  @Input() endFN: number;
  n: number;
  subomis: OMSubimage[];

  constructor(private renderer: Renderer,
              private  movieService: MovieService,
              public   store: Store<AppState>,
              private route: ActivatedRoute) { }

  ngOnInit() {

    const NUMBEROFSMALLIMAGES = 4;
    const MINIMALSECONDS = 5;
    const FPS = 25;

    this.n = Math.ceil ((this.endFN - this.startFN + 1) / 25 / MINIMALSECONDS);
    const delta = (this.endFN - this.startFN + 1)  / this.n;
    this.subomis = [];

 //   console.log (this.n, this.delta);

    for (let num = 0; num < this.n ; num++) {
      const sfn = Math.round (this.startFN  + num * delta);
      const efn = Math.round (sfn + delta - 1);
      const cfn = Math.round ((sfn + efn) / 2.0);

      const subomi: OMSubimage = {centerFN: cfn, startFN: sfn, endFN: efn};
      this.subomis.push (subomi);
    }

   // console.log (this.subomis);
  }
}
