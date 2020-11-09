import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroParentComponent } from './hero-parent.component';
import { HeroChildComponent } from './hero-child.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeroChildComponent,
    HeroParentComponent
  ],
  exports: [
    HeroRoutingModule
  ]

})
export class HeroModule { }
