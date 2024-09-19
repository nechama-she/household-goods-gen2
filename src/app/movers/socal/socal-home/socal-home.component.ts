import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SEOService } from '../../../services/SEOService/seo.service';

@Component({
  selector: 'app-socal-home',
  templateUrl: './socal-home.component.html',
  styleUrl: './socal-home.component.scss',
})
export class SocalHomeComponent {
  constructor(
    private titleService: Title,
    private meta: Meta,
    private seoService: SEOService
  ) {
    this.titleService.setTitle(
      'Household Goods Moving And Storage | Southern California Mover'
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Household Goods Moving and Storage: Your efficient mover in Southern California. Trust our experienced team for seamless transitions. Contact us for stress-free moving solutions',
    });
    this.meta.updateTag({
      name: 'og:description',
      content:
        'Household Goods Moving and Storage: Your efficient mover in Southern California. Trust our experienced team for seamless transitions. Contact us for stress-free moving solutions',
    });
  }
  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      this.seoService.setCanonicalURL();
    }
  }
}
