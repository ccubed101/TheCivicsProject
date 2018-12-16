import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
 // styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  collapse() {
    console.log("collapse");
    this.isExpanded = false;
  }

  toggle() {
    console.log("toggle");
    this.isExpanded = !this.isExpanded;
  }
}
