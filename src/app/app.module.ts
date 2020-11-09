import { HeroModule } from './heroes/hero.module';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { PokemonsModule } from "./pokemons/pokemons.module";

import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { MyExperimentComponent } from "./my-experiment/my-experiment.component";

@NgModule({
  imports: [
    BrowserModule, 
    PokemonsModule, 
    HeroModule, 
    AppRoutingModule
  ],
  declarations: [	
    AppComponent,
    PageNotFoundComponent,
    MyExperimentComponent
   ],
  bootstrap: [AppComponent],
})
export class AppModule {}
