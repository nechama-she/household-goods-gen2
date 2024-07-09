import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dmv-home',
  templateUrl: './dmv-home.component.html',
  styleUrl: './dmv-home.component.scss',
})
export class DmvHomeComponent {
  //@ViewChild('epuTEbXvx') trustmaryWidget!: ElementRef;
  @ViewChild('456') skWidget!: ElementRef;
  scriptAdded: boolean = false;
  source: string;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private titleService: Title,
    private meta: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.source = activatedRoute.snapshot.paramMap.get('source');

    // this.logActivity('init');
    this.titleService.setTitle(
      'Household Goods Moving and Storage: Top-Rated Movers in The DMV'
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Household Goods Moving and Storage, your trusted choice for movers in the DMV area. Our dedicated team provides dependable, personalized moving solutions to ensure a smooth transition. Contact us now to start planning your stress-free move.',
    });
    this.meta.updateTag({
      name: 'og:description',
      content:
        'Household Goods Moving and Storage, your trusted choice for movers in the DMV area. Our dedicated team provides dependable, personalized moving solutions to ensure a smooth transition. Contact us now to start planning your stress-free move.',
    });
    this.meta.updateTag({
      name: 'og:image',
      content:
        'https://www.household-goods-moving-and-storage.com/assets/images/dmv/dmv_movers_og_image.jpg',
    });
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
