import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-quote-modal',
  templateUrl: './quote-modal.component.html',
  styleUrl: './quote-modal.component.scss',
})
export class QuoteModalComponent {
  showForm = true;

  constructor(@Inject(DOCUMENT) private document: Document) {}
  closeBookOnlineModal() {
    console.log(this.showForm);
    let modal = this.document.getElementById(
      'bookOnlineModal'
    ) as HTMLFormElement;
    modal.style.display = 'none';
  }
}
