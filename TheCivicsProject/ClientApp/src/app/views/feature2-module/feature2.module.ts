import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2RoutingModule } from './feature2-routing.module';
import { Feat2Comp1Component } from './feat2-comp1-component/feat2-comp1.component';
import { Feat2Comp2Component } from './feat2-comp2-component/feat2-comp2.component';

@NgModule({
  imports: [
    CommonModule,
      Feature2RoutingModule,
  ],
  declarations: [
    Feat2Comp1Component,
    Feat2Comp2Component
  ]
})
export class Feature2Module {
}
