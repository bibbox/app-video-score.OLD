import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, tap, take, mergeMap, catchError, finalize } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../app-state/app-state';

import { selectDocumentContent } from '../document.selectors';
import { selectAllMovies, selectMovie, selectMoviesEntities } from '../../entities/movie.selectors';


export interface OMImagePayload {
  movieuuid: string;
  s: number;
  e: number;
}

export interface ContentElement {
  id: string;
  payload: OMImagePayload;
}

@Component({
  selector: 'app-document-display',
  templateUrl: './document-display.component.html',
  styleUrls: ['./document-display.component.css']
})
export class DocumentDisplayComponent implements OnInit {

  content: any  = this.store.pipe(select(selectDocumentContent));
  co:  Observable<Array<any>>;
  pa:  Observable<Array<any>>;
  index:  Observable<Array<any>>;

  omimages: Observable<ContentElement[]>;

  constructor( private  store: Store<AppState>,
               private  router: Router ) { }

  ngOnInit() {

    abstract class Dictionary<T>  {
      [id: string]: T;
    }

    function reorder (ids: string[], entities: Dictionary<string>): any {
        return   ids.map((id: any) => (entities as any)[id]);
    }

    function makeCE (input: any): ContentElement[] {
      const ces: ContentElement[] = [];
      for (const i of input) {
        const ce: ContentElement = {id : i.id, payload: JSON.parse (i.payload)};
        ces.push (ce);
      }
      return ces;
  }


    // Object.assign({}, state, {pending: true, error: null});

    // TODO, check why v['content_element_index'] has to be eval-ed
    this.co = this.content.pipe (
       filter (v => v !== null),
       map  (v => {  if (v == null) {return null; }
                    const ce = reorder ( eval(v['content_element_index']), v['content_elements']);
                    return ce;
             }),
       map (v => makeCE(v))
     );

    this.index = this.content.pipe (
      filter (v => v !== null),
      map  (v => eval( v['content_element_index']))
    );

// <app-omsubimage  [startFN]="ce.startFN" [endFN]="somi.endFN" [centerFN]="ce.centerFN"></app-omsubimage>
    this.co.subscribe (v => console.log(v));
  }

}
