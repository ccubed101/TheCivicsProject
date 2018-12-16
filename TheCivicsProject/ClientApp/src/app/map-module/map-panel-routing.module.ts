import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapPanelComponent } from './map-panel/map-panel.component';

const routes: Routes = [
  {
    path: '', component: MapPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapPanelRoutingModule { }
