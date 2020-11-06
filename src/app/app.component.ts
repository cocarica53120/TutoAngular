import { Component, OnInit } from "@angular/core";

import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemons";

@Component({
  selector: "pokemon-app",
  templateUrl: "app/app.component.html",
  // template: `<h1> Liste de Pokemons </h1>`
})
export class AppComponent implements OnInit {
  
  private pokemons: Pokemon[];
  private title: string = "Pokemons";
  private who: string = "Moi";

  ngOnInit() {
    this.pokemons = POKEMONS;
    console.log("ngOnInit", this);
  }

  selectPokemon(pokemon: Pokemon) {
    alert("Vous avez clické sur " + pokemon.name);
  }

}
