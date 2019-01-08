import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService }  from '../movie.service';
import { Stripe } from '../stripe';

@Component({
  selector: 'app-stripes',
  templateUrl: './stripes.component.html',
  styleUrls: ['./stripes.component.css']
})
export class StripesComponent implements OnInit {

  stripes: Stripe[];

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
     this.getStripes();
  }

  getStripes(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.movieService.getStripes(id)
        .subscribe(stripes => this.stripes = stripes  );
  }

}
