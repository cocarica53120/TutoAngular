import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing";

import { AppComponent } from "./app.component";
import { DetailPokemonComponent } from "./detail-pokemon.component";
import { ListPokemonComponent } from "./list-pokemon.component";
import { PageNotFoundComponent } from "./page-not-found.component";

import { BorderCardDirective } from "./border-card.directive";

@NgModule({
  imports: [
	  BrowserModule, 
	  AppRoutingModule
	],
  declarations: [
    AppComponent,
    BorderCardDirective,
    ListPokemonComponent,
    DetailPokemonComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
