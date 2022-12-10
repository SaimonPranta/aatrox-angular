import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  ngOnInit(): void {
    console.log("hello form ng On Init")
    console.log(document.querySelector(".right-nav"))
    
  }
  handleSideMenu = () => {
    document.getElementById("sid-nav")?.classList.toggle("active-sid-nav-wraper")
    document.getElementById("main-wraper")?.classList.toggle("active-main-wraper")
    
  }
  closeSideNav = () => {
    document.getElementById("sid-nav")?.classList.remove("active-sid-nav-wraper")
    document.getElementById("main-wraper")?.classList.remove("active-main-wraper")
    document.getElementById("sid-nav-blur-filter")?.classList.remove("active-sid-nav-blur-filter")

  }
}
