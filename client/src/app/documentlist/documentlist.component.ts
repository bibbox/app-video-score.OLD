import { Component, OnInit } from '@angular/core';
import { DocListEntry, DocumentService } from '../document.service';

import { Observable, of } from 'rxjs';
import { filter, map, find, skip, take, tap, delay, mapTo, concat, retryWhen } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { AppState } from '../app-state/app-state';


@Component({
  selector: 'app-documentlist',
  templateUrl: './documentlist.component.html',
  styleUrls: ['./documentlist.component.css']
})

export class DocumentListComponent implements OnInit {

  documents$: Observable<DocListEntry[]>;
  displayedColumns: string[] = ['name', 'uuid'];

  constructor( private  ds: DocumentService,
               public   store: Store<AppState> ) { }

  ngOnInit() {
    this.documents$ = this.ds.getDocuments();
  }

  openDocument (row: DocListEntry): void {
    console.log('Load Document', row.name);
    this.store.dispatch({ type: '[Document API] Load Document',
                          payload: {id: row.id} }) ;
  }

}
