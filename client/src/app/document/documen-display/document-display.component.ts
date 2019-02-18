import { Component, OnInit } from '@angular/core';


import { Store, select } from '@ngrx/store';
import { AppState } from '../../app-state/app-state';

import { selectAllDocuments } from '../document.selectors';
import { selectAllMovies, selectMovie, selectMoviesEntities } from '../../entities/movie.selectors';



@Component({
  selector: 'app-document-display',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class DocumentDisplayComponent implements OnInit {

  tasks$: any  = this.store.pipe(select(selectAllDocuments));
  movies$ = this.store.pipe(select(selectMovie));

  displayedColumns: string[] = ['movieID', 'actionID', 'state', 'progress'];

  constructor( private  store: Store<AppState> ) { }

  ngOnInit() {
  //  this.tasks$.subscribe (v => console.log(v));
  }

}
