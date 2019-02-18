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
import { ConditionalExpr } from '@angular/compiler';


@Component({
  selector: 'app-omsubimage',
  templateUrl: './omsubimage.component.html',
  styleUrls: ['./omsubimage.component.css']
})


export class OMSubimageComponent implements OnInit {

  @Input() startFN: number;
  @Input() endFN: number;
  @Input() centerFN: number;

  movies$ = this.store.pipe(select(selectMovie));
  stripes: Stripe[];


  mset = false;
  sset = false;

  mlocal: Movie;
  aspectRatio = 1.0;

  @ViewChild('outerdiv') outerdiv: ElementRef;

  @ViewChild('omcanvas') omCanvas: ElementRef;
  @ViewChild('overlayCanvas') overlayCanvas: ElementRef;

  constructor(private renderer: Renderer,
    private movieService: MovieService,
    public store: Store<AppState>,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.store.pipe(
      select(selectMovie),
      map(f => f(id))
    ).subscribe(m => this.setMovieParameters(m));

    this.getStripes();

  }

  setMovieParameters(m: Movie) {
    if (m) {
      //      console.log('movie received');
      this.mset = true;
      this.mlocal = m;
      this.aspectRatio = m.height / m.width;
    }
  }

  drawOMSubImage() {

    if (this.sset && this.mset) {

      const ctx: CanvasRenderingContext2D = this.omCanvas.nativeElement.getContext('2d');

      const NUMBEROFSMALLIMAGES = 4;

      const SMALLIMAGEWITH = 30;
      const BIGIMAGEWITH = SMALLIMAGEWITH * NUMBEROFSMALLIMAGES;
      const SMALLIMAGEHEIGHT = Math.round(SMALLIMAGEWITH * this.aspectRatio);
      const BIGIMAGEHEIGTH = Math.round(BIGIMAGEWITH * this.aspectRatio);
      const STRIPEHEIGHT = BIGIMAGEHEIGTH;

      const HEIGHT = STRIPEHEIGHT + SMALLIMAGEHEIGHT + BIGIMAGEHEIGTH + 35;
      const WIDTH = BIGIMAGEWITH;
 
      this.renderer.setElementProperty(this.omCanvas.nativeElement, 'height', HEIGHT.toString());
      this.renderer.setElementProperty(this.omCanvas.nativeElement, 'width', WIDTH.toString());
    
      const url =  '/api/movie/' + this.mlocal.id + '/frame/' + this.centerFN;
      const request = new XMLHttpRequest();
      request.open('GET', url);
      request.responseType = 'blob';
      request.onload = function() {
        const nuroImage = new Image;
        nuroImage.src = URL.createObjectURL(this.response);
        nuroImage.onload = function () {
        
          ctx.drawImage(nuroImage, 0, 0, BIGIMAGEWITH, BIGIMAGEHEIGTH);
        };
      };
      request.send();

     
      const delta = (this.endFN - this.startFN) / NUMBEROFSMALLIMAGES;


      for (let num = 0; num < NUMBEROFSMALLIMAGES; num++) {

        let frnum = Math.round(this.startFN +  num * delta);
        const surl =  '/api/movie/' + this.mlocal.id + '/frame/' + frnum;
        const request = new XMLHttpRequest();
        request.open('GET', surl);
        request.responseType = 'blob';
        request.onload = function() {
          const nuroImage = new Image;
          nuroImage.src = URL.createObjectURL(this.response);
          nuroImage.onload = function () {
             ctx.drawImage(nuroImage, num * SMALLIMAGEWITH, BIGIMAGEHEIGTH, SMALLIMAGEWITH, SMALLIMAGEHEIGHT);
            };
        };
      request.send();

      }
      ctx.stroke();



      ctx.strokeStyle = '#ff0000';
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      const i = 0;
      ctx.rect(0, 0, WIDTH, BIGIMAGEHEIGTH);
      ctx.rect(0, BIGIMAGEHEIGTH, WIDTH, SMALLIMAGEHEIGHT);
      ctx.rect(0, BIGIMAGEHEIGTH + SMALLIMAGEHEIGHT, WIDTH, STRIPEHEIGHT);

      
      const startStripe = Math.floor(this.startFN / 1500);
      const endStripe = Math.floor(this.endFN / 1500);
      const sheight = this.mlocal.height;

      if (startStripe === endStripe) {
        // we only have one stripe
        const xstart = this.startFN - startStripe * 1500;
        const xend = this.endFN - endStripe * 1500;
        const swidth = xend - xstart + 1;


        if (this.stripes) {
          //console.log (xstart, xend, swidth, sheight);
          const s: Stripe = this.stripes[startStripe];
          const stripeimage = new Image();
          stripeimage.src = s.url;
          stripeimage.onload = function () {
            ctx.drawImage(stripeimage,
              xstart, 0, swidth, sheight,
              0, BIGIMAGEHEIGTH + SMALLIMAGEHEIGHT, BIGIMAGEWITH, STRIPEHEIGHT);
          };
        }
      }
      else {
        const xstart2 = this.startFN - startStripe * 1500;
        const xend2 = 1500;
        const swidth2 = xend2 - xstart2 + 1;


        if (this.stripes) {
          // console.log (xstart, xend, swidth, sheight);
          const s: Stripe = this.stripes[startStripe];
          const stripeimage = new Image();
          stripeimage.src = s.url;
          stripeimage.onload = function () {
            ctx.drawImage(stripeimage,
              xstart2, 0, swidth2, sheight,
              0, BIGIMAGEHEIGTH + SMALLIMAGEHEIGHT, BIGIMAGEWITH, STRIPEHEIGHT);
          };
        }
        const xstart3 = 0;
        const xend3 = this.endFN - endStripe * 1500;
        const swidth3 = xend3 - xstart3 + 1;


        if (this.stripes) {
          // console.log (xstart, xend, swidth, sheight);
          const s: Stripe = this.stripes[endStripe];
          const stripeimage = new Image();
          stripeimage.src = s.url;
          stripeimage.onload = function () {
            ctx.drawImage(stripeimage,
              xstart3, 0, swidth3, sheight,
              0, BIGIMAGEHEIGTH + SMALLIMAGEHEIGHT, BIGIMAGEWITH, STRIPEHEIGHT);
          };
        }




      }
    }
  }

  assignStripes(stripes): void {
    this.stripes = stripes;
    this.sset = true;
    //      console.log(this.stripes );
    this.drawOMSubImage();
  }

  getStripes(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.movieService.getStripes(id)
      .subscribe(stripes => this.assignStripes(stripes));
  }
}
