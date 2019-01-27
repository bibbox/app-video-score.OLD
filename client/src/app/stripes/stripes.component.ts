import { Component, ElementRef, OnInit } from '@angular/core';
import { Renderer, ViewChild } from '@angular/core'

import { ActivatedRoute } from '@angular/router';
import { MovieService }  from '../movie.service';
import { Stripe } from '../stripe';
import { Cut } from '../cut';

@Component({
  selector: 'app-stripes',
  templateUrl: './stripes.component.html',
  styleUrls: ['./stripes.component.css']
})


export class StripesComponent implements OnInit {

  stripes: Stripe[];
  cuts:    Cut[];

  @ViewChild('imageCanvas')   imageCanvas: ElementRef;
  @ViewChild('overlayCanvas') overlayCanvas: ElementRef;

  constructor(private renderer : Renderer, private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getStripes();
    this.getCuts();
  }

  drawImages () {
   let ctx: CanvasRenderingContext2D = this.imageCanvas.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, 1500, 800);
    var i = 0
    for (let s of this.stripes) {
//         console.log (i, s)
         let stripeimage = new Image();
         stripeimage.src = s.url;
         let y = i * 80
         stripeimage.onload = function ()
              {  ctx.drawImage(stripeimage, 0, y, 800, 75) };
         i = i + 1
    }
  }

  drawOverlay () {
    let ctx: CanvasRenderingContext2D = this.overlayCanvas.nativeElement.getContext('2d');
    ctx.strokeStyle = '#ff0000';
    for (let c of this.cuts) {
      let y = Math.floor(c.fn / 1500.0)
      let x = 800 * (c.fn - y*1500) / 1500
      ctx.beginPath();
      ctx.moveTo(x, y*80);
      ctx.lineTo(x, y*80+75);
      ctx.stroke();
    }
  }

  assignStripesAndDrawImages (stripes): void {
      this.stripes = stripes
      let h = this.stripes.length * 80
      this.renderer.setElementProperty(this.imageCanvas.nativeElement, "height", h.toString());
      this.drawImages()
  }

  assignCutsAndDrawOverlay (cuts): void {
      this.cuts = cuts
      console.log (cuts)
      let lastfn =  cuts[cuts.length-1].fn
      let h = 80 * Math.ceil(lastfn / 1500.0)
      this.renderer.setElementProperty(this.overlayCanvas.nativeElement, "height", h.toString());
      this.drawOverlay()
  }

  getStripes(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.movieService.getStripes(id)
        .subscribe(stripes => this.assignStripesAndDrawImages(stripes)  );
  }

  getCuts(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.movieService.getCuts(id)
        .subscribe ( cuts => this.assignCutsAndDrawOverlay(cuts) );
  }

}
