import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Feat1Comp1Component } from './feat1-comp1-component/feat1-comp1.component';
import { SampleResolverService } from '../../core-module/resolvers/sample-resolver.service';

const routes: Routes = [
  { path: '', component: Feat1Comp1Component, resolve: { message: SampleResolverService } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feature1RoutingModule { }

