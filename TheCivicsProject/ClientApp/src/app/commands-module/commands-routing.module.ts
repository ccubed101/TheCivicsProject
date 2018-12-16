import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandsPanelComponent } from './commands-panel/commands-panel.component';
import { CommandComponent } from './command/command.component';

const routes: Routes = [
  { path: '', component: CommandsPanelComponent, children: [
      { path: 'command', component: CommandComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandsRoutingModule { }
