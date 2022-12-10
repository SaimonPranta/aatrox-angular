import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  handleSideNav = () => {
    // console.log(document.getElementById("menu-btn")?.)
    document.getElementById("sid-nav")?.classList.toggle("active-sid-nav-wraper")
    document.getElementById("main-wraper")?.classList.toggle("active-main-wraper")
    
  }
  handleMegaMenu = () => {
    document.getElementById("mega-menu-wraper")?.classList.toggle("active-mega-menu-wraper")
    document.getElementById("mega-menu-wraper-filter")?.classList.toggle("active-mega-menu-wraper-filter")

  }
  
  
}
