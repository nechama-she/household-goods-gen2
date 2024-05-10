import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-long-distance-moving',
  templateUrl: './long-distance-moving.component.html',
  styleUrl: './long-distance-moving.component.scss'
})
export class LongDistanceMovingComponent {
  @Input() phoneLink: string;
  @Input() phone: string;
}
