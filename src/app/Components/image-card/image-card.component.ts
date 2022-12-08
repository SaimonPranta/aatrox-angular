import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent {
  @Input() item = {
    img: "",
    love: 0,
    comment: 0,
    daysAgo: 0
  }
}
