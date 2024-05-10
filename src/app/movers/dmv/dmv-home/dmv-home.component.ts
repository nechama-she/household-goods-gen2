import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-dmv-home',
  templateUrl: './dmv-home.component.html',
  styleUrl: './dmv-home.component.scss',
})
export class DmvHomeComponent {
  @ViewChild('epuTEbXvx') trustmaryWidget!: ElementRef;
  scriptAdded: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document) {
    // this.logActivity('init');
  }
  ngAfterViewInit() {
    if (!this.scriptAdded) {
      const script = this.document.createElement('script');
      script.src = 'https://widget.trustmary.com/epuTEbXvx';
      script.async = true;
      if (this.trustmaryWidget.nativeElement.innerHTML == '')
        this.trustmaryWidget.nativeElement.appendChild(script);
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
