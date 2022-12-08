import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-solid-card',
  templateUrl: './solid-card.component.html',
  styleUrls: ['./solid-card.component.scss']
})
export class SolidCardComponent {
  @Input() item = {
    icon: "",
    amount: 0,
    text: "",
    parcentage: 0
  }
}
