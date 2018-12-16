import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoLazyLoadRoutingModule } from './no-lazy-load-routing.module';
import { NoLazyLoadPanelComponent } from './no-lazy-load-panel/no-lazy-load-panel.component';

@NgModule({
  imports: [
    CommonModule,
    NoLazyLoadRoutingModule
 ],
  declarations: [NoLazyLoadPanelComponent]
})
export class NoLazyLoadModule {



}

// By defining this function and referencing it in app-routing.module.ts we force the eager loading of this feature module
// but at the same time allow the routing for this feature module to be contained completely in no-lazy-load-routing.module.ts.
// (Which means this module's components don't have to be imported into app-routing.module.ts.  Which is a way to insure that
// your application is indepedent and well-structured.)
export function NoLazyLoadingEntrypoint() {
  return NoLazyLoadModule;
}
