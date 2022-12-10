import { Component } from '@angular/core';

@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss']
})
export class MegaMenuComponent {
  removeMegaMenuWraper = () => {
    document.getElementById("mega-menu-wraper")?.classList.remove("active-mega-menu-wraper")
    document.getElementById("mega-menu-wraper-filter")?.classList.remove("active-mega-menu-wraper-filter")
    
  }
}
