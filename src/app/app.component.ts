import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aatrox-angular';
  closeSideNav = () => {
    document.getElementById("sid-nav")?.classList.remove("active-sid-nav-wraper")
    document.getElementById("main-wraper")?.classList.remove("active-main-wraper")
  }
}
