import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Video Score';
  msg: string;

  constructor(private appService: AppService,
              private router: Router) {
  }

  ngOnInit() {
    this.appService.initStore().subscribe(data => this.msg = data['msg']);
  }

  openMovieList() {
    console.log ("KLICJ");
    this.router.navigateByUrl('/movies');
  }
}
