import { Component, Inject, PLATFORM_ID  } from '@angular/core';
import { DOCUMENT, isPlatformBrowser  } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  phoneLink = '12405707987';
  phone = '(240)-570-7987';
  homePageLink = '/';

  title = 'household-goods-moving';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
    private httpClient: HttpClient,
    private router: Router
  ) {
    
    // this.logActivity('init');
  }
  ngOnInit() {
 
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
  }
  openMenuModal() {
    let modal = this.document.getElementById('menuModal') as HTMLFormElement;
    modal.style.display = 'block';
    modal.classList.add('show');
  }
  
}
