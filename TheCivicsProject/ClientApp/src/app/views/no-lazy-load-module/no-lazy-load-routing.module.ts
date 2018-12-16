import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoLazyLoadPanelComponent } from './no-lazy-load-panel/no-lazy-load-panel.component'

const routes: Routes = [
  {
    path: '', component: NoLazyLoadPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoLazyLoadRoutingModule { }
