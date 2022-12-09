import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  handleSideMenu = () => {
    console.log(document.getElementById("menu-btn"))
    document.getElementById("sid-nav")?.classList.toggle("active-sid-nav-wraper")
    document.getElementById("main-wraper")?.classList.toggle("active-main-wraper")
    
  }
}
