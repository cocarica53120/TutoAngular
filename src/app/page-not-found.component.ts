import { Component } from "@angular/core";

@Component({
    selector: 'app-404',
    template: `
    <div class="center">
        <h1>Hey, cette page n'existe pas!!!!</h1>
        <a routerLink="/pokemons" class="waves-effect wave-teal btn-flat"> 
        Retourner à l'accueil
        </a> 
    </div>`
})
export class PageNotFoundComponent {};
