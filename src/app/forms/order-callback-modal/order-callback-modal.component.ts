import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-order-callback-modal',
  templateUrl: './order-callback-modal.component.html',
  styleUrl: './order-callback-modal.component.scss',
})
export class OrderCallbackModalComponent {
  showForm = true;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  closeOrderCallbackModal() {
    console.log(this.showForm);
    let modal = this.document.getElementById(
      'orderCallbackModal'
    ) as HTMLFormElement;
    modal.style.display = 'none';
  }
}
