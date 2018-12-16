import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandsRoutingModule } from './commands-routing.module';
import { CommandsPanelComponent } from './commands-panel/commands-panel.component';
import { CommandComponent } from './command/command.component';

@NgModule({
  imports: [
    CommonModule,
    CommandsRoutingModule,
  ],
  declarations: [
    CommandsPanelComponent,
    CommandComponent
  ]
})
export class CommandsModule {
}
