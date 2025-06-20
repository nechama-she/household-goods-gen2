import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  phoneLink = '2405707987';
  phone = '(240)-570-7987';
  homePageLink = '/';

  title = 'household-goods-moving';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private httpClient: HttpClient,
    private router: Router
  ) {
    // this.logActivity('init');
  }

  closeSendQouteThankModal() {
    let modal = this.document.getElementById(
      'sendQouteThankModal'
    ) as HTMLFormElement;
    modal.style.display = 'none';
  }
  openOrderCallbackModal() {
    let modal = this.document.getElementById(
      'orderCallbackModal'
    ) as HTMLFormElement;
    modal.style.display = 'block';
    modal.classList.add('show');
    //this.logActivity('order callback');
  }
  openMenuModal() {
    let modal = this.document.getElementById('menuModal') as HTMLFormElement;
    modal.style.display = 'block';
    modal.classList.add('show');
  }
  logActivity(action) {
    let url = 'https://formspree.io/f/mwkgagwo';
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    let data = `url=${this.router.url}
        &action=${action}`;

    this.httpClient.post<any>(url, data, httpOptions).subscribe({
      next: (data) => {
        console.log('logged');
      },
      error: (error) => {},
    });
  }
}
