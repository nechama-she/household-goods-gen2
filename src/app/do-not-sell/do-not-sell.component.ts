import { Component } from '@angular/core';

@Component({
  selector: 'app-do-not-sell',
  templateUrl: './do-not-sell.component.html',
  styleUrl: './do-not-sell.component.scss',
})
export class DoNotSellComponent {
  continue() {
    // Implement navigation or logic to continue into site
    window.location.href = '/';
  }

  exitSite() {
    window.location.href = '/do-not-sell-ca'; // or any exit URL
  }
}
