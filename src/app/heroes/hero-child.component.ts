import { HeroParentComponent } from './hero-parent.component';
import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-child',
  templateUrl: './app/heroes/hero-child.component.html'
})
export class HeroChildComponent implements OnInit {

  @Input() hero: Hero;
  @Input('master') masterName: string;

  constructor() { }

  ngOnInit() {
  }

}
