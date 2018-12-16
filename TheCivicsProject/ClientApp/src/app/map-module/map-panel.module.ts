import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapPanelRoutingModule } from './map-panel-routing.module';
import { MapPanelComponent } from './map-panel/map-panel.component';

@NgModule({
  imports: [
    CommonModule,
    MapPanelRoutingModule
  ],
  declarations: [
    MapPanelComponent
  ]
})
export class MapPanelModule { }
