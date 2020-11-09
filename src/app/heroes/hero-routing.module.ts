import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroParentComponent } from './hero-parent.component';

const heroesRoutes: Routes = [
    { path: 'heroes', component: HeroParentComponent },
]

@NgModule({
    imports: [RouterModule.forChild(heroesRoutes)],
    exports: [RouterModule],
})
export class HeroRoutingModule {}