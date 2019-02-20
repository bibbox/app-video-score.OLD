import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { Renderer, ViewChild } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, tap, take, mergeMap, catchError, finalize } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';

import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-omimage',
  templateUrl: './omimage.component.html',
  styleUrls: ['./omimage.component.css']
})
export class OmImageComponent implements OnInit {

  @Input() s: number;
  @Input() e: number;
  @Input() n: number;
  @Input() movieuuid: string;

  ceurl: string;
  ceurls: string[];

  constructor(private renderer: Renderer,
              private route: ActivatedRoute) { }

  ngOnInit() {

    function pad(num: number, size: number): string {
      let s = num + '';
      while ( s.length < size ) { s = '0' + s; }
      return s;
      }
    this.ceurls = [];
    for (let  _i = 0; _i < this.n; _i++) {
        const luerl = 'static/cache/' +
        this.movieuuid + '/omi/'
              + pad (this.s, 8) + '_' +  pad (this.e, 8) + '/'
              + pad (_i, 8) + '.jpg';
        this.ceurls.push (luerl);
    }

    this.ceurl = 'static/cache/' +
                 this.movieuuid + '/omi/' 
                 + pad (this.s, 8) + '_' +  pad (this.e, 8) + '/'
                 + pad (0, 8) + '.jpg';

    // console.log (this.ceurl);
    // console.log (this.subomis);
  }
}
