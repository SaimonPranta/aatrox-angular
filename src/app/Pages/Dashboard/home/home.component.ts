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
      parcentage: 12.6,
      color: "#8B5CF6",
      cornerIcon: "",
      cornerImg: ""
    },
    {
      icon: "fa-solid fa-gears",
      amount: 9.2,
      text: "Impressions",
      parcentage: 58.6,
      color: "#22C55E",
      cornerIcon: "location_on",
      cornerImg: ""
    },
    {
      icon: "fa-solid fa-address-book",
      amount: 1.2,
      text: "Connect",
      parcentage: 5.6,
      color: "#EF4444",
      cornerIcon: "",
      cornerImg: "https://aatrox-demo.vercel.app/preview/layout3/assets/images/faces/2.jpg"
    },
    {
      icon: "fa-regular fa-envelope",
      amount: 18.2,
      text: "Rate Review",
      parcentage: 5.6,
      color: "#6366F1",
      cornerIcon: "",
      cornerImg: ""
    }
  ];
  imgCardInfo = [
    {
      img: "https://aatrox-demo.vercel.app/preview/layout3/assets/images/gallery/sq-10.jpg",
      love: 2.3,
      comment: 900,
      daysAgo: 23
    },
    {
      img: "https://aatrox-demo.vercel.app/preview/layout3/assets/images/gallery/sq-8.jpg",
      love: 2.3,
      comment: 400,
      daysAgo: 49
    },
    {
      img: "https://aatrox-demo.vercel.app/preview/layout3/assets/images/gallery/sq-6.jpg",
      love: 2.3,
      comment:700,
      daysAgo: 12
    },
    {
      img: "https://aatrox-demo.vercel.app/preview/layout3/assets/images/gallery/sq-4.jpg",
      love: 2.3,
      comment: 950,
      daysAgo: 32
    }
  ]
  solidCardInfo = [
    {
      icon: "fa-solid fa-user-group",
      amount: 30.2,
      text: "Reach",
      parcentage: 12.6,
      color: "#8B5CF6",
      cornerIcon: "",
      cornerImg: ""
    },
    {
      icon: "fa-solid fa-gears",
      amount: 9.2,
      text: "Engagement",
      parcentage: 58.6,
      color: "#22C55E",
      cornerIcon: "",
      cornerImg: ""
    },
    {
      icon: "fa-solid fa-address-book",
      amount: 1.2,
      text: "Connect",
      parcentage: 5.6,
      color: "#EF4444",
      cornerIcon: "",
      cornerImg: ""
    },
    {
      icon: "fa-regular fa-envelope",
      amount: 18.2,
      text: "Rate Review",
      parcentage: 5.6,
      color: "#6366F1",
      cornerIcon: "",
      cornerImg: ""
    }
  ];
}
