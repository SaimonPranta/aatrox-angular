import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  topCardInfo = [
    {
      icon: "fa-solid fa-user-group",
      amount: 30.2,
      text: "Total Followers",
      parcentage: 12.6
    },
    {
      icon: "fa-solid fa-user-group",
      amount: 30.2,
      text: "Total Followers",
      parcentage: 12.6
    },
    {
      icon: "fa-solid fa-user-group",
      amount: 30.2,
      text: "Total Followers",
      parcentage: 12.6
    },
    {
      icon: "fa-solid fa-user-group",
      amount: 30.2,
      text: "Total Followers",
      parcentage: 12.6
    }
  ]
}
