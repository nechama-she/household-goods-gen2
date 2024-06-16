import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-dmv-home',
  templateUrl: './dmv-home.component.html',
  styleUrl: './dmv-home.component.scss',
})
export class DmvHomeComponent {
  //@ViewChild('epuTEbXvx') trustmaryWidget!: ElementRef;
  @ViewChild('456') skWidget!: ElementRef;
  scriptAdded: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document) {
    // this.logActivity('init');
  }
  ngAfterViewInit() {
    if (!this.scriptAdded) {
      const script = this.document.createElement('script');
      script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
      script.async = true;
      if (this.skWidget.nativeElement.innerHTML == '')
        this.skWidget.nativeElement.appendChild(script);
      this.scriptAdded = true;
    }
  }
  openBookOnlineModal() {
    let modal = this.document.getElementById(
      'bookOnlineModal'
    ) as HTMLFormElement;
    modal.style.display = 'block';
    modal.classList.add('show');
    //this.logActivity('order callback');
  }
}
