import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SEOService } from '../../../services/SEOService/seo.service';

@Component({
  selector: 'app-chicago-home',
  templateUrl: './chicago-home.component.html',
  styleUrl: './chicago-home.component.scss',
})
export class ChicagoHomeComponent {
  constructor(
    private titleService: Title,
    private meta: Meta,
    private seoService: SEOService
  ) {
    this.titleService.setTitle(
      'Household Goods Moving And Storage | Chicago and Surrounding Area Mover'
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Household Goods Moving and Storage: Your efficient mover in Chicago and Surrounding Area. Trust our experienced team for seamless transitions. Contact us for stress-free moving solutions',
    });
    this.meta.updateTag({
      name: 'og:description',
      content:
        'Household Goods Moving and Storage: Your efficient mover in Chicago and Surrounding Area. Trust our experienced team for seamless transitions. Contact us for stress-free moving solutions',
    });
  }
  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      this.seoService.setCanonicalURL();
    }
  }
}
