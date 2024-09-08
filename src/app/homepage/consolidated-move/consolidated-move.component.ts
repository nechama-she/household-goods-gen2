import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-consolidated-move',
  templateUrl: './consolidated-move.component.html',
  styleUrl: './consolidated-move.component.scss',
})
export class ConsolidatedMoveComponent {
  phoneLink = '12405707987';
  phone = '(240)-570-7987';
  constructor(@Inject(DOCUMENT) private document: Document) {}
  openBookOnlineModal() {
    let modal = this.document.getElementById(
      'bookOnlineModal'
    ) as HTMLFormElement;
    modal.style.display = 'block';
    modal.classList.add('show');
    //this.logActivity('order callback');
  }
}
