import { NgModule,  OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie, MovieState } from '../entities/movie.model';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class AppStateModule implements OnInit  {

  ngOnInit() {
      console.log ("*********** AppStateModule  *******************")
  }

}

export interface AppState {
  movies: MovieState;
}
