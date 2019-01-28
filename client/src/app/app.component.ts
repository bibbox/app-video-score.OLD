import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTable} from '@angular/material';
import {MatMenuModule} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Video Score';
  msg: string;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.initStore().subscribe(data => this.msg = data['msg']);
  }
}
