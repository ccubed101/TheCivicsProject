import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import { Feat1Comp1Component } from './feat1-comp1-component/feat1-comp1.component';

@NgModule({
  imports: [
    CommonModule,
    Feature1RoutingModule
  ],
  declarations: [
    Feat1Comp1Component,
  ]
})
export class Feature1Module {
}
