import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MovieService }  from '../movie.service';
import { interval} from "rxjs/internal/observable/interval";
import { startWith, switchMap, takeWhile} from "rxjs/operators";
import { OnDestroy } from "@angular/core";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit, OnDestroy {

  @Input() movie: Movie;
  private alive = true;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location) { }

  ngOnDestroy() {
      console.log('[takeWhile] ngOnDestory');
      this.alive = false;
  }

  ngOnInit() {
      this.getMovie();

      interval(1000)
        .pipe(
          startWith(0),
          takeWhile(() => this.checkMovieStripeStatus()),
          switchMap(() => this.movieService.getMovie( parseInt(this.route.snapshot.paramMap.get('id'))) )
        )
        .subscribe(movie => this.assignMovie(movie));
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

  getMovie(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id)
          .subscribe(movie => this.assignMovie(movie));
  }

  goBack(): void {
      this.location.back();
  }

  computeStripes(): void {
    console.log("Start the Compute Stripes Process")
    this.movieService.computeStripe (this.movie).subscribe();
  }

 computeCuts(): void {
    console.log("Start the Compute Cut Process")
    this.movieService.computeCuts (this.movie).subscribe();
  }


}
