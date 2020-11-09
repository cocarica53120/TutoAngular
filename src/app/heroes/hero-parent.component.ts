import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Component({
    selector: 'app-hero-parent',
    templateUrl: './app/heroes/hero-parent.component.html'
})

export class HeroParentComponent implements OnInit {

    heroes: Hero[] = HEROES;
    master: string = "MasterMe";

    constructor() { }

    ngOnInit() { }
}