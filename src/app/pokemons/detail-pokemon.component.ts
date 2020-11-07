import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemons";

@Component({
  selector: "detail-pokemon",
  templateUrl: "./app/pokemons/detail-pokemon.component.html",
})
export class DetailPokemonComponent implements OnInit {
  private pokemons: Pokemon[] = null;
  private pokemon: Pokemon = null;
  private idAsked: number = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.pokemons = POKEMONS;
    this.idAsked = null;

    let id = +this.route.snapshot.params['id'];
    this.idAsked = id;
    
    const res: Pokemon[] = 
        this.pokemons.filter(pokemon => pokemon['id'] === id);
    this.pokemon = res.length > 0 ? res[0] : null;
  }

  goBack(): void {
      this.router.navigate(['/pokemons']);
    //   window.history.back();
  }
}
