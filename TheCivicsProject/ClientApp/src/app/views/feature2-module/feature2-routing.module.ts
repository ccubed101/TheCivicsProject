import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Feat2Comp1Component } from './feat2-comp1-component/feat2-comp1.component';
import { Feat2Comp2Component } from './feat2-comp2-component/feat2-comp2.component';
import { CanActivateChildGuard } from '../authentication-module/guards/can-activate-child.guard';
import { CanDeactivateGuard } from '../authentication-module/guards/can-deactivate.guard';

const routes: Routes = [
  { path: '', component: Feat2Comp1Component, canActivateChild: [CanActivateChildGuard], canDeactivate: [CanDeactivateGuard], children: [
      { path: 'feat2-comp2', component: Feat2Comp2Component },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feature2RoutingModule { }

