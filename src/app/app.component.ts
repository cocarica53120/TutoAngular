import { NumberSymbol } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "pokemon-app",
  templateUrl: "app/app.component.html",
})
export class AppComponent implements OnInit {
  private countdownMaster: number;
  private value: number;

  constructor(private router: Router) {}

  ngOnInit() {
    this.countdownMaster = 0;
  }

  onClickPokemons(event: any) {
    this.router.navigate(["/pokemons"]);
  }

  onClickHeroes(event: any) {
    this.router.navigate(["/heroes"]);
  }

  onCountdown(cnt: any) {
    console.log("countDown", cnt);
    this.countdownMaster = cnt;
    this.value = cnt + 200;
  }
}
