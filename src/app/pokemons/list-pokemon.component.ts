import { Component, Input, OnInit } from "@angular/core";
import { Router } from '@angular/router';

import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemons";

@Component({
  selector: "list-pokemon",
  templateUrl: "./app/pokemons/list-pokemon.component.html",
})
export class ListPokemonComponent implements OnInit {
  
  private pokemons: Pokemon[];
  private title: string = "Pokemons";
  private who: string = "Moi";
  private createdDateFormat: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.pokemons = POKEMONS;
    console.log("ngOnInit", this);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log("Vous avez clické sur " + pokemon.name);
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

  createdDateFormatToggle(event: Event) {
    console.log('createdDateFormatToggle', event);
    this.createdDateFormat = !this.createdDateFormat;
  }

}
