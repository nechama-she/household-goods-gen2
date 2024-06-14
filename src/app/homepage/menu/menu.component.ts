import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  closeMenuModal() {
    let modal = this.document.getElementById('menuModal') as HTMLFormElement;
    modal.style.display = 'none';
  }
}
